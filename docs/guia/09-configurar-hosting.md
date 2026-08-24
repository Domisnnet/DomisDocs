---
title: Configurar o Firebase Hosting
---

# 🔥 9. Configurar o Firebase Hosting

### Inicializar

Para inicializar Execute:
```bash
firebase init hosting
```

Durante o assistente, selecione ou informe:

| Pergunta                             | Resposta                        |
| :----------------------------------- | :------------------------------ |
| Use an existing project?             | Sim                             |
| Projeto Firebase                     | `shadow-angular`                |
| Public directory                     | Pasta que contém o `index.html` |
| Configure as a single-page app?      | Sim                             |
| Set up automatic builds with GitHub? | Opcional                        |

Se o projeto já estiver associado ao Firebase e você utilizar:

```bash
firebase init
```

selecione apenas o recurso:

```text
Hosting: Configure files for Firebase Hosting and optionally set up GitHub Action deploys
```

Não é necessário selecionar Firestore, Functions, Storage ou outros produtos quando o objetivo for apenas publicar o front-end Angular.


---

### 🔧 Configurar o `firebase.json`

Abra:

```text
firebase.json
```

na raiz do projeto.

O valor de `hosting.public` deve corresponder à pasta que contém diretamente o `index.html`.

### Exemplo com `browser`

Se o build gerar:

```text
dist/shadow-flip-angular/browser/index.html
```

utilize:

```json
{
  "hosting": {
    "public": "dist/shadow-flip-angular/browser",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### Exemplo sem `browser`

Se o build gerar:

```text
dist/shadow-flip-angular/index.html
```

utilize:

```json
{
  "hosting": {
    "public": "dist/shadow-flip-angular",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### Significado das propriedades

| Propriedade   | Finalidade                                |
| :------------ | :---------------------------------------- |
| `public`      | Define a pasta que será publicada         |
| `ignore`      | Impede o envio de arquivos desnecessários |
| `rewrites`    | Define regras de reescrita de URLs        |
| `source`      | Define o padrão de URL correspondente     |
| `destination` | Define o recurso que será entregue        |


> 💡 **Atenção:** se você executar `firebase init` novamente e selecionar Hosting, revise o `firebase.json` depois. A inicialização pode alterar a seção `hosting` da configuração existente.

**Observação:** O rewrites garante que rotas internas funcionem sem erro **404.**