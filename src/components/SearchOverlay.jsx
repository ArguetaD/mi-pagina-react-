function SearchOverlay({
  searchTerm,
  searchResults,
  setSearchTerm,
  onClose,
  onSelectProduct,
}) {
  return (
    <div className="search-overlay">
      <div className="search-panel">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          autoFocus
        />

        <button className="search-close" onClick={onClose}>
          Cerrar
        </button>

        <div className="search-results">
          {searchResults.map((product) => (
            <button
              className="search-result"
              key={product.id}
              onClick={() => onSelectProduct(product)}
            >
              <strong>{product.name}</strong>
              <span>{product.brand ?? product.tag}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchOverlay;
