import { useEffect, useState } from "react";
import "./App.css";

const heroSlides = [
  "/hero-carousel/slide-1.jpg",
  "/hero-carousel/slide-2.jpg",
  "/hero-carousel/slide-3.jpg",
  "/hero-carousel/slide-4.jpg",
  "/hero-carousel/slide-5.jpg",
  "/hero-carousel/slide-6.jpg",
  "/hero-carousel/slide-7.jpg",
  "/hero-carousel/slide-8.jpg",
  "/hero-carousel/slide-9.jpg",
  "/hero-carousel/slide-10.jpg",
];

const categories = [
  { id: "todos", label: "Todos" },
  { id: "computadoras", label: "Computadoras" },
  { id: "celulares", label: "Celulares" },
  { id: "camaras", label: "Cámaras" },
  { id: "accesorios", label: "Accesorios" },
];

const products = [
  {
    id: 1,
    category: "computadoras",
    tag: "Laptop",
    name: "Laptop HP ProBook",
    description: "Equipo ideal para trabajo, estudio y tareas de oficina.",
    price: "Q3,850",
    badge: "Disponible",
    image: "/products/imgprueba1.webp",
  },
  {
    id: 2,
    category: "celulares",
    tag: "Smartphone",
    name: "Samsung Galaxy A Series",
    description: "Celular Android con buen rendimiento para uso diario.",
    price: "Q1,650",
    badge: "Nuevo",
  },
  {
    id: 3,
    category: "camaras",
    tag: "Seguridad",
    name: "Kit de cámaras WiFi",
    description: "Sistema de monitoreo para hogar o negocio.",
    price: "Q2,400",
    badge: "Instalación",
  },
  {
    id: 4,
    category: "accesorios",
    tag: "Accesorio",
    name: "Mouse inalámbrico",
    description: "Mouse cómodo, portátil y compatible con laptop o PC.",
    price: "Q95",
    badge: "Popular",
  },
];

