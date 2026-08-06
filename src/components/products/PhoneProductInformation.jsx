import PriceDisplay from "./PriceDisplay";

function PhoneProductInformation({ product }) {
  const characteristics =
    product.characteristics ??
    [
      ["Marca", product.brand ?? "Samsung"],
      ["Sistema operativo", "Android 16, One UI 8.5"],
      ["Memoria RAM instalada", "12 GB"],
      ["Almacenamiento", "256 GB"],
      ["Tamaño de pantalla", "6.9 pulgadas"],
      ["Resolución", "QHD+"],
      ["Velocidad de actualización", "120 Hz"],
      ["Nombre del modelo", product.name],
      ["Operador inalámbrico", "Compatible con todos los operadores"],
      ["Tecnología celular", "5G"],
    ];

  return (
    <section className="phone-detail-information">
      <strong className="phone-detail-brand-name">
        {product.brand ?? "Marca"}
      </strong>

      <p className="phone-detail-description">{product.description}</p>

      <div className="phone-detail-rating" aria-label="5 de 5 estrellas">
        <strong>4.7</strong>
        <span aria-hidden="true">★★★★★</span>
      </div>
      <div className="phone-detail-divider" />
      <p className="phone-detail-stock">Disponible.</p>

      <div className="phone-detail-pricing">
        <div className="phone-detail-current-price">
          <span>Precio:</span>
          <em>-15%</em>
          <strong>
            <PriceDisplay price={product.price} />
          </strong>
        </div>
        <p>Precio recomendado: <del>Q3,499.00</del></p>
      </div>

      <div className="phone-detail-commercial-info">
        <h2>Características del celular</h2>
        <dl>
          {characteristics.map(([label, value]) => (
            <div className="phone-characteristic-row" key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <button
        className="product-detail-contact phone-detail-contact"
        type="button"
      >
        Consultar disponibilidad
      </button>
    </section>
  );
}

export default PhoneProductInformation;
