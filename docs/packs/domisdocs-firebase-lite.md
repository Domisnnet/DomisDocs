---
title: DomisDocs Firebase Lite - R$49 - Fix Essencial
description: Fix definitivo para deploy Angular 17-20 + Firebase Hosting - Repositório Privado DomisPacks-Technical
next:
  text: '💎 DomisDocs Pro - R$199'
  link: '/packs/domisdocs-firebase-pro'
prev:
  text: 'Vitrine - Todos os Packs'
  link: '/packs/'
---

::: info 🚀 PACK LITE - R$49 | FIX ESSENCIAL | REPO PRIVADO DomisPacks-Technical
Fix essencial e imediato para quem travou no deploy do Angular no Firebase. Resolve os 2 erros que 90% dos devs enfrentam. Entrega via repositório privado DomisPacks-Technical.
:::
&nbsp;

---

# 🚀 DomisDocs Firebase Lite - R$49

> **Fix em 5 minutos para o erro `Could not find public directory` + 404 SPA.**

Se você travou no deploy do Angular 17-20 no Firebase, esse Lite resolve agora.

### Repositórios:

> **Vitrine Pública:** `DomisDocs-Technical` &nbsp; **Documentação aberta.**
>
> **Entrega Privada:** `DomisPacks-Technical` &nbsp; **Repositório privado após pagamento.**

## 😤 Você travou nisso?

```
Error: Could not find public directory: dist/seu-app/browser
Error: 404 on refresh - página não encontrada ao dar F5
```

**O Lite resolve em 5 minutos com o `firebase.json` certo.**

## ✅ O que vem no Lite - Repo Privado DomisPacks-Technical

```
github.com/Domisnnet/DomisPacks-Technical (PRIVADO)
└── packs/
    └── domisdocs-firebase-lite/
        ├── firebase.json              # Corrigido Angular 17-20
        ├── .firebaserc
        └── README.md                  # Passo a passo
```

### 📄 firebase.json que funciona

```json
{
  "hosting": {
    "public": "dist/domflix/browser",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{ "source": "**", "destination": "/index.html" }],
    "headers": [
      {
        "source": "**/*.@(js|css)",
        "headers": [{ "key": "Cache-Control", "value": "max-age=31536000" }]
      }
    ]
  }
}
```

## 🛠 Instalação Lite - Repo Privado

### 1. Paga na Kiwify
Recebe `PRO_KEY` por e-mail na hora.

### 2. Aceita convite GitHub
`Domisnnet invited you to DomisPacks-Technical` - Aceita no e-mail.

### 3. Clona o privado
```bash
# Use sua PRO_KEY como token
git clone https://SUA_PRO_KEY@github.com/Domisnnet/DomisPacks-Technical.git
cd DomisPacks-Technical/packs/domisdocs-firebase-lite
cp firebase.json SEU-PROJETO/
cp .firebaserc SEU-PROJETO/
```

### 4. Ou via CLI (recomendado)
```bash
npx create-domis@latest --template domisdocs-firebase-lite --key SUA_PRO_KEY
# Esse comando puxa do DomisPacks-Technical privado
```

### 5. Deploy
```bash
ng build
firebase deploy
```
Pronto. Seu Angular 17-20 no ar sem erro de `public directory`.

## ❓ FAQ - Lite

::: details Esse pack funciona no Angular 20?
Sim. Validado em Angular 17, 18, 19 e 20 com `application` builder e `browser` folder. O `firebase.json` já aponta para `dist/seu-app/browser` corretamente.
:::

::: details Preciso ter o DomisPacks-Technical antes?
Não. Você paga na Kiwify e recebe convite automático por e-mail para o repositório privado `Domisnnet/DomisPacks-Technical` + sua `PRO_KEY`. É automático.
:::

::: details O que acontece depois que eu pagar?
1. Kiwify te envia e-mail com a PRO_KEY na hora
2. GitHub te envia convite para o repo privado
3. Você clona com `git clone https://SUA_KEY@github.com/Domisnnet/DomisPacks-Technical.git`
:::

::: details Posso usar em quantos projetos?
Uso ilimitado nos seus projetos pessoais e de clientes. Não pode revender ou compartilhar o repo privado.
:::

::: details E se não funcionar no meu projeto?
7 dias de garantia total via Kiwify. Reembolso 100% sem perguntas. Mas funciona, é o mesmo `firebase.json` usado em produção nos nossos clientes.
:::

