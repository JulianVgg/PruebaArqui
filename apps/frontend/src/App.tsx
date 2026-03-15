import "./App.css";

function App() {
  return (
    <main className="container">
      <section className="card">
        <span className="badge">Assignment 05</span>
        <h1>SuperList</h1>
        <p>
          Frontend inicial del monorepo. En los siguientes commits conectaremos
          esta vista al backend y a la base de datos.
        </p>

        <div className="info-grid">
          <div className="info-box">
            <h2>Frontend</h2>
            <p>React + Vite</p>
          </div>
          <div className="info-box">
            <h2>Backend</h2>
            <p>Express + Prisma</p>
          </div>
          <div className="info-box">
            <h2>Base de datos</h2>
            <p>PostgreSQL</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;