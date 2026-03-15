export const openApiDocument = {
  openapi: "3.0.0",
  info: {
    title: "SuperList API",
    version: "1.0.0",
    description: "API para gestionar una lista de compras"
  },
  servers: [
    {
      url: "http://localhost:3000"
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
    }
  }
};