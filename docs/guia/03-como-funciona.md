---
title: Como Funciona
---

# 🔄 3. Como Funciona

O Angular não publica diretamente os arquivos de `src/`. Primeiro, o projeto precisa ser compilado com:

```bash
ng build --configuration production
```
O build transforma o código TypeScript e demais recursos da aplicação em arquivos prontos para publicação.

O Firebase Hosting publica somente a pasta definida na propriedade `hosting.public` do arquivo `firebase.json`.

### Fluxo

```text
Código-fonte Angular
        ↓
ng build --configuration production
        ↓
Pasta dist/
        ↓
Localização do index.html
        ↓
firebase.json
        ↓
Firebase Hosting
        ↓
Aplicação publicada
```

> **Regra de ouro:** o valor de `hosting.public` deve apontar para a pasta que contém diretamente o `index.html` gerado pelo build.

Em projetos Angular recentes, essa pasta pode ser:

```text
dist/nome-do-projeto/browser
```

ou, dependendo da configuração do projeto:

```text
dist/nome-do-projeto
```

Por isso, **não presuma o caminho**. Sempre verifique onde o Angular realmente gerou o `index.html`.