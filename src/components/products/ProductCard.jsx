function ProductCard({ product, onViewDetails }) {
  return (
    <article className="product-card">
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
            <li>Categoría: {product.tag}</li>
            <li>Estado: {product.badge}</li>
            <li>Precio: {product.price}</li>
          </ul>

          <button
            className="product-details-button"
            type="button"
            onClick={onViewDetails}
          >
            Ver detalles
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
