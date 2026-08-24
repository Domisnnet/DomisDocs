---
title: Próximos Deploys
---

# 🔁 12. Próximos Deploys

Depois que a configuração inicial estiver pronta, os próximos deploys ficam muito mais simples.

Execute:

```bash
ng build --configuration production
firebase deploy --only hosting
```

Ou utilize:

```bash
npm run build
firebase deploy --only hosting
```

### Automatizando pelo `package.json`

Você também pode criar um script:

```json
{
  "scripts": {
    "build:production": "ng build --configuration production",
    "deploy:hosting": "npm run build:production && firebase deploy --only hosting"
  }
}
```

Depois, execute:

```bash
npm run deploy:hosting
```

### Deploy de todos os recursos Firebase

O comando:

```bash
firebase deploy
```

pode publicar outros recursos Firebase configurados no projeto.

Para publicar somente o site, prefira:

```bash
firebase deploy --only hosting
```

Depois basta rodar:

```bash
npm run deploy:hosting
```