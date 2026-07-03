import "./App.css";

function App() {
  return (
    <main className="page">
      <div className="background-media" aria-hidden="true">
        <video autoPlay loop muted playsInline>
          <source src="/background-video.mp4" type="video/mp4" />
        </video>
      </div>

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
            Reparamos equipos, configuramos sistemas e instalamos soluciones de
            seguridad para que tu tecnología trabaje estable, rápida y sin
            complicaciones.
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
              Limpieza, diagnóstico, optimización y reparación de computadoras
              para mejorar su rendimiento y vida útil.
            </p>
          </article>

          <article className="service-card">
            <span>02</span>
            <h3>Sistemas</h3>
            <p>
              Instalación, configuración y soporte para sistemas operativos,
              software de trabajo y herramientas empresariales.
            </p>
          </article>

          <article className="service-card">
            <span>03</span>
            <h3>Instalación de cámaras</h3>
            <p>
              Diseño e instalación de cámaras de seguridad para hogares,
              negocios y espacios que necesitan monitoreo confiable.
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
            <p>Revisamos el equipo o necesidad para encontrar la causa real.</p>
          </div>

          <div className="process-item">
            <span>02</span>
            <h3>Propuesta</h3>
            <p>
              Explicamos la solución, tiempo estimado y costo antes de iniciar.
            </p>
          </div>

          <div className="process-item">
            <span>03</span>
            <h3>Servicio</h3>
            <p>
              Ejecutamos el trabajo con orden, cuidado y atención al detalle.
            </p>
          </div>

          <div className="process-item">
            <span>04</span>
            <h3>Prueba final</h3>
            <p>Validamos funcionamiento y dejamos recomendaciones de uso.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <h2>TecnoFix</h2>
          <p>Soporte técnico confiable para equipos, sistemas y seguridad.</p>
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
