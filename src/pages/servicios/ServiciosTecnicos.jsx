function ServiciosTecnicos() {
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
          <div className="technical-service-image reveal-left">
            <img src="/services/asesoria-tecnica.jpg" alt="Asesoría técnica" />
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
            <p>
              Formateo, instalación de programas, cambio de disco duro, memoria
              RAM, respaldo de información, antivirus y optimización del
              sistema.
            </p>
          </div>

          <div className="technical-service-image reveal-right">
            <img
              src="/services/ecosistema-windows.jpeg"
              alt="Ecosistema Windows"
            />
          </div>
        </article>

        <article className="technical-service-row">
          <div className="technical-service-image reveal-left">
            <img
              src="/services/camaras-seguridad.jpg"
              alt="Instalación de cámaras de seguridad"
            />
          </div>

          <div className="technical-service-text reveal-right">
            <h2>Instalación y configuración de cámaras de seguridad</h2>
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
              Sitio web todo incluido, dominio, correos corporativos, hosting y
              soluciones para pequeña empresa y emprendedores.
            </p>
          </div>

          <div className="technical-service-image reveal-right">
            <img
              src="/services/sitios-web.webp"
              alt="Sitios web todo incluido"
            />
          </div>
        </article>

        <article className="technical-service-row">
          <div className="technical-service-image reveal-left">
            <img
              src="/services/identidad-visual.jpg "
              alt="Nombre del servicio"
            />
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
