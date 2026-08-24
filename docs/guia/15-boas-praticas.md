---
title: Boas Práticas
---

# 🧠 15. Boas Práticas

### ⚡ Utilize o build de produção

Para publicar, prefira:

```bash
ng build --configuration production
```

O build de produção aplica otimizações adequadas para publicação.

### 📁 Não versione `dist`

Adicione ao `.gitignore`:

```gitignore
dist/
.firebase/
```

---

### 🧪 Teste antes de publicar

Utilize o emulador do Hosting:

```bash
firebase emulators:start --only hosting
```

---

### 🔬 Utilize canais de preview

Para criar uma publicação temporária:

```bash
firebase hosting:channel:deploy preview
```

O Firebase fornecerá uma URL de preview que pode ser utilizada para validação antes do deploy em produção.

---

### 🌎 Utilize aliases para ambientes

Exemplo de `.firebaserc`:

```json
{
  "projects": {
    "development": "shadow-angular-dev",
    "staging": "shadow-angular-staging",
    "production": "shadow-angular"
  }
}
```

Para selecionar um ambiente:

```bash
firebase use production
```

Depois:

```bash
firebase deploy --only hosting
```

Antes de executar um deploy, confirme sempre o projeto ativo:

```bash
firebase use
```

---

### 🔐 Evite publicar arquivos sensíveis

Nunca coloque no diretório público:

* Chaves privadas.
* Arquivos `.env` contendo segredos.
* Credenciais de service account.
* Tokens de acesso.
* Arquivos administrativos do Firebase.

> A configuração do Firebase utilizada no front-end não deve ser confundida com credenciais privadas. Segredos devem permanecer em ambientes protegidos, no back-end ou no pipeline de CI/CD.

---

### Angular client-side × SSR

Este tutorial utiliza o **Firebase Hosting clássico** para uma aplicação Angular client-side/SPA.

Se o projeto utiliza Angular SSR, prerenderização ou uma arquitetura full-stack, o processo de publicação pode ser diferente.

Para aplicações Angular com necessidades de renderização no servidor e integração com GitHub, considere o **Firebase App Hosting**.

> 
| 💡 Lembrete:                                                 |
| :------------------------------------------------------------|
| Sempre use `--configuration production` no build             |
| Adicione `dist/` e `.firebase/` no `.gitignore`              |
| Teste localmente antes de publicar                           |
| Use canais de preview antes de produção                      |
| Confirme ambiente ativo com `firebase use` antes de publicar |
| Nunca publique credenciais privadas na pasta pública         |
| Para projetos com SSR, considere Firebase App Hosting        |