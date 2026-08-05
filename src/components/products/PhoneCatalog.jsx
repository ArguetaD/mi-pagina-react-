import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductCategoryCard from "./ProductCategoryCard";

function PhoneCatalog({
  conditions,
  products,
  initialCondition,
  onViewProduct,
}) {
  const [selectedCondition, setSelectedCondition] = useState(initialCondition);
  const visibleProducts = products.filter(
    (product) => product.condition === selectedCondition,
  );
  const conditionLabel =
    selectedCondition === "nuevos" ? "Nuevos" : "Seminuevos";

  return (
    <div className="product-category-section">
      {selectedCondition !== null && (
        <button
          className="product-category-back"
          type="button"
          onClick={() => setSelectedCondition(null)}
        >
          <span aria-hidden="true">←</span> Volver a Nuevos / Seminuevos
        </button>
      )}

      <div className="product-category-heading">
        <p>Celulares</p>
        <h2>
          {selectedCondition === null
            ? "Elige el estado del celular"
            : `Celulares ${conditionLabel.toLowerCase()}`}
        </h2>
      </div>

      {selectedCondition === null ? (
        <div className="product-category-grid">
          {conditions.map((condition) => (
            <ProductCategoryCard
              category={condition}
              key={condition.id}
              onSelect={setSelectedCondition}
            />
          ))}
        </div>
      ) : (
        <>
          <p className="products-count">{visibleProducts.length} productos</p>
          <div className="products-grid phone-products-grid">
            {visibleProducts.map((product) => (
              <ProductCard
                product={product}
                key={product.id}
                onViewDetails={() =>
                  onViewProduct(product, { phoneCondition: selectedCondition })
                }
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default PhoneCatalog;
