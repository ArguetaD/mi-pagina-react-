function ServiciosTecnicos({ navigateToPage }) {
  return (
    <section className="technical-services-page">
      <div className="technical-services-hero" aria-label="Servicios técnicos">
        <div className="technical-services-content reveal-bottom">
          <p className="technical-services-tag">Servicios técnicos</p>
          <h1>Soporte técnico para tus equipos</h1>
          <p>
            Diagnóstico, mantenimiento, reparación y optimización para que tus
            equipos trabajen de forma estable, rápida y segura.
          </p>
        </div>
      </div>

      <div className="technical-services-detail">
        <article className="technical-service-row">
          <div className="technical-service-media reveal-left">
            <div className="technical-service-image">
              <img
                src="/services/asesoria-tecnica_01.png"
                alt="Asesoría técnica"
              />
            </div>

            <div className="technical-service-actions">
              <button className="service-quote-button" type="button">
                Solicitar asesoría
              </button>
            </div>
          </div>

          <div className="technical-service-text reveal-right">
            <h2>Asesoría Técnica</h2>
            <p>
              Te apoyamos en la elección del equipo ideal según tus necesidades,
              presupuesto y tipo de trabajo.
            </p>
          </div>
        </article>

        <article className="technical-service-row reverse">
          <div className="technical-service-text reveal-left">
            <h2>Ecosistema Windows</h2>
            <p className="windows-list">
              • Formateo
              <br />
              • Instalación de programas
              <br />
              • Cambio de disco duro
              <br />
              • Cambio de memoria RAM
              <br />
              • Respaldo de información antivirus
              <br />• Optimización del sistema
            </p>
          </div>

          <div className="technical-service-media reveal-right">
            <div className="technical-service-image">
              <img
                src="/services/ecosistema-windows_01.jpeg"
                alt="Ecosistema Windows"
              />
            </div>

            <div className="technical-service-actions">
              <button className="service-quote-button" type="button">
                Solicitar soporte
              </button>
            </div>
          </div>
        </article>

        <article className="technical-service-row">
          <div className="technical-service-media reveal-left">
            <div className="technical-service-image">
              <img
                src="/services/camaras-seguridad_01.jpg"
                alt="Instalación de cámaras de seguridad"
              />
            </div>

            <div className="technical-service-actions">
              <button className="service-quote-button" type="button">
                Cotizar instalación
              </button>
            </div>
          </div>

          <div className="technical-service-text reveal-right">
            <h2>Instalación de cámaras de seguridad</h2>
            <p>
              Instalación y configuración de circuito cerrado de seguridad,
              cámaras IP, DVR, grabación remota en ecosistemas DAHUA y
              HIKVISION.
            </p>
          </div>
        </article>

        <article className="technical-service-row reverse">
          <div className="technical-service-text reveal-left">
            <h2>Sitios Web todo incluido</h2>
            <p>
              Sitio web todo incluido, dominio, hosting y soluciones para
              pequeña empresa y emprendedores.
            </p>
          </div>

          <div className="technical-service-media reveal-right">
            <div className="technical-service-image">
              <img
                src="/services/sitios-web_01.webp"
                alt="Sitios web todo incluido"
              />
            </div>

            <div className="technical-service-actions">
              <button
                className="service-info-button"
                type="button"
                onClick={() => navigateToPage("planes-sitios-web")}
              >
                Ver planes
              </button>

              <button className="service-quote-button" type="button">
                Cotizar sitio web
              </button>
            </div>
          </div>
        </article>

        <article className="technical-service-row">
          <div className="technical-service-media reveal-left">
            <div className="technical-service-image">
              <img
                src="/services/identidad-visual_01.jpg"
                alt="Identidad visual"
              />
            </div>

            <div className="technical-service-actions">
              <button className="service-quote-button" type="button">
                Cotizar diseño
              </button>
            </div>
          </div>

          <div className="technical-service-text reveal-right">
            <h2>Identidad Visual</h2>
            <p>
              Diseñamos logotipos únicos y profesionales, adaptados a la
              personalidad, valores y objetivos de cada marca.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ServiciosTecnicos;
