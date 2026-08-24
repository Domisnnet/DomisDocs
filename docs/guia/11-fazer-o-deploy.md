---
title: Fazer o Deploy
---

# 🚀 11. Fazer o Deploy em Produção

Depois de validar o build e o `firebase.json`, Execute:
```bash
firebase deploy --only hosting
```
✅ Mensagem esperada:

```bash
Deploy complete!
Hosting URL: https://shadow-angular.web.app
```

Abra a URL no navegador e valide a aplicação em produção.

O comando:

```bash
firebase deploy --only hosting
```
publica somente os recursos relacionados ao Firebase Hosting.

> 💡 Prefira --only hosting para publicar SOMENTE o site, evitando alterar outros recursos do Firebase.