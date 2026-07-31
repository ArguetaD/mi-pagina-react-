function Home({ heroSlides, activeSlide, navigateToPage }) {
  return (
    <>
      <section className="hero" id="inicio">
        <div className="hero-content reveal-left">
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
            <button
              className="secondary-button"
              type="button"
              onClick={() => navigateToPage("servicios-tecnicos")}
            >
              Ver servicios
            </button>{" "}
          </div>
        </div>

        <div className="hero-panel hero-panel-carousel reveal-right">
          <div className="hero-carousel">
            <img
              src={heroSlides[activeSlide]}
              alt="Trabajo técnico destacado"
            />
          </div>
        </div>
      </section>

      <section className="about-section reveal-bottom" id="quienes-somos">
        <div className="about-image">
          <img src="/about/Quienes-somos.jpg" alt="Equipo de TecnoFix" />
        </div>

        <div className="about-content">
          <p className="tag">Quiénes somos</p>
          <h2>TecnoFix</h2>
          <p>
            Somos un equipo enfocado en soporte técnico, soluciones informáticas
            y seguridad para hogares, negocios y emprendedores.
          </p>
          <p>
            Trabajamos con orden, atención al detalle y compromiso para que cada
            equipo, sistema o instalación funcione de forma estable y segura.
          </p>
        </div>
      </section>

      <section className="process reveal-bottom" id="proceso">
        <div className="section-title">
          <p>Proceso</p>
          <h2>Cómo trabajamos cada servicio</h2>
        </div>

        <div className="process-list">
          <div className="process-item">
            <div className="process-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <circle cx="10.5" cy="10.5" r="6.5" />
                <path d="m15.5 15.5 5 5" />
                <path d="M8 10.5h5M10.5 8v5" />
              </svg>
            </div>
            <h3>Diagnóstico</h3>
            <p>Revisamos el equipo o necesidad para encontrar la causa real.</p>
          </div>

          <div className="process-item">
            <div className="process-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M7 3h7l4 4v14H7Z" />
                <path d="M14 3v5h5M10 12h5M10 16h5" />
              </svg>
            </div>
            <h3>Propuesta</h3>
            <p>
              Explicamos la solución, tiempo estimado y costo antes de iniciar.
            </p>
          </div>

          <div className="process-item">
            <div className="process-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="m14.5 6.5 3-3 3 3-3 3" />
                <path d="m16.5 8.5-9.8 9.8a2.1 2.1 0 0 1-3-3l9.8-9.8" />
                <path d="m4 4 16 16M4 4l4 1-3 3Z" />
              </svg>
            </div>
            <h3>Servicio</h3>
            <p>
              Ejecutamos el trabajo con orden, cuidado y atención al detalle.
            </p>
          </div>

          <div className="process-item">
            <div className="process-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path d="m8 12 2.7 2.7L16.5 9" />
              </svg>
            </div>
            <h3>Prueba final</h3>
            <p>Validamos funcionamiento y dejamos recomendaciones de uso.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
