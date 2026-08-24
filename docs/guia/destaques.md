# 💻 Destaques Técnicos

### 📁 Localização Dinâmica do `index.html`
Um dos pontos mais críticos do deploy é identificar corretamente a pasta de saída do build do Angular. Nas versões recentes, o arquivo `index.html` pode estar em:

dist/nome-projeto/browser/index.html

ou diretamente em:

dist/nome-projeto/index.html

O guia documenta o comando para localização automática:
```powershell
# PowerShell
Get-ChildItem . -Filter index.html -Recurse | Select-Object FullName
E a configuração exata no firebase.json:

{
  "hosting": {
    "public": "dist/nome-projeto/browser",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}

# 🔀 Regras de Rewrite para Angular Router
A configuração de rewrites garante que qualquer rota profunda seja redirecionada para o index.html, permitindo que o Angular Router processe a URL no lado do cliente — eliminando o erro 404 ao atualizar a página.
📦 Automação Completa do Fluxo
O guia apresenta scripts prontos no package.json para automatizar todo o ciclo:

{
  "scripts": {
    "build:prod": "ng build --configuration production",
    "deploy:hosting": "npm run build:prod && firebase deploy --only hosting"
  }
}

# 📄 Documentação como Site Profissional
Todo o conteúdo técnico longo foi migrado para VitePress, gerando um site de documentação profissional, navegável, com busca, tema elegante e performance ultrarrápida — tudo hospedado no mesmo Firebase Hosting.

<p align="center"> 
  <a href="/guia/funcionalidades"> 
    <img src="https://img.shields.io/badge/Anterior%20-%20Objetivos-9C27B0?style=for-the-badge" alt="Anterior"> 
  </a> &nbsp; 
  <a href="/guia/deploy"> 
    <img src="https://img.shields.io/badge/Próximo%20-%20Fluxo%20Completo%20de%20Deploy-009688?style=for-the-badge" alt="Próximo"> 
  </a> 
</p>