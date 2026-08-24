# 🧠 Perguntas Frequentes

<details>
<summary><strong>Por que preciso executar o `ng build` antes do deploy? ❓</strong></summary>
<p>🚀 O Firebase Hosting serve apenas arquivos estáticos. O comando <code>ng build --configuration production</code> transforma o código TypeScript, templates e estilos do Angular em arquivos otimizados e prontos para publicação na pasta <code>dist/</code>.</p>
</details>

<details>
<summary><strong>Por que o Firebase não encontra minha aplicação (Page Not Found)? ❓</strong></summary>
<p>🔎 Na maioria dos casos, o problema está no caminho definido em <code>hosting.public</code> no <code>firebase.json</code>. Ele precisa apontar exatamente para a pasta que contém o <code>index.html</code> gerado pelo build do Angular.</p>
</details>

<details>
<summary><strong>Por que existe uma pasta `browser` dentro de `dist`? ❓</strong></summary>
<p>📁 A partir do Angular 9+, o build padrão gera os arquivos do cliente dentro de <code>dist/nome-projeto/browser/</code> para suportar futuros recursos como SSR e pré-renderização. Sempre confirme a localização real do <code>index.html</code> antes de configurar o deploy.</p>
</details>

<details>
<summary><strong>Para que serve a configuração de `rewrites`? ❓</strong></summary>
<p>🔀 A regra de <code>rewrites</code> redireciona todas as requisições para o <code>index.html</code>. Isso permite que o Angular Router interprete a URL e processe a navegação no lado do cliente, evitando erros 404 ao atualizar a página em uma rota interna.</p>
</details>

<details>
<summary><strong>Posso executar apenas `firebase deploy` sem especificar o hosting? ❓</strong></summary>
<p>🚀 Sim, mas o comando <code>firebase deploy</code> publica <strong>todos os serviços Firebase</strong> configurados no projeto (Firestore, Functions, Storage, etc.). Para publicar <strong>apenas</strong> o site, use <code>firebase deploy --only hosting</code> — é mais seguro e eficiente.</p>
</details>

<details>
<summary><strong>Preciso configurar Firestore ou Functions para usar o Firebase Hosting? ❓</strong></summary>
<p>🔥 Não. Se o objetivo for apenas hospedar a aplicação Angular, o Firebase Hosting é suficiente. Os outros serviços do Firebase são opcionais e só devem ser configurados se forem realmente utilizados no projeto.</p>
</details>

<details>
<summary><strong>Posso usar este guia como base para outros projetos? ❓</strong></summary>
<p>🤝 Sim! Este projeto é open source sob a Licença MIT. Você pode usar, adaptar e reutilizar o conteúdo e a estrutura para seus próprios projetos, desde que mantenha os devidos créditos ao autor original.</p>
</details>

---

<p align="center">
  <a href="/guia/contribuir">
    <img src="https://img.shields.io/badge/Anterior%20-%20Como%20Contribuir-3F51B5?style=for-the-badge" alt="Anterior">
  </a>
  &nbsp;
  <a href="/guia/codigo">
    <img src="https://img.shields.io/badge/Próximo%20-%20Código%20Fonte-795548?style=for-the-badge" alt="Próximo">
  </a>
</p>