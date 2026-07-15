function Contacto() {
  return (
    <section className="contact-page">
      <div className="contact-hero-band">
        <div className="contact-intro-card reveal-bottom">
          <h1>Contáctenos</h1>
          <div className="contact-divider"></div>
          <p>Estamos para ayudarte</p>
        </div>
      </div>

      <div className="contact-cards">
        <article className="contact-card reveal-bottom">
          <span className="contact-icon">☎</span>
          <h3>Llámanos</h3>
          <p>(502) 5555-5555</p>
        </article>

        <article className="contact-card reveal-bottom">
          <span className="contact-icon">✉</span>
          <h3>Escríbenos</h3>
          <p>contacto@tecnofix.com</p>
        </article>

        <article className="contact-card reveal-bottom">
          <span className="contact-icon">⌖</span>
          <h3>Visítanos</h3>
          <p>Ciudad de Quetzaltenango, La Cruz</p>
        </article>
      </div>
    </section>
  );
}

export default Contacto;
