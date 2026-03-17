const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export type Item = {
  id: number;
  name: string;
  quantity: number;
  category: string | null;
  purchased: boolean;
  createdAt: string;
  updatedAt: string;
};
export async function getItems(): Promise<Item[]> {
  const response = await fetch(`${API_URL}/api/items`);

  if (!response.ok) {
    throw new Error("No se pudieron obtener los items");
  }

  return response.json();
}

export async function createItem(data: {
  name: string;
  quantity: number;
  category?: string;
}) {
  const response = await fetch(`${API_URL}/api/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...data,
      purchased: false
    })
  });

  if (!response.ok) {
    throw new Error("No se pudo crear el item");
  }

  return response.json();
}

export async function toggleItem(id: number) {
  const response = await fetch(`${API_URL}/api/items/${id}/toggle`, {
    method: "PATCH"
  });

  if (!response.ok) {
    throw new Error("No se pudo actualizar el item");
  }

  return response.json();
}

export async function deleteItem(id: number) {
  const response = await fetch(`${API_URL}/api/items/${id}`, {
    method: "DELETE"
  });

  if (!response.ok) {
    throw new Error("No se pudo eliminar el item");
  }

  return response.json();
}