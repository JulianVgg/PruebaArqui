const SERVER_URL =
  process.env.BACKEND_PUBLIC_URL || "http://localhost:3000";

export const openApiDocument = {
  openapi: "3.0.0",
  info: {
    title: "SuperList API",
    version: "1.0.0",
    description: "API para gestionar una lista de compras"
  },
  servers: [
    {
      url: SERVER_URL
    }
  ],
  paths: {
    "/health": {
      get: {
        summary: "Verifica si la API está funcionando",
        responses: {
          "200": {
            description: "API operativa"
          }
        }
      }
    },
    "/api/items": {
      get: {
        summary: "Obtiene todos los items",
        responses: {
          "200": {
            description: "Lista de items"
          }
        }
      },
      post: {
        summary: "Crea un nuevo item",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["name"],
                properties: {
                  name: { type: "string", example: "Leche" },
                  quantity: { type: "number", example: 2 },
                  category: { type: "string", example: "Lácteos" },
                  purchased: { type: "boolean", example: false }
                }
              }
            }
          }
        },
        responses: {
          "201": {
            description: "Item creado correctamente"
          }
        }
      }
    },
    "/api/items/{id}": {
      get: {
        summary: "Obtiene un item por ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer"
            }
          }
        ],
        responses: {
          "200": { description: "Item encontrado" },
          "404": { description: "Item no encontrado" }
        }
      },
      put: {
        summary: "Actualiza un item completo",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer"
            }
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: { type: "string", example: "Pan" },
                  quantity: { type: "number", example: 3 },
                  category: { type: "string", example: "Panadería" },
                  purchased: { type: "boolean", example: true }
                }
              }
            }
          }
        },
        responses: {
          "200": { description: "Item actualizado" }
        }
      },
      delete: {
        summary: "Elimina un item",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer"
            }
          }
        ],
        responses: {
          "200": { description: "Item eliminado" }
        }
      }
    },
    "/api/items/{id}/toggle": {
      patch: {
        summary: "Cambia el estado purchased de un item",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer"
            }
          }
        ],
        responses: {
          "200": { description: "Estado actualizado" }
        }
      }
    }
  }
};