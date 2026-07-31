function PlanesSitiosWeb() {
  return (
    <section className="technical-services-page">
      <div
        className="technical-services-hero web-plans-hero"
        aria-label="Planes de sitios web"
      >
        <div className="technical-services-content reveal-bottom">
          <p className="technical-services-tag">Planes de sitios web</p>
          <h1>Desarrollo Web Profesional</h1>
          <p>
            Creamos sitios web modernos y personalizados para negocios y
            proyectos personales. Nuestro diseño se adapta a tus necesidades,
            ofreciendo una imagen profesional, atractiva y funcional para que
            destaques en Internet.
          </p>
        </div>
      </div>

      <div className="technical-services-detail">
        <article className="technical-service-row">
          <div className="technical-service-image reveal-left">
            <img
              src="/services/dominio_02.webp"
              alt="Dominio para sitio web"
            />
          </div>

          <div className="technical-service-text reveal-right">
            <h2>Dominio para tu sitio web</h2>
            <p>
              El dominio es la identidad digital de tu empresa y la dirección
              oficial de tu sitio web. Te ayudamos a elegir un nombre
              personalizado y profesional, por ejemplo: www.tuempresa.com.
            </p>
          </div>
        </article>

        <article className="technical-service-row reverse">
          <div className="technical-service-text reveal-left">
            <h2>Hosting para tu web</h2>
            <p>
              El hosting es el servicio que mantiene tu página web y tus correos
              electrónicos siempre disponibles, rápidos y seguros para tus
              visitantes.
            </p>
          </div>

          <div className="technical-service-image reveal-right">
            <img src="/services/hosting_02.jpg" alt="Hosting para tu web" />
          </div>
        </article>

        <article className="technical-service-row">
          <div className="technical-service-image reveal-left">
            <img
              src="/services/UnaPagina_02.jpg"
              alt="Sitio web de una sola página"
            />
          </div>

          <div className="technical-service-text reveal-right">
            <h2>Sitio web de una sola página</h2>
            <p>
              Toda la información de tu negocio o proyecto se organiza en una
              sola página. Es ideal para presentar servicios, contacto y datos
              principales de forma clara y directa.
            </p>

            <div className="technical-service-actions">
              <button className="service-quote-button" type="button">
                Cotizar página de una sección
              </button>
            </div>
          </div>
        </article>

        <article className="technical-service-row reverse">
          <div className="technical-service-text reveal-left">
            <h2>Sitios web con varias páginas</h2>
            <p>
              Desarrollamos una página principal conectada con secciones
              independientes para productos, servicios, contacto y más. Es ideal
              para negocios que necesitan mostrar más información de forma
              ordenada.
            </p>

            <div className="technical-service-actions">
              <button className="service-quote-button" type="button">
                Cotizar sitio con varias páginas
              </button>
            </div>
          </div>

          <div className="technical-service-image reveal-right">
            <img
              src="/services/Paginas_02.png"
              alt="Sitio web con varias páginas"
            />
          </div>
        </article>

        <article className="technical-service-row">
          <div className="technical-service-image reveal-left">
            <img
              src="/services/Integracion_02.png"
              alt="Integración de redes sociales"
            />
          </div>

          <div className="technical-service-text reveal-right">
            <h2>Integración de redes sociales</h2>
            <p>
              Agregamos botones y enlaces directos a tus redes sociales para que
              los visitantes puedan encontrarte y comunicarse contigo fácilmente.
            </p>
          </div>
        </article>

        <section className="web-plans-cta reveal-bottom">
          <p className="technical-services-tag">Te ayudamos a elegir</p>
          <h2>¿No sabes qué tipo de página necesitas?</h2>
          <p>
            Cuéntanos sobre tu negocio y te recomendaremos la opción que mejor
            se adapte a tus objetivos.
          </p>
          <button className="service-quote-button" type="button">
            Recibir asesoría
          </button>
        </section>
      </div>
    </section>
  );
}

export default PlanesSitiosWeb;
