import PriceDisplay from "./PriceDisplay";

function PhoneProductInformation({ product }) {
  return (
    <section className="phone-detail-information">
      <button className="phone-detail-brand-link" type="button">
        Ver productos de {product.brand ?? "esta marca"}
      </button>

      <div className="phone-detail-rating" aria-label="5 de 5 estrellas">
        <span aria-hidden="true">★★★★★</span>
        <strong>(5)</strong>
        <span>1 valoración</span>
      </div>

      <span className="phone-detail-offer">Oferta</span>
      <div className="phone-detail-divider" />
      <p className="phone-detail-stock">Disponible.</p>

      <div className="phone-detail-pricing">
        <div className="phone-detail-current-price">
          <span>Precio:</span>
          <em>-15%</em>
          <strong><PriceDisplay price={product.price} /></strong>
        </div>
        <p>Precio recomendado: <del>Q3,499.00</del></p>
      </div>

      <div className="phone-detail-commercial-info">
        <p><strong>Garantía: 1 año</strong></p>
        <p>Disponible para comprar en cuotas.</p>
        <button type="button">▣ Ver promociones disponibles</button>
        <p className="phone-detail-location">⌖ Guatemala, Guatemala</p>
      </div>

      <button className="product-detail-contact phone-detail-contact" type="button">
        Consultar disponibilidad
      </button>
    </section>
  );
}

export default PhoneProductInformation;
