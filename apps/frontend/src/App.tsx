import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import "./App.css";
import { createItem, deleteItem, getItems, toggleItem, type Item } from "./api";
function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const loadItems = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getItems();
      setItems(data);
    } catch (err) {
      console.error(err);
      setError("No se pudieron cargar los items.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Debes escribir un nombre.");
      return;
    }

    try {
      setSubmitting(true);
      setError("");

      await createItem({
        name: name.trim(),
        quantity,
        category: category.trim()
      });

      setName("");
      setQuantity(1);
      setCategory("");
      await loadItems();
    } catch (err) {
      console.error(err);
      setError("No se pudo crear el item.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleToggle = async (id: number) => {
    try {
      await toggleItem(id);
      await loadItems();
    } catch (err) {
      console.error(err);
      setError("No se pudo cambiar el estado.");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteItem(id);
      await loadItems();
    } catch (err) {
      console.error(err);
      setError("No se pudo eliminar el item.");
    }
  };

  return (
    <main className="page">
      <section className="wrapper">
        <div className="hero">
          <span className="badge">Assignment 05</span>
          <h1>SuperList</h1>
          <p>
            Lista de compras conectada a una API y base de datos MySQL dentro de
            un monorepo.
          </p>
        </div>

        <section className="panel">
          <h2>Agregar producto</h2>

          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ej. Leche"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />

            <input
              type="text"
              placeholder="Categoría"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />

            <button type="submit" disabled={submitting}>
              {submitting ? "Guardando..." : "Agregar"}
            </button>
          </form>

          {error && <p className="error">{error}</p>}
        </section>

        <section className="panel">
          <div className="panel-header">
            <h2>Productos</h2>
            <button className="secondary" onClick={loadItems}>
              Recargar
            </button>
          </div>

          {loading ? (
            <p className="empty">Cargando items...</p>
          ) : items.length === 0 ? (
            <p className="empty">No hay productos todavía.</p>
          ) : (
            <div className="list">
              {items.map((item) => (
                <article
                  key={item.id}
                  className={`item ${item.purchased ? "done" : ""}`}
                >
                  <div>
                    <h3>{item.name}</h3>
                    <p>
                      Cantidad: <strong>{item.quantity}</strong>
                    </p>
                    <p>
                      Categoría: <strong>{item.category || "Sin categoría"}</strong>
                    </p>
                    <span className="status">
                      {item.purchased ? "Comprado" : "Pendiente"}
                    </span>
                  </div>

                  <div className="actions">
                    <button onClick={() => handleToggle(item.id)}>
                      {item.purchased ? "Desmarcar" : "Marcar"}
                    </button>
                    <button
                      className="danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

export default App;