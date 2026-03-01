import "./App.css";

const features = [
  { title: "Rápida", desc: "Vite compila al vuelo y el build es súper ligero." },
  { title: "Estática", desc: "Sin backend. Ideal para deploy en contenedor." },
  { title: "Docker Ready", desc: "Multi-stage build + Nginx para servir el dist/." },
];

const checklist = [
  "UI estática en React + CSS",
  "Dockerfile multi-stage",
  "GitHub Actions: build + push a Docker Hub",
  "Tags: latest + SHA por commit",
  "README con capturas y link a Docker Hub",
];

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="brand">
          <span className="logo" aria-hidden="true">⬢</span>
          <span>Assignment-04</span>
        </div>
        <a className="navLink" href="#run">Cómo correr</a>
      </header>

      <main className="container">
        <section className="hero">
          <div className="heroText">
            <p className="pill">Vite + React · UI estática · Docker Hub</p>
            <h1>Mini landing dockerizada para Arquitectura de Sistemas</h1>
            <p className="subtitle">
              Una app sencilla, visualmente limpia, y lista para que cada commit
              genere una imagen en Docker Hub con tags <b>latest</b> y el <b>SHA</b>.
            </p>

            <div className="ctaRow">
              <a className="btn" href="#run">Ver comandos</a>
              <a className="btnGhost" href="https://www.docker.com/" target="_blank" rel="noreferrer">
                Docker
              </a>
            </div>

            <div className="stats">
              <div className="stat">
                <div className="statNum">3+</div>
                <div className="statLabel">Commits</div>
              </div>
              <div className="stat">
                <div className="statNum">2</div>
                <div className="statLabel">Tags por commit</div>
              </div>
              <div className="stat">
                <div className="statNum">1</div>
                <div className="statLabel">Imagen “latest”</div>
              </div>
            </div>
          </div>

          <div className="heroCard" role="img" aria-label="Preview card">
            <div className="cardTop">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="cardTitle">docker build → push</span>
            </div>
            <pre className="codeBlock">
{`# Build local
docker build -t user/app:latest .

# Run
docker run --rm -p 8080:80 user/app:latest

# CI (GitHub Actions)
tags:
- latest
- <commit-sha>`}
            </pre>
          </div>
        </section>

        <section className="grid">
          {features.map((f) => (
            <article key={f.title} className="card">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </section>

        <section className="panel" id="run">
          <h2>Cómo correr</h2>
          <div className="twoCols">
            <div className="panelCard">
              <h3>Local (dev)</h3>
              <pre className="codeBlock small">
{`npm install
npm run dev`}
              </pre>
            </div>

            <div className="panelCard">
              <h3>Docker (prod)</h3>
              <pre className="codeBlock small">
{`docker build -t TU_USUARIO/TU_REPO:latest .
docker run --rm -p 8080:80 TU_USUARIO/TU_REPO:latest`}
              </pre>
            </div>
          </div>

          <div className="checklist">
            <h3>Checklist de entrega</h3>
            <ul>
              {checklist.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="footer">
          <span>Hecho para Assignment-04 · Docker Hub + GitHub Actions</span>
        </footer>
      </main>
    </div>
  );
}