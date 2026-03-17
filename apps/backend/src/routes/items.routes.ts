import { Router } from "express";
import { prisma } from "../lib/prisma.js";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const items = await prisma.item.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });

    res.json(items);
  } catch (error) {
    console.error("Error getting items:", error);
    res.status(500).json({ message: "Error al obtener los items" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({ message: "ID inválido" });
    }

    const item = await prisma.item.findUnique({
      where: { id }
    });

    if (!item) {
      return res.status(404).json({ message: "Item no encontrado" });
    }

    res.json(item);
  } catch (error) {
    console.error("Error getting item:", error);
    res.status(500).json({ message: "Error al obtener el item" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, quantity, category, purchased } = req.body;

    if (!name || typeof name !== "string" || !name.trim()) {
      return res.status(400).json({ message: "El nombre es obligatorio" });
    }

    const newItem = await prisma.item.create({
      data: {
        name: name.trim(),
        quantity: Number(quantity) > 0 ? Number(quantity) : 1,
        category: category ? String(category).trim() : null,
        purchased: Boolean(purchased)
      }
    });

    res.status(201).json(newItem);
  } catch (error) {
    console.error("Error creating item:", error);
    res.status(500).json({ message: "Error al crear el item" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { name, quantity, category, purchased } = req.body;

    if (Number.isNaN(id)) {
      return res.status(400).json({ message: "ID inválido" });
    }

    const existingItem = await prisma.item.findUnique({
      where: { id }
    });

    if (!existingItem) {
      return res.status(404).json({ message: "Item no encontrado" });
    }

    const updatedItem = await prisma.item.update({
      where: { id },
      data: {
        name:
          typeof name === "string" && name.trim()
            ? name.trim()
            : existingItem.name,
        quantity:
          quantity !== undefined && Number(quantity) > 0
            ? Number(quantity)
            : existingItem.quantity,
        category:
          category !== undefined
            ? category
              ? String(category).trim()
              : null
            : existingItem.category,
        purchased:
          purchased !== undefined ? Boolean(purchased) : existingItem.purchased
      }
    });

    res.json(updatedItem);
  } catch (error) {
    console.error("Error updating item:", error);
    res.status(500).json({ message: "Error al actualizar el item" });
  }
});

router.patch("/:id/toggle", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({ message: "ID inválido" });
    }

    const existingItem = await prisma.item.findUnique({
      where: { id }
    });

    if (!existingItem) {
      return res.status(404).json({ message: "Item no encontrado" });
    }

    const updatedItem = await prisma.item.update({
      where: { id },
      data: {
        purchased: !existingItem.purchased
      }
    });

    res.json(updatedItem);
  } catch (error) {
    console.error("Error toggling item:", error);
    res.status(500).json({ message: "Error al cambiar el estado del item" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({ message: "ID inválido" });
    }

    const existingItem = await prisma.item.findUnique({
      where: { id }
    });

    if (!existingItem) {
      return res.status(404).json({ message: "Item no encontrado" });
    }

    await prisma.item.delete({
      where: { id }
    });

    res.json({ message: "Item eliminado correctamente" });
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ message: "Error al eliminar el item" });
  }
});

export default router;