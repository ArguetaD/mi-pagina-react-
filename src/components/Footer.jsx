function Footer({ navigateToHomeSection, navigateToPage }) {
  return (
    <footer className="footer reveal-bottom" id="contacto">
      <div className="footer-content">
        <div className="footer-column footer-brand">
          <h2>TecnoFix</h2>
          <p>
            Soluciones tecnológicas, soporte técnico y servicios digitales
            para hogares, negocios y emprendedores.
          </p>
        </div>

        <div className="footer-column">
          <h3>Contacto</h3>
          <p>Atención en Guatemala</p>
          <strong>Teléfono: 0000-0000</strong>
          <p>correo@tecnofix.com</p>
        </div>

        <div className="footer-column">
          <h3>Enlaces</h3>

          <div className="footer-links">
            <button
              className="footer-link"
              type="button"
              onClick={() => navigateToHomeSection("inicio")}
            >
              Inicio
            </button>
            <button
              className="footer-link"
              type="button"
              onClick={() => navigateToPage("servicios-tecnicos")}
            >
              Servicios
            </button>
            <button
              className="footer-link"
              type="button"
              onClick={() => navigateToPage("productos")}
            >
              Catálogo
            </button>
            <button
              className="footer-link"
              type="button"
              onClick={() => navigateToPage("contacto")}
            >
              Contacto
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-socials" aria-label="Redes sociales">
          <button type="button" aria-label="Facebook" title="Facebook">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v2H6v4h3v7h4v-7h3.5l.5-4h-4V9c0-.7.3-1 1-1Z" />
            </svg>
          </button>

          <button type="button" aria-label="Instagram" title="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" className="icon-fill" />
            </svg>
          </button>

          <button type="button" aria-label="WhatsApp" title="WhatsApp">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                className="icon-outline"
                d="M20 11.7a8 8 0 0 1-11.8 7l-4.2 1.1 1.1-4.1A8 8 0 1 1 20 11.7Z"
              />
              <path d="M9 8.2c.3-.5.6-.5.9-.5h.4l.8 2c.1.3 0 .5-.2.7l-.6.7c-.2.2-.1.4 0 .6.5.9 1.2 1.6 2.1 2.1.2.1.4.2.6 0l.8-1c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.6 0 .6-.3 1.3-.8 1.7-.5.5-1.3.7-2 .5-1.2-.3-2.8-1-4.3-2.4-1.2-1.1-2.1-2.5-2.5-3.7-.3-.8.1-1.5.4-2Z" />
            </svg>
          </button>
        </div>

        <p>© 2026 TecnoFix. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
