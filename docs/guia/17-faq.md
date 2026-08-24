---
title: Perguntas Frequentes
---

# 🧠 17. Perguntas Frequentes

<details>
<summary><strong>Por que preciso executar o `ng build` antes do deploy? ❓</strong></summary>
<p>🚀 O Firebase Hosting publica arquivos estáticos. O comando <code>ng build --configuration production</code> transforma o projeto Angular em arquivos prontos para publicação dentro da pasta <code>dist/</code>.</p>
</details>

<details>
<summary><strong>Por que o Firebase não encontra minha aplicação? ❓</strong></summary>
<p>🔎 Na maioria dos casos, verifique primeiro o caminho definido em <code>hosting.public</code>. Ele precisa apontar para a pasta que contém diretamente o <code>index.html</code> gerado pelo build.</p>
</details>

<details>
<summary><strong>Por que existe uma pasta `browser` dentro de `dist`? ❓</strong></summary>
<p>📁 Dependendo da configuração e da versão do Angular, os arquivos finais podem ser gerados dentro de <code>dist/nome-do-projeto/browser</code>. O caminho correto deve sempre ser confirmado localizando o <code>index.html</code>.</p>
</details>

<details>
<summary><strong>Para que serve o `rewrites`? ❓</strong></summary>
<p>🔀 O <code>rewrites</code> permite que rotas de uma SPA Angular sejam encaminhadas para o <code>index.html</code>, permitindo que o Angular Router processe a URL.</p>
</details>

<details>
<summary><strong>Posso executar apenas `firebase deploy`? ❓</strong></summary>
<p>🚀 Sim. Porém, quando o objetivo é publicar somente o front-end no Firebase Hosting, <code>firebase deploy --only hosting</code> é mais específico e evita publicar outros recursos Firebase configurados no projeto.</p>
</details>

<details>
<summary><strong>Preciso configurar Firestore ou Functions para utilizar Firebase Hosting? ❓</strong></summary>
<p>🔥 Não. Se o objetivo for somente hospedar uma aplicação Angular, o Firebase Hosting é suficiente. Firestore, Functions, Storage e outros serviços são opcionais.</p>
</details>