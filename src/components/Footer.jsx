function Footer({ navigateToHomeSection, navigateToPage }) {
  return (
    <footer className="footer reveal-bottom" id="contacto">
      <div>
        <h2>TecnoFix</h2>
        <p>Soporte técnico confiable para equipos, sistemas y seguridad.</p>
      </div>

      <div className="footer-links">
        <button
          className="footer-link"
          onClick={() => navigateToHomeSection("inicio")}
        >
          Inicio
        </button>
        <button
          className="footer-link"
          onClick={() => navigateToHomeSection("servicios")}
        >
          Servicios
        </button>
        <button className="footer-link" onClick={() => navigateToPage("productos")}>
          Productos
        </button>
        <button
          className="footer-link"
          onClick={() => navigateToHomeSection("proceso")}
        >
          Proceso
        </button>
        <button className="footer-link" onClick={() => navigateToPage("contacto")}>
          Contacto
        </button>
      </div>
    </footer>
  );
}

export default Footer;
