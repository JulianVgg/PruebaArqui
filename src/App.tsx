import "./App.css";

type Feature = {
  title: string;
  desc: string;
  icon: string;
};

const FEATURES: Feature[] = [
  {
    title: "Static UI",
    desc: "A clean and simple interface built with React + Vite. No backend needed.",
    icon: "🧩",
  },
  {
    title: "Docker-ready",
    desc: "Prepared to be containerized and served reliably in production.",
    icon: "🐳",
  },
  {
    title: "CI/CD Pipeline",
    desc: "GitHub Actions can build and deploy automatically to AWS Elastic Beanstalk.",
    icon: "⚙️",
  },
  {
    title: "Secrets Managed",
    desc: "Credentials can be stored securely with Doppler and synced to GitHub.",
    icon: "🔐",
  },
];

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="badgeRow">
          <span className="badge">assignment-03</span>
          <span className="dot" />
          <span className="muted">AWS Elastic Beanstalk</span>
        </div>

        <h1 className="title">Deployment Dashboard</h1>
        <p className="subtitle">
          A simple static web app built with <b>React + Vite</b>, ready for
          Docker and CI/CD deployment.
        </p>

        <div className="actions">
          <a className="btn primary" href="#features">
            View Features
          </a>
          <a className="btn ghost" href="#status">
            Status
          </a>
        </div>

        <div className="stats">
          <div className="stat">
            <div className="statLabel">Build</div>
            <div className="statValue">Vite</div>
          </div>
          <div className="stat">
            <div className="statLabel">Framework</div>
            <div className="statValue">React</div>
          </div>
          <div className="stat">
            <div className="statLabel">Deploy</div>
            <div className="statValue">Beanstalk</div>
          </div>
          <div className="stat">
            <div className="statLabel">Container</div>
            <div className="statValue">Docker</div>
          </div>
        </div>
      </header>

      <main className="content">
        <section id="features" className="section">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Features</h2>
            <p className="sectionDesc">
              This page is static by design. The goal is to practice build,
              Dockerization, and deployment through a pipeline.
            </p>
          </div>

          <div className="grid">
            {FEATURES.map((f) => (
              <article key={f.title} className="card">
                <div className="cardTop">
                  <div className="icon">{f.icon}</div>
                  <h3 className="cardTitle">{f.title}</h3>
                </div>
                <p className="cardDesc">{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="status" className="section">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Deployment Status</h2>
            <p className="sectionDesc">
              Replace the placeholders below once your AWS environment is
              created.
            </p>
          </div>

          <div className="panel">
            <div className="row">
              <span className="label">Environment</span>
              <span className="value">assignment-03-env</span>
            </div>
            <div className="row">
              <span className="label">Region</span>
              <span className="value">us-east-1</span>
            </div>
            <div className="row">
              <span className="label">Live URL</span>
              <span className="value">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  http://YOUR-ENV.us-east-1.elasticbeanstalk.com
                </a>
              </span>
            </div>

            <div className="divider" />

            <div className="hint">
              Tip: Once deployed, update the link above and add screenshots in
              the README.
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span className="muted">
          Built with React + Vite • Static UI • Prepared for Docker & AWS
          Beanstalk
        </span>
      </footer>
    </div>
  );
}
