const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const crypto = require("crypto");
const admin = require("firebase-admin");

if (!admin.apps.length) admin.initializeApp();
const db = admin.firestore();
setGlobalOptions({ maxInstances: 10, region: "us-central1" });

exports.kiwifyWebhook = onRequest(
  { cors: true, secrets: ["GITHUB_TOKEN", "SECRET_SALT"] },
  async (req, res) => {
    const body = req.body;
    const email = body.Customer?.email || body.customer?.email;
    const orderStatus = body.order_status || body.order?.order_status;
    if (!email) return res.status(400).json({error:"no email"});
    if (!["paid","approved","Aprovado","Pago"].includes(orderStatus || "paid")) {
      return res.status(200).json({ok:true, ignored: orderStatus});
    }
    const salt = process.env.SECRET_SALT || "domis_salt_2026";
    const hash = crypto.createHash("sha256").update(email + ":" + salt).digest("hex").slice(0,12).toUpperCase();
    const PRO_KEY = `DOMIS-${hash.slice(0,4)}-${hash.slice(4,8)}-${hash.slice(8,12)}`;

    await db.collection("users").doc(email).set({
      email, pro_key: PRO_KEY,
      created_at: admin.firestore.FieldValue.serverTimestamp()
    }, {merge:true});

    const githubUser = body.Customer?.github || body.custom_fields?.github || null;
    if (githubUser && process.env.GITHUB_TOKEN) {
      try {
        const {Octokit} = require("@octokit/rest"); // lazy load pra não travar deploy
        const octokit = new Octokit({auth: process.env.GITHUB_TOKEN});
        await octokit.rest.repos.addCollaborator({
          owner: "Domisnnet", repo: "DomisPacks-Technical",
          username: githubUser, permission: "pull"
        });
        logger.info(`Invite enviado para ${githubUser}`);
      } catch(e){ logger.error("GitHub error: " + e.message); }
    }
    return res.status(200).json({ ok: true, email, pro_key: PRO_KEY });
  }
);

exports.ping = onRequest((req,res)=> res.send("online " + new Date().toISOString()));

exports.verifyProKey = onRequest({ cors: true }, async (req,res)=>{
  res.set("Access-Control-Allow-Origin","*");
  const key = (req.query.key||"").toString().trim().toUpperCase();
  if(!key) return res.status(400).json({valid:false});
  const snap = await db.collection("users").where("pro_key","==",key).limit(1).get();
  if(snap.empty) return res.status(200).json({valid:false, pro_key:key});
  const data = snap.docs[0].data();
  return res.status(200).json({valid:true, pro_key:key, email:data.email});
});