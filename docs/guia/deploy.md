# 📦 Fluxo Completo de Deploy — Angular 20 → Firebase Hosting

> **⚠️ Esta é a seção principal do guia — todo o passo a passo detalhado está aqui, organizado sequencialmente do início ao deploy em produção.**

---

## 📋 Etapa 1 — Instalar o Firebase CLI
```bash
npm install -g firebase-tools
firebase --version
```

---

## 🔐 Etapa 2 — Login e Associação ao Projeto

firebase login
firebase projects:list
cd /caminho/para/projeto/angular
firebase use --add

---

## 🏗️ Etapa 3 — Build de Produção do Angular

```bash
ng build --configuration production
# ou
npm run build
```
# 🔎 Localizar o index.html

# PowerShell
```bash
Get-ChildItem . -Filter index.html -Recurse | Select-Object FullName

# Linux/macOS
find . -type f -name "index.html"
```

---

## ⚙️ Etapa 4 — Configurar o Firebase Hosting

firebase init hosting

{
  "hosting": {
    "public": "dist/nome-projeto/browser",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}

# 🧪 Etapa 5 — Testar Localmente

```bash
firebase emulators:start --only hosting

Acesse http://127.0.0.1:5000 e valide: página inicial, rotas internas, atualização de página, assets, console do navegador.
```

# 🚀 Etapa 6 — Deploy em Produção

```bash
firebase deploy --only hosting

Deploy complete!
Hosting URL: https://shadow-angular.web.app
```

# 🔁 Próximos Deploys

Após a configuração inicial, o fluxo é simplificado para:

```bash
ng build --configuration production
firebase deploy --only hosting

Ou usando script automatizado:

npm run deploy:hosting
```

✅ Checklist Final de Validação

[] Angular 20 configurado e compilando
[] Build de produção gerado sem erros
[] index.html localizado e caminho confirmado
[] firebase.json com public e rewrites corretos
[] Teste local no emulador validado
[] Deploy executado com sucesso
[] URL de produção testada e funcionando
[] Rotas internas funcionando ao atualizar página
[] Assets e imagens carregando corretamente
[] Console do navegador sem erros críticos

<p align="center"> 
  <a href="/guia/destaques"> 
    <img src="https://img.shields.io/badge/Anterior%20-%20Destaques%20Técnicos-607D8B?style=for-the-badge" alt="Anterior"> 
  </a> &nbsp; 
  <a href="/guia/contribuir"> 
    <img src="https://img.shields.io/badge/Próximo%20-%20Como%20Contribuir-3F51B5?style=for-the-badge" alt="Próximo"> 
  </a> 
</p>