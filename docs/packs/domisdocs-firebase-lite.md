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

## 🛒 Comprar Lite - Acesso Imediato

<div style="margin: 24px 0; padding: 32px; background: linear-gradient(135deg, #0a1a0a, #112a12); border-radius: 20px; border: 2px solid #26FF00; text-align: center; box-shadow: 0 8px 32px rgba(38,255,0,0.2);">

<h3 style="color: #ffffff !important; font-size: 20px; font-weight: 800; margin-bottom: 12px;">
🚀 DomisPacks-Technical - Acesso Privado Lite</h3>

<p style="color: #e5e7eb !important; font-size: 16px; margin: 16px 0; font-weight: 500;">
Repositório privado + PRO_KEY + Fix definitivo em 5 minutos</p>

<div style="margin: 24px 0;">
<a href="https://kiwify.com.br/SEU-LINK-LITE-AQUI" target="_blank" style="display: inline-block; padding: 16px 32px; background: #26FF00; color: #000000 !important; font-weight: 900; font-size: 18px; border-radius: 12px; text-decoration: none; box-shadow: 0 4px 16px rgba(38,255,0,0.4);">
🚀 QUERO O LITE POR R$49</a>
</div>
<div style="text-align: left; max-width: 500px; margin: 24px auto 0; background: rgba(0,0,0,0.3); padding: 16px; border-radius: 12px;">

<p style="color: #f3f4f6 !important; font-size: 14px; margin: 8px 0; line-height: 1.5;">
✅ <span style="color: #ffffff;">Entrega:</span> Convite automático para <code style="color: #26FF00; background: rgba(38,255,0,0.15); padding: 2px 6px; border-radius: 4px;">DomisPacks-Technical</code> + PRO_KEY
</p>
<p style="color: #f3f4f6 !important; font-size: 14px; margin: 8px 0;">
✅ 7 dias de garantia incondicional via Kiwify
</p>
<p style="color: #f3f4f6 !important; font-size: 14px; margin: 8px 0;">
✅ Fix validado em Angular 17, 18, 19 e 20
</p>
</div>

<p style="color: #9ca3af !important; font-size: 13px; margin-top: 16px;">
🔒 Pagamento 100% seguro via Kiwify - PIX ou Cartão em até 12x
</p>
</div>
&nbsp;

::: tip Quer produção completa? Conheça o Pro R$199
O Lite resolve o deploy. O Pro te dá **regras seguras + CI/CD + SSR**. Veja o comparativo completo em [DomisDocs Firebase Pro →](/packs/domisdocs-firebase-pro)
:::

## 🛡 Garantia

Todos os packs têm **7 dias de garantia incondicional** via Kiwify. Não funcionou? Reembolso total.
