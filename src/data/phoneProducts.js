import { addProductIdentifiers } from "./productIdentifiers.js";

const createPhone = (product) => {
  const images = product.images ?? [];

  return addProductIdentifiers({
    category: "celulares",
    tag: "Celular",
    ...product,
    name: product.name ?? `${product.brand} ${product.model}`,
    badge: product.condition === "nuevos" ? "Nuevo" : "Seminuevo",
    images,
    image: images[0] ?? "",
  });
};

export const phoneProducts = [
  createPhone({
    id: "ph-0001",
    condition: "nuevos",
    brand: "Samsung",
    model: "Galaxy S26 Ultra",
    storage: "256GB",
    color: "Violeta cobalto",
    price: "Q2,999",
    description:
      "Samsung Galaxy S26 Ultra, teléfono inteligente Android desbloqueado, 256GB, violeta cobalto | Pantalla de privacidad, Galaxy AI, cámara AI, carga súper rápida 3.0, batería duradera, 2026",
    images: [
      "/products/celulares/nuevas/iphone-15-pro/iphone-15-pro1.jpg",
      "/products/celulares/nuevas/iphone-15-pro/iphone-15-pro2.jpg",
      "/products/celulares/nuevas/iphone-15-pro/iphone-15-pro3.jpg",
      "/products/celulares/nuevas/iphone-15-pro/iphone-15-pro4.webp",
      "/products/celulares/nuevas/iphone-15-pro/iphone-15-pro5.jpg",
      "/products/celulares/nuevas/iphone-15-pro/iphone-15-pro6.jpg",
    ],
  }),
  createPhone({
    id: "ph-0002",
    condition: "nuevos",
    brand: "Apple",
    model: "iPhone 12",
    storage: "128GB",
    color: "Negro",
    price: "Q2,849",
    description: "iPhone nuevo preparado para agregar su información real.",
    images: [],
  }),
  ...[
    ["ph-0003", "nuevos", "Xiaomi", "Modelo de prueba 3", "Q2,699"],
    ["ph-0004", "nuevos", "Motorola", "Modelo de prueba 4", "Q2,549"],
    ["ph-0005", "nuevos", "Honor", "Modelo de prueba 5", "Q2,399"],
    ["ph-0006", "seminuevos", "Samsung", "Modelo de prueba 1", "Q2,999"],
    ["ph-0007", "seminuevos", "Apple", "iPhone 12", "Q2,849"],
    ["ph-0008", "seminuevos", "Xiaomi", "Modelo de prueba 3", "Q2,699"],
    ["ph-0009", "seminuevos", "Motorola", "Modelo de prueba 4", "Q2,549"],
    ["ph-0010", "seminuevos", "Honor", "Modelo de prueba 5", "Q2,399"],
  ].map(([id, condition, brand, model, price]) =>
    createPhone({
      id,
      condition,
      brand,
      model,
      price,
      description: `${brand} ${model} preparado para agregar su información real.`,
      images: [],
    }),
  ),
];
