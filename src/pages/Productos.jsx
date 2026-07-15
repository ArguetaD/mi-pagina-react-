function Productos({
  activeCategory,
  categories,
  filteredProducts,
  setActiveCategory,
  setSelectedProductId,
  onOpenSearch,
}) {
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
  );
}

export default Productos;
