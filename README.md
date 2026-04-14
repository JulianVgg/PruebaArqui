# Julian Vasquez
# 202308005
## Endpoint público GraphQL
http://localhost:4000/graphql
## Health check
http://localhost:4000/health
## Ejemplo de query
query {
  books {
    id
    title
    price
    author {
      name
      email
    }
  }
}
## Respuesta: 
{
  "data": {
    "books": [
      {
        "id": 1,
        "title": "GraphQL desde cero",
        "price": 29.99,
        "author": {
          "name": "Gabriel Torres",
          "email": "gabriel@example.com"
        }
      }
    ]
  }
}
# Assignment 06 - GraphQL API

## Descripción
Proyecto de ejemplo usando GraphQL para consultar datos sin depender de endpoints REST ajustados a cada campo requerido.

## Modelos disponibles

### Author
| Campo | Tipo | Descripción |
|---|---|---|
| id | Int | Identificador del autor |
| name | String | Nombre del autor |
| email | String | Correo único del autor |
| age | Int | Edad |
| country | String | País |
| biography | String | Biografía |
| createdAt | String | Fecha de creación |
| updatedAt | String | Fecha de actualización |
| books | [Book] | Lista de libros del autor |

### Book
| Campo | Tipo | Descripción |
|---|---|---|
| id | Int | Identificador del libro |
| title | String | Título |
| isbn | String | ISBN único |
| publishedYear | Int | Año de publicación |
| genre | String | Género |
| price | Float | Precio |
| pages | Int | Número de páginas |
| inStock | Boolean | Disponibilidad |
| createdAt | String | Fecha de creación |
| updatedAt | String | Fecha de actualización |
| authorId | Int | ID del autor |
| author | Author | Autor relacionado |

## Queries disponibles

```graphql
type Query {
  authors: [Author!]!
  author(id: Int!): Author
  books: [Book!]!
  book(id: Int!): Book
}

