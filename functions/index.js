const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const {Octokit} = require("@octokit/rest");
const crypto = require("crypto");

setGlobalOptions({ maxInstances: 10, region: "us-central1" });

// WEBHOOK KIWIFY -> GITHUB + PRO_KEY
exports.kiwifyWebhook = onRequest(
  { cors: true, secrets: ["GITHUB_TOKEN", "SECRET_SALT"] },
  async (req, res) => {
    if (req.method !== "POST") return res.status(405).send("Use POST");

    const body = req.body;
    const orderStatus = body.order_status || body.order?.order_status;
    const email = body.Customer?.email || body.customer?.email;
    const name = body.Customer?.full_name || "Cliente";

    logger.info("Webhook Kiwify recebido", {orderStatus, email});

    if (!["paid", "approved", "Aprovado", "Pago"].includes(orderStatus)) {
      return res.status(200).json({ok:true, ignored: orderStatus});
    }
    if (!email) return res.status(400).json({error:"no email"});

    // Gera PRO_KEY ex: DOMIS-A1B2-C3D4-E5F6
    const salt = process.env.SECRET_SALT || "domis_salt_2026";
    const hash = crypto.createHash("sha256").update(email + ":" + salt).digest("hex").slice(0,12).toUpperCase();
    const PRO_KEY = `DOMIS-${hash.slice(0,4)}-${hash.slice(4,8)}-${hash.slice(8,12)}`;

    // Invite GitHub se cliente preencheu campo github na Kiwify
    const githubUser = body.Customer?.github || body.custom_fields?.github || null;
    if (githubUser && process.env.GITHUB_TOKEN) {
      try {
        const octokit = new Octokit({auth: process.env.GITHUB_TOKEN});
        await octokit.rest.repos.addCollaborator({
          owner: "Domisnnet",
          repo: "DomisPacks-Technical",
          username: githubUser,
          permission: "pull",
        });
        logger.info(`Invite GitHub enviado para ${githubUser}`);
      } catch(e) {
        logger.error("Erro GitHub invite", e.message);
      }
    }

    // Aqui você envia email com Resend/SendGrid depois
    logger.info(`VENDA: ${email} | PRO_KEY: ${PRO_KEY} | GH: ${githubUser || "sem username"}`);
    return res.status(200).json({
      ok: true,
      email,
      pro_key: PRO_KEY,
      github_invite: githubUser ? "sent" : "awaiting - informe seu @github no checkout",
      next_step: "npx create-domis@latest e cole sua PRO_KEY"
    });
  }
);

// Health check
exports.ping = onRequest((req, res) => {
  res.send("DomisDocs webhook online! " + new Date().toISOString());
});