::: details Qual a diferença para o Pro?
Lite = só corrige o deploy (firebase.json + rewrites). Pro = deploy + regras de segurança + CI/CD + SSR. Se vai colocar em produção de cliente, pegue o Pro.
:::

## 💬 O que quem comprou está dizendo

<div style="margin: 32px 0; padding: 28px; background: rgba(255,255,255,0.03); border-radius: 16px; border: 1px solid rgba(38,255,0,0.15);">
<div style="display: flex; gap: 16px; align-items: flex-start;">
<div style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #26FF00, #00D4FF); display: flex; align-items: center; justify-content: center; font-weight: 800; color: #000; flex-shrink: 0;">R</div>
<div style="flex: 1;">
<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; flex-wrap: wrap;">
<span style="font-weight: 700; font-size: 16px; color: #fff;">Rafael M.</span>
<span style="font-size: 13px; opacity: 0.6;">· Dev Front-end · São Paulo</span>
<span style="margin-left: auto; color: #FFD700;">★★★★★</span>
</div>
<p style="font-size: 15px; line-height: 1.6; margin: 12px 0; font-style: italic; color: #e5e7eb;">
"Tava há 2 dias travado no erro <code>Could not find public directory</code> no Angular 19. Tentei de tudo no Stack Overflow. Comprei o Lite por R$49 achando que era gambiarra, mas é o <code>firebase.json</code> certo mesmo. Copiei, dei <code>ng build</code> e <code>firebase deploy</code> e subiu de primeira. Valeu cada centavo."
</p>
<div style="display: flex; gap: 12px; margin-top: 12px; font-size: 12px; opacity: 0.5; flex-wrap: wrap;">
<span>✅ Compra verificada na Kiwify</span>
<span>·</span>
<span>📅 Há 3 dias</span>
<span>·</span>
<span style="color: #26FF00;">🚀 DomisPacks-Technical</span>
</div>
</div>
</div>
</div>

## 🛒 Comprar DomisDocs Firebase Lite - R$49

<div style="margin: 24px 0; padding: 28px; background: linear-gradient(135deg, #0a0a1a, #1a1a0a); border-radius: 20px; border: 2px solid #FFD700; text-align: center; box-shadow: 0 8px 32px rgba(255,215,0,0.3);">
<h3 style="color: #ffffff !important; font-size: 24px; font-weight: 900; margin-bottom: 8px;">🔥 DOMISDOCS FIREBASE LITE - R$49</h3>
<p style="color: #FFD700 !important; font-size: 16px; font-weight: 700; margin: 8px 0;">Fix Angular 17-20 + Firebase em 5 minutos</p>
<p style="color: #e5e7eb !important; font-size: 14px; margin: 12px 0;">
✅ CLI <code>npx create-domis</code> + Repo Privado<br/>
✅ 6 meses de updates + Uso VITALÍCIO<br/>
✅ Licença Comercial Privada v1.2
</p>
<a href="https://pay.kiwify.com.br/heAmetM" target="_blank" style="display: inline-block; margin: 16px 0; padding: 16px 32px; background: linear-gradient(90deg, #FFD700, #FFA500); color: #000000 !important; font-weight: 900; font-size: 18px; border-radius: 12px; text-decoration: none; box-shadow: 0 4px 16px rgba(255,215,0,0.4);">
🚀 QUERO MEU ACESSO AGORA - R$49
</a>
<div style="margin-top: 12px;">
<a href="https://kiwify.app/L2NNYK8" target="_blank" style="color: #9ca3af !important; font-size: 13px; text-decoration: underline;">Ver página oficial de vendas</a>
</div>
<p style="color: #26FF00 !important; font-size: 12px; margin-top: 16px; font-weight: 700;">⚡ Entrega automática via PRO_KEY por e-mail após pagamento</p>
</div>
&nbsp;

::: tip Quer produção completa? Conheça o Pro R$199
O Lite resolve o deploy. O Pro te dá **regras seguras + CI/CD + SSR**. Veja o comparativo completo em [DomisDocs Firebase Pro →](/packs/domisdocs-firebase-pro)
:::

## 🛡 Garantia

Todos os packs têm **7 dias de garantia incondicional** via Kiwify. Não funcionou? Reembolso total.
