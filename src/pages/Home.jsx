function Home({ heroSlides, activeSlide }) {
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

            <a className="secondary-button" href="#">
              Ver servicios
            </a>
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

      <section className="services" id="servicios">
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

      <section className="process reveal-bottom" id="proceso">
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
            <p>Explicamos la solución, tiempo estimado y costo antes de iniciar.</p>
          </div>

          <div className="process-item">
            <span>03</span>
            <h3>Servicio</h3>
            <p>Ejecutamos el trabajo con orden, cuidado y atención al detalle.</p>
          </div>

          <div className="process-item">
            <span>04</span>
            <h3>Prueba final</h3>
            <p>Validamos funcionamiento y dejamos recomendaciones de uso.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
