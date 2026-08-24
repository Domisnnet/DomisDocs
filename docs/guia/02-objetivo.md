---
title: Objetivo
---

# 🎯 2. Objetivo

Este guia, parte integrante do **DomisDocs**, mostra como conectar um projeto **Angular 20 existente** a um projeto já criado no **Firebase** e publicá-lo utilizando o **Firebase Hosting**. O projeto de referência utilizado como exemplo é o **Shadow-Flip-Angular**.

O processo inclui:

* Instalação do Firebase CLI.
* Autenticação da conta Google.
* Associação do projeto Angular ao projeto Firebase.
* Geração do build de produção.
* Localização do `index.html` gerado pelo Angular.
* Configuração do Firebase Hosting.
* Configuração de rotas para uma aplicação Single-Page Application.
* Teste local.
* Deploy em produção.

O Firebase utiliza o arquivo `firebase.json` para definir o comportamento do Hosting, incluindo a pasta pública, arquivos ignorados, rewrites e redirects.

> ⚠️ Este tutorial considera uma aplicação Angular client-side/SPA. Projetos com SSR ou arquitetura full-stack podem exigir configuração diferente, incluindo o Firebase App Hosting.