# Receitas API

API REST para cadastro e consulta de receitas culinárias.

## 🚀 API em produção

Acesse: [https://receitas-api-qkhm.onrender.com/recipes](https://receitas-api-qkhm.onrender.com/recipes)

---

## 📦 Instalação

```sh
git clone https://github.com/seu-usuario/receitas-api.git
cd receitas-api
npm install
```

## ▶️ Executando localmente

```sh
npm run dev
```

A API estará disponível em `http://localhost:3000/recipes`.

## 🛠️ Build para produção

```sh
npm run build
npm start
```

---

## 📚 Endpoints

### Criar receita

- **POST** `/recipes`
- **Body**:
  ```json
  {
    "title": "Bolo de cenoura",
    "description": "Receita deliciosa de bolo de cenoura.",
    "ingredients": ["cenoura", "farinha", "açúcar", "ovos"]
  }
  ```
- **Resposta**:
  ```json
  {
    "id": "uuid",
    "title": "Bolo de cenoura",
    "description": "Receita deliciosa de bolo de cenoura.",
    "ingredients": ["cenoura", "farinha", "açúcar", "ovos"],
    "createdAt": "2024-06-01T12:00:00.000Z"
  }
  ```

### Listar todas as receitas

- **GET** `/recipes`
- **Resposta**:
  ```json
  [
    {
      "id": "uuid",
      "title": "Bolo de cenoura",
      "description": "Receita deliciosa de bolo de cenoura.",
      "ingredients": ["cenoura", "farinha", "açúcar", "ovos"],
      "createdAt": "2024-06-01T12:00:00.000Z"
    }
  ]
  ```

### Buscar receita por ID

- **GET** `/recipes/{id}`
- **Resposta**:
  ```json
  {
    "id": "uuid",
    "title": "Bolo de cenoura",
    "description": "Receita deliciosa de bolo de cenoura.",
    "ingredients": ["cenoura", "farinha", "açúcar", "ovos"],
    "createdAt": "2024-06-01T12:00:00.000Z"
  }
  ```
- **404**: Caso não encontre a receita.

---

## 🧑‍💻 Tecnologias

- [NestJS](https://nestjs.com/)
- TypeScript
- [uuid](https://www.npmjs.com/package/uuid)

---

## 📄 Licença

MIT © Victor Moraes
