import { useEffect, useState } from "react";
import "./App.css";
import BackgroundMedia from "./components/BackgroundMedia";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SearchOverlay from "./components/SearchOverlay";
import { categories, computerProducts, products } from "./data/products";
import { heroSlides } from "./data/siteData";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Productos from "./pages/Productos";
import PlanesSitiosWeb from "./pages/servicios/PlanesSitiosWeb";
import ServiciosTecnicos from "./pages/servicios/ServiciosTecnicos";

function App() {
  const [page, setPage] = useState("inicio");
  const [activeCategory, setActiveCategory] = useState("todos");
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [catalogReturnState, setCatalogReturnState] = useState({
    computerType: null,
    computerCondition: null,
  });
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const isProductsPage = page === "productos";
  const isTechnicalServicesPage = page === "servicios-tecnicos";
  const isWebPlansPage = page === "planes-sitios-web";
  const isContactPage = page === "contacto";
  const allProducts = [...products, ...computerProducts];
  const selectedProduct = allProducts.find(
    (product) => product.id === selectedProductId,
  );
  const isProductDetailPage = isProductsPage && Boolean(selectedProduct);
  const isFullWidthPage =
    isTechnicalServicesPage ||
    isWebPlansPage ||
    isContactPage ||
    isProductDetailPage;

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

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchTerm("");
  };

  const selectSearchProduct = (product) => {
    setSelectedProductId(product.id);
    setActiveCategory("todos");
    setCatalogReturnState({
      computerType: null,
      computerCondition: null,
    });
    setIsSearchOpen(false);
    setSearchTerm("");
  };

  const openProductDetails = (product, returnState = {}) => {
    setSelectedProductId(product.id);
    setCatalogReturnState({
      computerType: returnState.computerType ?? null,
      computerCondition: returnState.computerCondition ?? null,
    });
    scrollToPageTop();
  };

  const closeProductDetails = () => {
    setSelectedProductId(null);
    scrollToPageTop();
  };

  const filteredProducts =
    activeCategory === "todos"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const searchResults = searchTerm.trim()
    ? allProducts.filter((product) => {
        const text =
          `${product.name} ${product.tag} ${product.description}`.toLowerCase();

        return text.includes(searchTerm.toLowerCase());
      })
    : [];

  const renderPage = () => {
    if (isProductDetailPage) {
      return (
        <ProductDetail product={selectedProduct} onBack={closeProductDetails} />
      );
    }

    if (isProductsPage) {
      return (
        <Productos
          activeCategory={activeCategory}
          categories={categories}
          filteredProducts={filteredProducts}
          setActiveCategory={setActiveCategory}
          setSelectedProductId={setSelectedProductId}
          initialComputerType={catalogReturnState.computerType}
          initialComputerCondition={catalogReturnState.computerCondition}
          onViewProduct={openProductDetails}
          onOpenSearch={() => setIsSearchOpen(true)}
        />
      );
    }

    if (isTechnicalServicesPage) {
      return <ServiciosTecnicos navigateToPage={navigateToPage} />;
    }

    if (isWebPlansPage) {
      return <PlanesSitiosWeb />;
    }

    if (isContactPage) {
      return <Contacto />;
    }

    return (
      <Home
        heroSlides={heroSlides}
        activeSlide={activeSlide}
        navigateToPage={navigateToPage}
      />
    );
  };

  return (
    <main
      className={`page ${isFullWidthPage ? "page-full-width" : ""} ${
        isProductDetailPage ? "product-detail-mode" : ""
      }`}
    >
      {!isProductDetailPage && <BackgroundMedia />}

      {!isProductDetailPage && (
        <Navbar
          isHeaderFixed={isHeaderFixed}
          navigateToHomeSection={navigateToHomeSection}
          navigateToPage={navigateToPage}
        />
      )}

      {isSearchOpen && (
        <SearchOverlay
          searchTerm={searchTerm}
          searchResults={searchResults}
          setSearchTerm={setSearchTerm}
          onClose={closeSearch}
          onSelectProduct={selectSearchProduct}
        />
      )}

      {renderPage()}

      <Footer
        navigateToHomeSection={navigateToHomeSection}
        navigateToPage={navigateToPage}
      />
    </main>
  );
}

export default App;
