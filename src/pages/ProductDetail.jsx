import { useState } from "react";
import ProductGallery from "../components/products/ProductGallery";
import ProductSpecifications from "../components/products/ProductSpecifications";
import PhoneProductInformation from "../components/products/PhoneProductInformation";
import PriceDisplay from "../components/products/PriceDisplay";

function ProductDetail({ product, onBack }) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const isPhone = product.category === "celulares";

  return (
    <article className="product-detail-page">
      <header className="product-detail-header">
        <div className="product-detail-header-inner">
          <button
            className="product-detail-back"
            type="button"
            onClick={onBack}
          >
            <span aria-hidden="true">←</span> Volver a los productos
          </button>

          <div className="product-detail-brand">
            <div className="product-detail-logo" aria-label="Espacio para logo">
              TF
            </div>
            <span className="product-detail-brand-divider" aria-hidden="true" />
            <strong>TecnoFix</strong>
          </div>
        </div>
      </header>

      <div className="product-detail-container">
        {!isPhone && (
          <div className="product-detail-heading">
            <p>{product.tag}</p>
            <h1>{product.name}</h1>
          </div>
        )}

        {isPhone && (
          <div className="phone-detail-heading">
            <h1>{product.name}</h1>
          </div>
        )}

        <div className={`product-detail-overview ${isPhone ? "phone-detail-overview" : ""}`}>
          <ProductGallery product={product} />

          {isPhone ? (
            <PhoneProductInformation product={product} />
          ) : (
          <div className="product-detail-information">
            <section className="product-description-control">
              <button
                className="product-description-toggle"
                type="button"
                aria-expanded={isDescriptionOpen}
                onClick={() => setIsDescriptionOpen((current) => !current)}
              >
                <span>Descripción del producto</span>
                <strong>
                  {isDescriptionOpen ? "Ocultar" : "Ver descripción"}
                </strong>
              </button>

              {isDescriptionOpen && (
                <div className="product-description-popover">
                  <h2>Información del producto</h2>
                  <p>
                    {product.description} Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Esta información se reemplazará
                    posteriormente con la descripción real del equipo.
                  </p>
                </div>
              )}
            </section>

            <ProductSpecifications specifications={product.specifications} />

            <section className="product-detail-summary">
              <div className="product-detail-badges">
                <span>{product.badge}</span>
                <span>Disponible</span>
              </div>

              <div className="product-detail-price">
                <span>Precio</span>
                <strong><PriceDisplay price={product.price} /></strong>
              </div>

              <div className="product-detail-code">
                <span>Código del producto</span>
                <strong>{product.sku ?? product.id}</strong>
              </div>

              <button className="product-detail-contact" type="button">
                Consultar este equipo
              </button>
            </section>
          </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProductDetail;
