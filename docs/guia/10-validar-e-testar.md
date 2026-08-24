---
title: Validar e Testar Localmente
---

# 🧪 10. Validar e Testar Localmente

### Antes de publicar

Antes do deploy, você pode testar o Hosting localmente.

Execute:
```bash
ng build --configuration production
```
depois:
```bash
firebase emulators:start --only hosting
```

O Firebase exibirá uma URL local, normalmente semelhante a:

```text
http://127.0.0.1:5000
```

Em seguida faça a Validação:

- ✅ Página inicial carrega
- ✅ Navegação entre rotas
- ✅ Atualizar página em rota interna → sem 404
- ✅Imagens e assets carregam
- ✅ Console sem erros
- ✅ Responsividade
- ✅ Links externos
- ✅ Integrações com APIs

Para encerrar o emulador:

```text
Ctrl + C
```