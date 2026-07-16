import { useState } from "react";

function Navbar({ isHeaderFixed, navigateToHomeSection, navigateToPage }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const closeServicesMenu = () => {
    setIsServicesOpen(false);
    document.activeElement?.blur?.();
  };

  const handleHomeSectionClick = (sectionId) => {
    closeServicesMenu();
    navigateToHomeSection(sectionId);
  };

  const handlePageClick = (nextPage) => {
    closeServicesMenu();
    navigateToPage(nextPage);
  };

  return (
    <header className={`header ${isHeaderFixed ? "header-fixed" : ""}`}>
      <button
        className="logo logo-button"
        onClick={() => handleHomeSectionClick("inicio")}
      >
        TecnoFix
      </button>

      <nav className="nav">
        <button
          className="nav-link"
          onClick={() => handleHomeSectionClick("inicio")}
        >
          Inicio
        </button>

        <div
          className={`services-menu ${isServicesOpen ? "is-open" : ""}`}
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
          onFocus={() => setIsServicesOpen(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsServicesOpen(false);
            }
          }}
        >
          <button
            className="nav-link services-trigger"
            onClick={() => handleHomeSectionClick("servicios")}
          >
            Nuestros Servicios
            <span className="services-symbol" aria-hidden="true"></span>
          </button>

          <div className="services-dropdown">
            <button onClick={() => handlePageClick("servicios-tecnicos")}>
              Servicios técnicos
            </button>
            <button onClick={() => handlePageClick("planes-sitios-web")}>
              Planes de sitio web
            </button>
            <button onClick={() => handleHomeSectionClick("servicios")}>
              Cámaras de seguridad
            </button>
            <button onClick={() => handleHomeSectionClick("servicios")}>
              Diseños
            </button>
          </div>
        </div>

        <button className="nav-link" onClick={() => handlePageClick("productos")}>
          Productos
        </button>
        <button
          className="nav-link"
          onClick={() => handleHomeSectionClick("proceso")}
        >
          Proceso
        </button>
        <button className="nav-link" onClick={() => handlePageClick("contacto")}>
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
