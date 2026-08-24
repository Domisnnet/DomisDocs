---
title: Build e Localização do index.html
---

# 🏗️ 8. Build e Localização do `index.html`

### Gerar build de produção

Antes de configurar o diretório público do Hosting, gere o build da aplicação.

Execute:
```bash
ng build --configuration production
```

### 🔎 Descobrir caminho correto do index.html

Execute na raiz do projeto:

```powershell
Get-ChildItem . -Filter index.html -Recurse | Select-Object FullName
```
macOS / Linux:

```bash
find . -name "index.html"
```

Exemplo:

```text
C:\Projects\Shadow-Flip-Angular\dist\shadow-flip-angular\browser\index.html
```

Nesse caso, a pasta correta para o Firebase Hosting será:

```text
dist/shadow-flip-angular/browser
```

✅ → pasta pública = dist/shadow-flip-angular/browser

❌ → NÃO coloque o caminho completo do arquivo!

> 💡 A propriedade `public` recebe **a pasta**, não o caminho completo do arquivo.