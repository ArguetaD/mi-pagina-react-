import { useState } from "react";
import ProductCategoryCard from "../components/products/ProductCategoryCard";
import ProductCard from "../components/products/ProductCard";
import {
  computerCategories,
  computerProductConditions,
  computerProducts,
} from "../data/products";

function Productos({
  activeCategory,
  categories,
  filteredProducts,
  setActiveCategory,
  setSelectedProductId,
  initialComputerType,
  initialComputerCondition,
  onViewProduct,
  onOpenSearch,
}) {
  const [selectedComputerType, setSelectedComputerType] = useState(
    initialComputerType,
  );
  const [selectedComputerCondition, setSelectedComputerCondition] =
    useState(initialComputerCondition);

  const selectedComputerProducts = computerProducts.filter(
    (product) =>
      product.type === selectedComputerType &&
      product.condition === selectedComputerCondition,
  );

  const computerTypeLabel =
    selectedComputerType === "escritorio" ? "Escritorio" : "Laptops";

  const computerConditionLabel =
    selectedComputerCondition === "nuevos" ? "Nuevos" : "Seminuevos";

  return (
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
              setSelectedComputerType(null);
              setSelectedComputerCondition(null);
            }}
          >
            {category.label}
          </button>
        ))}

        <button
          className="product-search-trigger"
          aria-label="Buscar productos"
          onClick={onOpenSearch}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
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

      {activeCategory === "computadoras" ? (
        <div className="product-category-section">
          {(selectedComputerType !== null ||
            selectedComputerCondition !== null) && (
            <button
              className="product-category-back"
              type="button"
              onClick={() => {
                if (selectedComputerCondition !== null) {
                  setSelectedComputerCondition(null);
                } else {
                  setSelectedComputerType(null);
                }
              }}
            >
              <span aria-hidden="true">←</span>{" "}
              {selectedComputerCondition !== null
                ? "Volver a Nuevos / Seminuevos"
                : "Volver a tipos de equipo"}
            </button>
          )}

          <div className="product-category-heading">
            <p>
              {selectedComputerCondition !== null
                ? `${computerTypeLabel} · ${computerConditionLabel}`
                : selectedComputerType === "escritorio"
                  ? "Computadoras de escritorio"
                  : selectedComputerType === "laptops"
                    ? "Laptops"
                    : "Computadoras"}
            </p>
            <h2>
              {selectedComputerCondition !== null
                ? `Equipos ${computerConditionLabel.toLowerCase()}`
                : selectedComputerType !== null
                ? "Elige el estado del equipo"
                : "Elige el tipo de equipo"}
            </h2>
          </div>

          {selectedComputerCondition !== null ? (
            <>
              <p className="products-count">
                {selectedComputerProducts.length} productos
              </p>
              <div className="products-grid computer-products-grid">
                {selectedComputerProducts.map((product) => (
                  <ProductCard
                    product={product}
                    key={product.id}
                    onViewDetails={() =>
                      onViewProduct(product, {
                        computerType: selectedComputerType,
                        computerCondition: selectedComputerCondition,
                      })
                    }
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="product-category-grid">
              {(selectedComputerType !== null
                ? computerProductConditions[selectedComputerType]
                : computerCategories
              ).map((category) => (
                <ProductCategoryCard
                  category={category}
                  key={category.id}
                  onSelect={
                    selectedComputerType === null
                      ? setSelectedComputerType
                      : setSelectedComputerCondition
                  }
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          <p className="products-count">{filteredProducts.length} productos</p>

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                product={product}
                key={product.id}
                onViewDetails={() => onViewProduct(product)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default Productos;
