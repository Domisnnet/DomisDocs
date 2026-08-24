<h1 id="-domisdocs"> 🚀 DomisDocs — Guia: Deploy de Angular 20 no Firebase Hosting</h1>

![GitHub repo size](https://img.shields.io/github/repo-size/Domisnnet/DomisDocs?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/Domisnnet/DomisDocs?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/Domisnnet/DomisDocs?style=for-the-badge)

![DomisDocs](docs/public/images/domisdocs.png)

![Status](https://img.shields.io/badge/Status-Documentação-4CAF50?style=flat-square)
![Angular](https://img.shields.io/badge/Angular-20-DD0031?style=flat-square&logo=angular&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Hosting-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-20.19%2B-339933?style=flat-square&logo=node.js&logoColor=white)
![Firebase CLI](https://img.shields.io/badge/Firebase_CLI-15%2B-FFCA28?style=flat-square&logo=firebase&logoColor=black)
[![Licença MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/Domisnnet/DomisDocs/blob/main/license)

> **Plataforma de Documentação Técnica DomisDev**
>
> Guia completo e testado para conectar uma aplicação **Angular 20** a um projeto existente no **Firebase** e publicá-la utilizando o **Firebase Hosting**.
>
> **Projeto de referência:** Shadow-Flip-Angular
> **Nível:** Intermediário → Avançado
> **Última atualização:** agosto de 2026

---

## 📚 Tabela de Conteúdo

| 💻 O Projeto | 🛠️ Técnico | 🤝 Comunidade |
| :---: | :---: | :---: |
| [![1. Objetivo](https://img.shields.io/badge/1%20-%20Objetivo-4CAF50)](#1--objetivo) | [![5. Build](https://img.shields.io/badge/5%20-%20Build-607D8B)](#5--build-e-configuracao) | [![9. Troubleshooting](https://img.shields.io/badge/9%20-%20Troubleshooting-795548)](#9--troubleshooting) |
| [![2. Como Funciona](https://img.shields.io/badge/2%20-%20Funcionalidades-2196F3)](#2--como-funciona) | [![6. Deploy](https://img.shields.io/badge/6%20-%20Deploy-009688)](#6--deploy-em-producao) | [![10. Boas Práticas](https://img.shields.io/badge/10%20-%20Boas%20Práticas-607D8B)](#10--boas-praticas) |
| [![3. Techs](https://img.shields.io/badge/3%20-%20Techs-FF9800)](#3--tecnologias-e-requisitos) | [![7. Estrutura](https://img.shields.io/badge/7%20-%20Estrutura-3F51B5)](#7--estrutura-do-projeto) | [![11. FAQ](https://img.shields.io/badge/11%20-%20Faq-E91E63)](#11--perguntas-frequentes) |
| [![4. Preparação](https://img.shields.io/badge/4%20-%20Preparação-9C27B0)](#4--preparacao-e-login) | [![8. Validação](https://img.shields.io/badge/8%20-%20Validação-FFC107)](#8--validacao-e-testes) | [![12. Perfil](https://img.shields.io/badge/12%20-%20Perfil-212121)](#12--creditos-e-referencias) |

---

<h2 id="1--objetivo">1. 🎯 Objetivo</h2>

Este guia mostra como conectar um projeto **Angular 20 existente** a um projeto já criado no **Firebase** e publicá-lo utilizando o **Firebase Hosting**. O projeto de referência utilizado como exemplo é o **Shadow-Flip-Angular**.

O processo completo inclui:
- Instalação do Firebase CLI e autenticação
- Associação do projeto Angular ao projeto Firebase
- Geração do build de produção e localização do `index.html`
- Configuração do Firebase Hosting e regras de SPA
- Teste local e publicação em produção

> ⚠️ Este tutorial considera uma aplicação Angular client-side/SPA. Projetos com SSR ou arquitetura full-stack podem exigir configuração diferente, incluindo o Firebase App Hosting.

---

<h2 id="2--como-funciona">2. 🔄 Como Funciona</h2>

O Angular não publica diretamente os arquivos de `src/`. Primeiro, o projeto precisa ser compilado com:

```bash
ng build --configuration production
```

O build transforma o código TypeScript em arquivos prontos para publicação. O Firebase Hosting publica **apenas** a pasta definida em `hosting.public` no arquivo `firebase.json`.

### Fluxo Completo
```text
Código-fonte → ng build → dist/ → index.html → firebase.json → Firebase Hosting → Publicado!
```

### 📌 Regra de Ouro
> `hosting.public` deve apontar para a **PASTA que contém diretamente o index.html**, NÃO para o próprio arquivo.

No projeto **Shadow-Flip-Angular**, o caminho costuma ser `dist/shadow-flip-angular/browser/` — **sempre confirme antes de configurar!**

---

<h2 id="3--tecnologias-e-requisitos">3. ⚙️ Tecnologias e Requisitos</h2>

| Requisito | Recomendação |
| :--- | :--- |
| Angular | Angular 20 |
| Node.js | 20.19 ou superior |
| Angular CLI | Compatível com Angular 20 |
| Firebase CLI | Versão 15 ou superior |
| Projeto Firebase | Criado no Console do Firebase |
| Projeto Angular | Shadow-Flip-Angular (referência) |

### ✅ Verificar versões instaladas
```bash
node --version
npm --version
ng version
firebase --version
```

---

<h2 id="4--preparacao-e-login">4. 🔐 Preparação e Login</h2>

### Instalar o Firebase CLI
```bash
npm install -g firebase-tools
firebase --version
```

### Autenticar e selecionar projeto
```bash
firebase login
firebase projects:list
firebase use --add
```

Selecione o projeto `shadow-angular` e utilize o alias `default`. Confirme com:

```bash
firebase use
```

### Entrar na pasta do projeto
Execute todos os comandos a partir da **raiz** do projeto Angular:

```bash
cd caminho/Shadow-Flip-Angular
```

---

<h2 id="5--build-e-configuracao">5. 🏗️ Build e Configuração</h2>

### Gerar build de produção
```bash
ng build --configuration production
```

### 🔎 Descobrir caminho do `index.html`

**Windows — PowerShell:**
```powershell
Get-ChildItem . -Filter index.html -Recurse | Select-Object FullName
```

**macOS / Linux:**
```bash
find . -name "index.html"
```

Exemplo de retorno → `dist/shadow-flip-angular/browser/index.html`

✅ Pasta correta: `dist/shadow-flip-angular/browser`

### Configurar o Firebase Hosting
```bash
firebase init hosting
```

Responda: projeto existente → pasta confirmada acima → configurar como SPA → **Sim** ✅

### Arquivo `firebase.json` pronto
```json
{
  "hosting": {
    "public": "dist/shadow-flip-angular/browser",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{"source": "**", "destination": "/index.html"}]
  }
}
```

> O `rewrites` garante que rotas internas funcionem sem erro 404.

---

<h2 id="6--deploy-em-producao">6. 🚀 Deploy em Produção</h2>

### Primeira publicação
```bash
firebase deploy --only hosting
```

✅ Mensagem esperada:
```text
Deploy complete!
Hosting URL: https://shadow-angular.web.app
```

### 🔁 Próximos deploys
Após configuração pronta, o fluxo se resume a:

```bash
ng build --configuration production
firebase deploy --only hosting
```

### ⚡ Automatizar no `package.json`
```json
{
  "scripts": {
    "build:prod": "ng build --configuration production",
    "deploy:hosting": "npm run build:prod && firebase deploy --only hosting"
  }
}
```

Depois basta executar:

```bash
npm run deploy:hosting
```

> Prefira SEMPRE `--only hosting` para publicar SOMENTE o site, evitando alterar outros recursos do Firebase.

---

<h2 id="7--estrutura-do-projeto">7. 📁 Estrutura do Projeto</h2>

```text
Shadow-Flip-Angular/
├── dist/ ← gerado automaticamente pelo build
├── src/ ← código-fonte do Angular
├── .firebaserc ← projeto Firebase vinculado
├── firebase.json ← configuração do Hosting
├── angular.json ← configuração do Angular
└── package.json ← dependências e scripts
```

> ⚠️ **Nunca edite arquivos dentro de `dist/` manualmente.** Sempre gere tudo novamente com `ng build`. Adicione `dist/` e `.firebase/` ao `.gitignore`.

---

<h2 id="8--validacao-e-testes">8. 🧪 Validação e Testes</h2>

### Testar localmente antes de publicar
```bash
ng build --configuration production
firebase emulators:start --only hosting
```

Acesse: `http://127.0.0.1:5000`

### ✅ Verifique antes de publicar:
- [ ] Página inicial carrega corretamente
- [ ] Navegação entre rotas funciona
- [ ] Atualizar página em rota interna → **sem 404**
- [ ] Imagens e arquivos de `assets/` carregam
- [ ] Console do navegador sem erros

Encerre o emulador com `Ctrl + C`.

---

<h2 id="9--troubleshooting">9. 🛠️ Troubleshooting</h2>

### ❌ Firebase CLI não reconhecido
→ Reinicie o terminal ou reinstale:

```bash
npm install -g firebase-tools
```

### ❌ Página não encontrada (404)
→ Verifique: caminho em `hosting.public`, se `index.html` existe, se fez deploy após alteração

### ❌ Erro 404 ao atualizar rota interna
→ Falta regra de `rewrites` no `firebase.json`. Adicione, gere novo build e publique novamente.

### ❌ Alterações não aparecem
→ Atualize com `Ctrl + F5`, teste em janela anônima, confirme se rodou o build ANTES do deploy

---

<h2 id="10--boas-praticas">10. 🧠 Boas Práticas</h2>

- ✅ Sempre use `--configuration production` no build
- ✅ Confirme o projeto ativo com `firebase use` ANTES de publicar
- ✅ Teste localmente com o emulador antes de ir pra produção
- ✅ Nunca publique credenciais privadas na pasta pública
- ✅ Considere canais de preview para testes temporários
- ✅ Para projetos com SSR, utilize Firebase App Hosting

---

<h2 id="11--perguntas-frequentes">11. 🧠 Perguntas Frequentes</h2>

<details>
<summary><strong>Por que preciso rodar <code>ng build</code> antes de publicar?</strong></summary>
O Firebase Hosting só envia arquivos estáticos. O build compila o Angular para dentro de <code>dist/</code>, que é a pasta enviada ao servidor.
</details>

<details>
<summary><strong>Por que existe a pasta <code>browser</code> dentro de dist?</strong></summary>
É a estrutura padrão do Angular 20 para SPA. Sempre confirme o caminho real do <code>index.html</code> — nunca presuma!
</details>

<details>
<summary><strong>Para que serve o <code>rewrites</code> no firebase.json?</strong></summary>
Encaminha todas as URLs para o <code>index.html</code>, permitindo que o Angular Router funcione corretamente sem erro 404 ao recarregar a página.
</details>

<details>
<summary><strong>Preciso configurar Firestore ou Functions para hospedar o site?</strong></summary>
Não! Para hospedar uma SPA Angular basta o Firebase Hosting. Os demais serviços são opcionais.
</details>

---

<h2 id="12--creditos-e-referencias">12. 📝 Créditos e Referências Oficiais</h2>

### 📚 Documentações Consultadas

&nbsp;
[![Firebase Hosting](https://img.shields.io/badge/Firebase-Hosting-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/docs/hosting)
[![Angular + Firebase](https://img.shields.io/badge/Angular-Integração-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://firebase.google.com/docs/hosting/frameworks/angular)
[![Documentação Angular](https://img.shields.io/badge/Angular-Dev-1976D2?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)

### ✅ Checklist Final Antes do Deploy

- [ ] Angular 20 e Node.js compatíveis instalados
- [ ] Firebase CLI instalado e autenticado
- [ ] Projeto correto selecionado → `firebase use`
- [ ] Build de produção gerado → `ng build --configuration production`
- [ ] Caminho do `index.html` confirmado
- [ ] `firebase.json` com `public` e `rewrites` corretos
- [ ] Testado localmente ✅
- [ ] Deploy executado → `firebase deploy --only hosting`
- [ ] URL publicada validada ✅

### 📄 Licença e Créditos

| Atribuição | Detalhe |
| :--- | :--- |
| **Plataforma** | **DomisDocs** — Documentação Técnica DomisDev |
| **Projeto Exemplo** | Shadow-Flip-Angular |
| **Framework** | Angular 20 |
| **Infraestrutura** | Firebase Hosting |
| **Elaboração** | DomisDev |

[![Licença MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/Domisnnet/DomisDocs/blob/main/license)

> Utilize este guia como referência mantendo os devidos créditos.

---

### 👨‍💻 Conheça o DomisDev

Acesse o Repositório Oficial no GitHub:

<a href="https://github.com/Domisnnet">
  <img src="docs/public/images/DomisDev.png" width="90" style="border-radius: 50%" alt="DomisDev GitHub">
</a>

&nbsp;
<p align="center">
  <a href="#-domisdocs">
    <img src="https://img.shields.io/badge/⬆️%20VOLTAR%20AO%20TOPO-26FF00?style=flat&labelColor=111827&color=0A0F1C" alt="Voltar ao topo">
  </a>
</p>