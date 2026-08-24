---
title: Login e Associação ao Firebase
---

# 🔐 7. Login e Associação ao Firebase

### Autenticação

Para Logar Execute:
```bash
firebase login
```
depois:
```bash
firebase projects:list
```

O navegador será aberto para autenticação com sua conta Google.

Depois do login, liste os projetos disponíveis:

O projeto criado no Firebase Console deverá aparecer na lista.

Exemplo:

```text
Project Display Name    Project ID
shadow-angular          shadow-angular
```

### 🔗 Associar projeto

Selecione shadow-angular e use alias default. Confirme com:

```bash
firebase use --add
```

---

### 📂 Entrar na pasta do projeto

Navegue até a pasta raiz do projeto Angular.

### Windows

```powershell
cd "C:\Projects\Shadow-Flip-Angular"
```

### macOS ou Linux

```bash
cd ~/Projects/Shadow-Flip-Angular
```

Confirme se está na pasta correta.

### Windows

```powershell
dir
```

### macOS ou Linux

```bash
ls
```

A pasta deverá conter arquivos ou diretórios semelhantes a:

```text
angular.json
package.json
src/
```

> 💡 Execute os comandos do Firebase a partir da raiz do projeto Angular.