import "./App.css";

const recipes = [
  { title: "Pasta cremosa", desc: "Lista en 20 min. Ideal para cena.", tag: "Fácil" },
  { title: "Bowl de pollo", desc: "Prote + veggies. Meal prep.", tag: "Fitness" },
  { title: "Pancakes", desc: "Desayuno rápido y top.", tag: "Dulce" },
  { title: "Ensalada mediterránea", desc: "Fresca, ligera y rica.", tag: "Saludable" },
];

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <div className="logo">🍳</div>
          <div>
            <h1>Recetario Express</h1>
            <p>Una app estática hecha con Vite para desplegar en AWS CloudFront.</p>
          </div>
        </div>

        <a className="btn" href="https://vitejs.dev" target="_blank" rel="noreferrer">
          Hecho con Vite
        </a>
      </header>

      <main className="grid">
        {recipes.map((r) => (
          <article key={r.title} className="card">
            <div className="tag">{r.tag}</div>
            <h2>{r.title}</h2>
            <p>{r.desc}</p>
            <button className="ghost">Ver detalle</button>
          </article>
        ))}
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Recetario Express</span>
        <span>Static + CDN + CI/CD</span>
      </footer>
    </div>
  );
}
