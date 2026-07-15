function Navbar({ isHeaderFixed, navigateToHomeSection, navigateToPage }) {
  return (
    <header className={`header ${isHeaderFixed ? "header-fixed" : ""}`}>
      <button
        className="logo logo-button"
        onClick={() => navigateToHomeSection("inicio")}
      >
        TecnoFix
      </button>

      <nav className="nav">
        <button
          className="nav-link"
          onClick={() => navigateToHomeSection("inicio")}
        >
          Inicio
        </button>

        <div className="services-menu">
          <button
            className="nav-link services-trigger"
            onClick={() => navigateToHomeSection("servicios")}
          >
            Nuestros Servicios
            <span className="services-symbol" aria-hidden="true"></span>
          </button>

          <div className="services-dropdown">
            <button onClick={() => navigateToPage("servicios-tecnicos")}>
              Servicios técnicos
            </button>
            <button onClick={() => navigateToHomeSection("servicios")}>
              Planes de sitio web
            </button>
            <button onClick={() => navigateToHomeSection("servicios")}>
              Cámaras de seguridad
            </button>
            <button onClick={() => navigateToHomeSection("servicios")}>
              Diseños
            </button>
          </div>
        </div>

        <button className="nav-link" onClick={() => navigateToPage("productos")}>
          Productos
        </button>
        <button
          className="nav-link"
          onClick={() => navigateToHomeSection("proceso")}
        >
          Proceso
        </button>
        <button className="nav-link" onClick={() => navigateToPage("contacto")}>
          Contacto
        </button>
      </nav>

      <a className="header-button" href="#">
        Cotizar
      </a>
    </header>
  );
}

export default Navbar;
