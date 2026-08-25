![GitHub repo size](https://img.shields.io/github/repo-size/Domisnnet/DomisDocs?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/Domisnnet/DomisDocs?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/Domisnnet/DomisDocs?style=for-the-badge)

<h1 id="-domisdocs">🚀 DomisDocs — Guia: Deploy de Angular 20 no Firebase Hosting</h1>

![Status](https://img.shields.io/badge/Status-Documentação-4CAF50?style=flat-square)
![Angular](https://img.shields.io/badge/Angular-20-DD0031?style=flat-square&logo=angular&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Hosting-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-20.19%2B-339933?style=flat-square&logo=node.js&logoColor=white)
![Firebase CLI](https://img.shields.io/badge/Firebase_CLI-15%2B-FFCA28?style=flat-square&logo=firebase&logoColor=black)
[![Licença MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/Domisnnet/DomisDocs/blob/main/license)
![DomisDocs](docs/public/images/domisdocs.png)

> **Plataforma de Documentação Técnica — DomisDocs:**
> Guia completo e testado para conectar uma aplicação **Angular 20** a um projeto existente no **Firebase** e publicá-la utilizando o **Firebase Hosting**.
> **Projeto de referência:** **Shadow-Flip-Angular**
> **Nível:** Intermediário → Avançado
> **Última atualização:** agosto de 2026

Bem-vindo à **Plataforma de Documentação Técnica Profissional DomisDocs!!**. Esta aplicação é uma **referência técnica** desenvolvida com **VitePress / Vue**, destinada a documentar o processo de integração entre uma Linguagem de Programação e/ou Framework — utilizando como exemplo **Angular 20.**

O projeto nasceu de um **problema real** enfrentado ao conectar uma aplicação ao **Firebase Hosting**. Resolvi então documentar um **passo a passo prático e direto ao ponto**, registrando a solução e todos os cuidados necessários para essa integração.

---

## 📚 Tabela de Conteúdo
| 💻 O Projeto | 🛠️ Técnico | 🤝 Comunidade |
| :---: | :---: | :---: |
| [![1. Sobre](https://img.shields.io/badge/1%20-%20Sobre-4CAF50)](#sobre-o-projeto) | [![5. Destaques](https://img.shields.io/badge/5%20-%20Destaques-607D8B)](#destaques-tecnicos) | [![9. Código](https://img.shields.io/badge/9%20-%20Código-795548)](#codigo-fonte) |
| [![2. Techs](https://img.shields.io/badge/2%20-%20Techs-2196F3)](#tecnologias-utilizadas) | [![6. Deploy](https://img.shields.io/badge/6%20-%20Deploy-009688)](#fluxo-de-deploy) | [![10. Créditos](https://img.shields.io/badge/10%20-%20Créditos-607D8B)](#créditos) |
| [![3. Acessar](https://img.shields.io/badge/3%20-%20Acessar-FF9800)](#como-acessar) | [![7. Contribuir](https://img.shields.io/badge/7%20-%20Contribuir-3F51B5)](#como-contribuir) | [![11. Licença](https://img.shields.io/badge/11%20-%20Licença-E91E63)](#licenca) |
| [![4. Funções](https://img.shields.io/badge/4%20-%20Funções-9C27B0)](#funcionalidades) | [![8. FAQ](https://img.shields.io/badge/8%20-%20FAQ-FFC107)](#faq) | [![12. Perfil](https://img.shields.io/badge/12%20-%20Perfil-212121)](#perfil-do-github) |

---

<h2 id="sobre-o-projeto">1. 🚀 Sobre o Projeto</h2>

Este guia mostra como conectar um projeto **Angular 20 existente** a um projeto já criado no **Firebase** e publicá-lo utilizando o **Firebase Hosting**. O projeto de referência utilizado como exemplo é o **Shadow-Flip-Angular**. Mas vale salientar que esse mesmo procedimento é válido , para conectar qualquer Linguagem de Programação e/ou Framework.

O processo completo inclui: instalação do Firebase CLI, autenticação, associação do projeto, geração de build, configuração de SPA e publicação em produção.

> ⚠️ Considera aplicação Angular client-side/SPA. Projetos com SSR podem exigir configuração diferente.

---

<h2 id="tecnologias-utilizadas">2. ⚙️ Tecnologias Utilizadas</h2>

| Camada | Tecnologias | Descrição |
| :--- | :--- | :--- |
| **Core** | ![Angular](https://img.shields.io/badge/Angular-20-DD0031?style=flat-square&logo=angular&logoColor=white) | Framework de aplicação SPA. |
| **Hosting** | ![Firebase](https://img.shields.io/badge/Firebase-Hosting-FFCA28?style=flat-square&logo=firebase&logoColor=black) | Hospedagem de sites estáticos com CDN global. |
| **Ferramentas** | ![Node.js](https://img.shields.io/badge/Node.js-20.19%2B-339933?style=flat-square&logo=node.js&logoColor=white) ![Firebase CLI](https://img.shields.io/badge/Firebase_CLI-15%2B-FFCA28?style=flat-square&logo=firebase&logoColor=black) | Requisitos de build e deploy. |

---

<h2 id="como-acessar">3. 🚀 Como Acessar</h2>

Após o deploy bem-sucedido, sua aplicação estará disponível na "Plataforma" clicando no botão abaixo:

<div align="left">
  <a href="https://domisdocs-602fc.web.app/" target="_blank">
    <img alt="Botão Acessar" src="docs/public/images/botão.webp" height="70" width="70" />
  </a>
</div>

---

<h2 id="funcionalidades">4. 🧩 Funcionalidades</h2>

| Funcionalidade | Descrição |
| :--- | :--- |
| ⚡ **Build Automatizado** | Compilação com `ng build --configuration production` para arquivos otimizados. |
| 📁 **Pasta Correta** | Identificação exata de onde está o `index.html` dentro de `dist/`. |
| 🔄 **SPA Amigável** | Regra de `rewrites` configurada → rotas internas sem erro 404. |
| 🚀 **Deploy em Um Comando** | Publicação direta com `firebase deploy --only hosting`. |
| ✅ **Validação Local** | Teste com emulador antes de publicar em produção. |

---

<h2 id="destaques-tecnicos">5. 💻 Destaques Técnicos</h2>

### 📐 Estrutura de Pastas
O Angular 20 gera o build em `dist/nome-do-projeto/browser/`. É **fundamental** que `firebase.json`aponte para essa pasta, e não para a raiz de `dist/` nem para o próprio arquivo `index.html`.

### 🔄 Regra de Rewrites
Para SPA, todas as requisições devem ser encaminhadas ao `index.html`:
```json
"rewrites": [{"source": "**", "destination": "/index.html"}]
```
Sem isso, ao atualizar página em rota interna → **erro 404**.

---

<h2 id="fluxo-de-deploy">6. 📦 Fluxo de Deploy</h2>

### 1. Verificar versões

O deploy da aplicação utiliza Firebase Hosting integrado ao GitHub.
Para verificar a versão basta executar:
```bash
node --version
ng version
firebase --version
```

### 2. Autenticar e selecionar projeto
```bash
firebase login
firebase use --add
```

### 3. Gerar build de produção
```bash
ng build --configuration production
```

### 4. Configurar Hosting (1ª vez)
```bash
firebase init hosting
```

### 5. Publicar
```bash
firebase deploy --only hosting
```

> ⚡ Para próximas publicações: `ng build --prod && firebase deploy --only hosting`

---

<h2 id="como-contribuir">7. 🤝 Como Contribuir</h2>

| Fase | Ação | Link / Comando |
| :---: | :--- | :--- |
| **01** | **Fork** | [![Fork](https://img.shields.io/badge/-Fazer%20Fork-blue?style=flat-square&logo=github)](https://github.com/Domisnnet/DomisDocs/fork) |
| **02** | **Branch** | `git checkout -b feature/Melhoria` |
| **03** | **Commit** | `git commit -m 'docs: atualizado passo a passo'` |
| **04** | **Push** | `git push origin feature/Melhoria` |
| **05** | **PR** | [![Abrir PR](https://img.shields.io/badge/-Abrir%20PR-green?style=flat-square&logo=git)](https://github.com/Domisnnet/DomisDocs/compare)

### 🐛 Encontrou um problema?
Se algo não estiver funcionando como esperado, não hesite em abrir um chamado:

[![Issues Abertas](https://img.shields.io/github/issues/Domisnnet/DomisDocs?style=flat-square&color=red&logo=github)](https://github.com/Domisnnet/DomisDocs/issues)
[![Reportar Erro](https://img.shields.io/badge/Reportar-Erro-critical?style=flat-square&logo=github)](https://github.com/Domisnnet/DomisDocs/issues/new)

---

<h2 id="faq">8. 🧠 Perguntas Frequentes</h2>

<details>
<summary><strong>Por que rodar <code>ng build</code> antes do deploy?</strong></summary>
O Firebase Hosting só hospeda arquivos estáticos. O build compila o Angular para dentro de <code>dist/</code>, que é a pasta enviada ao servidor.
</details>

<details>
<summary><strong>Por que a pasta <code>browser</code> existe dentro de dist?</strong></summary>
É a estrutura padrão do Angular 20 para SPA. Sempre confirme o caminho real do <code>index.html</code> — nunca presuma!
</details>

<details>
<summary><strong>Para que serve o <code>rewrites</code> no firebase.json?</strong></summary>
Encaminha todas as URLs para o <code>index.html</code>, permitindo que o Angular Router funcione sem erro 404 ao recarregar.
</details>

<details>
<summary><strong>Preciso de Firestore ou Functions para hospedar?</strong></summary>
Não! Para hospedar uma SPA basta o Firebase Hosting. Os demais serviços são totalmente opcionais.
</details>

<details>
<summary><strong>Alterações não aparecem — o que fazer?</strong></summary>
Confirme: rodou o build ANTES do deploy? Atualize com Ctrl+F5? Teste em janela anônima? Cache pode atrasar.
</details>

---

<h2 id="codigo-fonte">9. 💻 Código Fonte</h2>

Explore a documentação completa no repositório oficial:

![VitePress](https://img.shields.io/badge/VitePress-Vue_3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=fff)
[![Repositório](https://img.shields.io/badge/Repositório-Domisnnet%2FDomisDocs-4FC08D?style=for-the-badge&logo=github&labelColor=0d1117)](https://github.com/Domisnnet/DomisDocs)

---

<h2 id="créditos">10. 📝 Créditos</h2>

| Atribuição | Responsável / Recurso | Descrição |
| :--- | :--- | :--- |
| **Documentação** | **DomisDev** | Guia elaborado e testado passo a passo. |
| **Infraestrutura** | **Google Firebase** | Plataforma de hospedagem e serviços cloud. |
| **Framework** | **Angular** | Plataforma de desenvolvimento SPA. |
| **Referência** | **Shadow-Flip-Angular** | Projeto real utilizado como exemplo. |

---

<h2 id="licenca">11. 📄 Licença</h2>

Este projeto está sob a: &nbsp; [![Licença MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/Domisnnet/DomisDocs/blob/main/license) — livre uso mantendo os créditos.

---

<h2 id="perfil-do-github">12. 👨‍💻 Perfil do GitHub</h2>

<a href="https://github.com/Domisnnet">
  <img src="docs/public/images/DomisDev.png" width="90" style="border-radius: 50%" alt="DomisDev GitHub">
</a>

&nbsp;
<p align="center">
  <a href="#-domisdocs">
    <img src="https://img.shields.io/badge/⬆️%20VOLTAR%20AO%20TOPO-26FF00?style=flat&labelColor=111827&color=0A0F1C" alt="Voltar ao topo">
  </a>
</p>