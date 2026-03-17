import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { openApiDocument } from "./openapi.js";
import itemsRouter from "./routes/items.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*"
  })
);

app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({
    ok: true,
    service: "backend",
    message: "API funcionando correctamente"
  });
});

app.use("/api/items", itemsRouter);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(openApiDocument));

export default app;