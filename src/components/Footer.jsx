function Footer({ navigateToHomeSection, navigateToPage }) {
  return (
    <footer className="footer reveal-bottom" id="contacto">
      <div className="footer-column">
        <h2>TecnoFix</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          facilisis justo vitae consequat posuere.
        </p>

        <div className="footer-socials">
          <a href="#" aria-label="Facebook">
            f
          </a>
          <a href="#" aria-label="X">
            X
          </a>
        </div>
      </div>

      <div className="footer-column">
        <h3>Contacto</h3>
        <p>Lorem ipsum dolor sit amet, zona 1, Ciudad</p>
        <strong>Teléfono: 0000-0000</strong>
        <p>correo@tecnofix.com</p>
      </div>

      <div className="footer-column">
        <h3>Enlaces</h3>

        <div className="footer-links">
          <button
            className="footer-link"
            onClick={() => navigateToHomeSection("inicio")}
          >
            Inicio
          </button>
          <button
            className="footer-link"
            onClick={() => navigateToPage("servicios-tecnicos")}
          >
            Servicios
          </button>
          <button
            className="footer-link"
            onClick={() => navigateToPage("productos")}
          >
            Catálogo
          </button>
          <button
            className="footer-link"
            onClick={() => navigateToPage("contacto")}
          >
            Contacto
          </button>
        </div>
      </div>

      <div className="footer-column">
        <h3>Aceptamos Pago con Tarjeta</h3>

        <div className="footer-payment">VISA / MasterCard / AMEX</div>

        <h3>Cuenta Bancaria</h3>
        <p>Banco: Lorem ipsum</p>
      </div>
    </footer>
  );
}

export default Footer;
