---
title: Regra Mais Importante
---

# 📌 20. Regra Mais Importante

O valor de: `hosting.public` no `firebase.json` deve apontar para a pasta que contém diretamente o `index.html` gerado pelo build.

Exemplo:

```text
dist/
└── shadow-flip-angular/
    └── browser/
        └── index.html
```

Então:

```json
{
  "hosting": {
    "public": "dist/shadow-flip-angular/browser"
  }
}
```

### Se aparecer 404 (`Page Not Found`) → verifique nesta ordem:

Verifique, nesta ordem:

1. O resultado do `ng build`.
2. A localização real do `index.html`.
3. O valor de `hosting.public`.
4. A configuração de `rewrites`.
5. O projeto Firebase ativo.
6. Se o deploy foi executado novamente após as alterações.

### Comando dourado

```powershell
Get-ChildItem . -Filter index.html -Recurse | Select-Object FullName
```

Esse comando permite descobrir rapidamente qual deve ser o valor de:

```json
"hosting": {
  "public": "..."
}
```