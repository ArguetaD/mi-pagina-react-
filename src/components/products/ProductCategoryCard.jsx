function ProductCategoryCard({ category, onSelect }) {
  return (
    <button
      className="product-category-card"
      type="button"
      aria-label={`Ver productos de ${category.label}`}
      onClick={() => onSelect?.(category.id)}
    >
      <div className="product-category-image">
        {category.image ? (
          <img
            className={category.imageFit ? `image-${category.imageFit}` : ""}
            src={category.image}
            alt={category.label}
          />
        ) : (
          <div className="product-category-placeholder" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="14" rx="2" />
              <path d="m7 14 3-3 2.5 2.5 2-2L19 16M9 21h6M12 18v3" />
            </svg>
            <span>Imagen por agregar</span>
          </div>
        )}
      </div>

      <div className="product-category-body">
        <h2>{category.label}</h2>
        <span>{category.actionLabel ?? "Explorar categoría"}</span>
      </div>
    </button>
  );
}

export default ProductCategoryCard;
