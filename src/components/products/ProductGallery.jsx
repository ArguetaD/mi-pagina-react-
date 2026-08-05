import { useState } from "react";

function ProductGallery({ product }) {
  const productImages = product.images?.filter(Boolean) ?? [];
  const availableImages = productImages.length
    ? productImages
    : product.image
      ? [product.image]
      : [];
  const galleryImages = [...availableImages, ...Array(6).fill(null)].slice(0, 6);
  const [activeImage, setActiveImage] = useState(0);
  const [failedImages, setFailedImages] = useState([]);
  const currentImage = failedImages.includes(activeImage)
    ? null
    : galleryImages[activeImage];

  const registerFailedImage = (index) => {
    setFailedImages((current) =>
      current.includes(index) ? current : [...current, index],
    );
  };

  const showPrevious = () => {
    setActiveImage((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveImage((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="product-gallery" aria-label="Galería del producto">
      <div className="product-gallery-layout">
        <div className="product-gallery-thumbnails" aria-label="Seleccionar imagen">
          {galleryImages.map((image, index) => (
            <button
              className={`product-gallery-thumbnail ${index === activeImage ? "active" : ""}`}
              type="button"
              aria-label={`Ver imagen ${index + 1}`}
              aria-pressed={index === activeImage}
              key={`${image ?? "placeholder"}-${index}`}
              onClick={() => setActiveImage(index)}
            >
              {image && !failedImages.includes(index) ? (
                <img
                  src={image}
                  alt=""
                  onError={() => registerFailedImage(index)}
                />
              ) : (
                <span>{index + 1}</span>
              )}
            </button>
          ))}
        </div>

        <div className="product-gallery-main">
          <div className="product-gallery-stage">
            {currentImage ? (
              <img
                src={currentImage}
                alt={`${product.name} - imagen ${activeImage + 1}`}
                onError={() => registerFailedImage(activeImage)}
              />
            ) : (
              <div className="product-gallery-placeholder">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="15" rx="2" />
                  <path d="m6 16 4-4 3 3 2-2 3 3" />
                </svg>
                <strong>Imagen {activeImage + 1}</strong>
                <span>Espacio preparado para una foto del producto</span>
              </div>
            )}

            <button className="product-gallery-arrow previous" type="button" aria-label="Ver imagen anterior" onClick={showPrevious}>‹</button>
            <button className="product-gallery-arrow next" type="button" aria-label="Ver imagen siguiente" onClick={showNext}>›</button>
          </div>

          <div className="product-gallery-dots" aria-label="Posición de la imagen">
            {galleryImages.map((image, index) => (
              <button
                className={index === activeImage ? "active" : ""}
                type="button"
                aria-label={`Ver imagen ${index + 1}`}
                aria-pressed={index === activeImage}
                key={`dot-${image ?? "placeholder"}-${index}`}
                onClick={() => setActiveImage(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductGallery;