function App() {
  const [page, setPage] = useState("inicio");
  const [activeCategory, setActiveCategory] = useState("todos");
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const isProductsPage = page === "productos";
  const isTechnicalServicesPage = page === "servicios-tecnicos";
  const isContactPage = page === "contacto";
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((currentSlide) =>
        currentSlide === heroSlides.length - 1 ? 0 : currentSlide + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderFixed(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".reveal-left, .reveal-right, .reveal-bottom",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.3 },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [page]);

  const scrollToPageTop = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  };

  const navigateToPage = (nextPage) => {
    setPage(nextPage);
    setSelectedProductId(null);
    setIsSearchOpen(false);
    setSearchTerm("");
    scrollToPageTop();
  };

  const navigateToHomeSection = (sectionId) => {
    setPage("inicio");
    setSelectedProductId(null);
    setIsSearchOpen(false);
    setSearchTerm("");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (sectionId === "inicio") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }

        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  };

  const filteredProducts = selectedProductId
    ? products.filter((product) => product.id === selectedProductId)
    : activeCategory === "todos"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const searchResults = searchTerm.trim()
    ? products.filter((product) => {
        const text =
          `${product.name} ${product.tag} ${product.description}`.toLowerCase();

        return text.includes(searchTerm.toLowerCase());
      })
    : [];
  return (
    <main
      className={`page ${
        isTechnicalServicesPage || isContactPage ? "page-full-width" : ""
      }`}
    >
      <div className="background-media" aria-hidden="true">
        <video autoPlay loop muted playsInline>
          <source src="/background-video.mp4" type="video/mp4" />
        </video>
      </div>

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
          <button
            className="nav-link"
            onClick={() => navigateToPage("productos")}
          >
            Productos
          </button>
          <button
            className="nav-link"
            onClick={() => navigateToHomeSection("proceso")}
          >
            Proceso
          </button>
          <button
            className="nav-link"
            onClick={() => navigateToPage("contacto")}
          >
            Contacto
          </button>
        </nav>

        <a className="header-button" href="#">
          Cotizar
        </a>
      </header>

      {isSearchOpen && (
        <div className="search-overlay">
          <div className="search-panel">
            <input
              type="text"
              placeholder="Buscar producto..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              autoFocus
            />

            <button
              className="search-close"
              onClick={() => {
                setIsSearchOpen(false);
                setSearchTerm("");
              }}
            >
              Cerrar
            </button>

            <div className="search-results">
              {searchResults.map((product) => (
                <button
                  className="search-result"
                  key={product.id}
                  onClick={() => {
                    setSelectedProductId(product.id);
                    setActiveCategory("todos");
                    setIsSearchOpen(false);
                    setSearchTerm("");
                  }}
                >
                  <strong>{product.name}</strong>
                  <span>{product.tag}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {isProductsPage ? (
        <section className="products-page">
          <div className="section-title products-title">
            <p>Productos</p>
            <h1>Catálogo tecnológico</h1>
          </div>

          <div className="product-filters">
            {categories.map((category) => (
              <button
                className={`product-filter ${
                  activeCategory === category.id ? "active" : ""
                }`}
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setSelectedProductId(null);
                }}
              >
                {category.label}
              </button>
            ))}

            <button
              className="product-search-trigger"
              aria-label="Buscar productos"
              onClick={() => setIsSearchOpen(true)}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="search-icon"
              >
                <path
                  d="M10.8 18.1a7.3 7.3 0 1 1 0-14.6 7.3 7.3 0 0 1 0 14.6Zm5.2-1.7 4.5 4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2.4"
                />
              </svg>
            </button>
          </div>

          <p className="products-count">{filteredProducts.length} productos</p>

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <button className="product-card" key={product.id}>
                <div className="product-card-inner">
                  <div className="product-card-face product-card-front">
                    <div className="product-image">
                      {product.image ? (
                        <img src={product.image} alt={product.name} />
                      ) : (
                        <span>{product.tag}</span>
                      )}
                    </div>

                    <div className="product-body">
                      <p className="product-tag">{product.tag}</p>
                      <h3>{product.name}</h3>

                      <div className="product-footer">
                        <strong>{product.price}</strong>
                        <span>{product.badge}</span>
                      </div>
                    </div>
                  </div>

                  <div className="product-card-face product-card-back">
                    <p className="product-tag">Detalles</p>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <ul>
                      <li>Categoría: {product.category}</li>
                      <li>Estado: {product.badge}</li>
                      <li>Precio: {product.price}</li>
                    </ul>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
      ) : isTechnicalServicesPage ? (
        <section className="technical-services-page">
          <div className="technical-services-hero" aria-label="Servicios técnicos"></div>

          <div className="technical-services-content reveal-bottom">
            <p className="technical-services-tag">Servicios técnicos</p>
            <h1>Soporte técnico para tus equipos</h1>
            <p>
              Diagnóstico, mantenimiento, reparación y optimización para que tus
              equipos trabajen de forma estable, rápida y segura.
            </p>
          </div>
        </section>
      ) : isContactPage ? (
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
      ) : (
        <>
          <section className="hero" id="inicio">
            <div className="hero-content reveal-left">
              <p className="tag">Innovación y soporte técnico</p>

              <h1>
                Soluciones tecnológicas para equipos, sistemas y seguridad
              </h1>

              <p className="hero-text">
                Reparamos equipos, configuramos sistemas e instalamos soluciones
                de seguridad para que tu tecnología trabaje estable, rápida y
                sin complicaciones.
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
                  Limpieza, diagnóstico, optimización y reparación de
                  computadoras para mejorar su rendimiento y vida útil.
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
                <p>
                  Revisamos el equipo o necesidad para encontrar la causa real.
                </p>
              </div>

              <div className="process-item">
                <span>02</span>
                <h3>Propuesta</h3>
                <p>
                  Explicamos la solución, tiempo estimado y costo antes de
                  iniciar.
                </p>
              </div>

              <div className="process-item">
                <span>03</span>
                <h3>Servicio</h3>
                <p>
                  Ejecutamos el trabajo con orden, cuidado y atención al
                  detalle.
                </p>
              </div>

              <div className="process-item">
                <span>04</span>
                <h3>Prueba final</h3>
                <p>
                  Validamos funcionamiento y dejamos recomendaciones de uso.
                </p>
              </div>
            </div>
          </section>
        </>
      )}

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
          <button
            className="footer-link"
            onClick={() => navigateToPage("productos")}
          >
            Productos
          </button>
          <button
            className="footer-link"
            onClick={() => navigateToHomeSection("proceso")}
          >
            Proceso
          </button>
          <button
            className="footer-link"
            onClick={() => navigateToPage("contacto")}
          >
            Contacto
          </button>
        </div>
      </footer>
    </main>
  );
}

export default App;
