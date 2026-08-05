const defaultSpecifications = [
  ["Procesador", "Lorem ipsum dolor sit amet"],
  ["Memoria RAM", "Lorem ipsum dolor sit amet"],
  ["Almacenamiento", "Lorem ipsum dolor sit amet"],
  ["Sistema operativo", "Lorem ipsum dolor sit amet"],
  ["Gráficos", "Lorem ipsum dolor sit amet"],
  ["Puertos", "Lorem ipsum dolor sit amet"],
  ["Conectividad", "Lorem ipsum dolor sit amet"],
  ["Garantía", "Lorem ipsum dolor sit amet"],
];

function ProductSpecifications({ specifications }) {
  const rows = specifications
    ? Object.entries(specifications)
    : defaultSpecifications;

  return (
    <section className="product-specifications">
      <div className="product-detail-section-title">
        <h2>Especificaciones técnicas</h2>
      </div>

      <dl>
        {rows.map(([label, value]) => (
          <div className="product-specification-row" key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default ProductSpecifications;
