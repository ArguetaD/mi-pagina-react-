import "./App.css";

function App() {
  return (
    <main className="page">
      <header className="header">
        <a className="logo" href="#">
          TecnoFix
        </a>

        <nav className="nav">
          <a href="#">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#">Proceso</a>
          <a href="#">Contacto</a>
        </nav>

        <a className="header-button" href="#">
          Cotizar
        </a>
      </header>
      <section className="hero">
        <div className="hero-content">
          <p className="tag">Innovación y soporte técnico</p>

          <h1>Soluciones tecnológicas para equipos, sistemas y seguridad</h1>

          <p className="hero-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            facilisis, justo vitae consequat posuere.
          </p>

          <div className="hero-buttons">
            <a className="primary-button" href="#">
              Solicitar servicio
            </a>

            <a className="secondary-button" href="#">
              Ver servicios
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <p>Diagnóstico</p>
          <h2>Computadoras, sistemas y cámaras</h2>
          <span>Estado: disponible</span>
        </div>
      </section>
      <section className="services">
        <div className="section-title">
          <p>Servicios</p>
          <h2>Áreas principales de soporte</h2>
        </div>

        <div className="service-grid">
          <article className="service-card">
            <span>01</span>
            <h3>Reparación y mantenimiento</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              facilisis justo vitae.
            </p>
          </article>

          <article className="service-card">
            <span>02</span>
            <h3>Sistemas</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              facilisis justo vitae.
            </p>
          </article>

          <article className="service-card">
            <span>03</span>
            <h3>Instalación de cámaras</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              facilisis justo vitae.
            </p>
          </article>
        </div>
      </section>
      <section className="process">
        <div className="section-title">
          <p>Proceso</p>
          <h2>Cómo trabajamos cada servicio</h2>
        </div>

        <div className="process-list">
          <div className="process-item">
            <span>01</span>
            <h3>Diagnóstico</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="process-item">
            <span>02</span>
            <h3>Propuesta</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="process-item">
            <span>03</span>
            <h3>Servicio</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="process-item">
            <span>04</span>
            <h3>Prueba final</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div>
          <h2>TecnoFix</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="footer-links">
          <a href="#">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#">Proceso</a>
          <a href="#">Contacto</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
