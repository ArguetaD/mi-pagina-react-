export const categories = [
  { id: "todos", label: "Todos" },
  { id: "computadoras", label: "Computadoras" },
  { id: "celulares", label: "Celulares" },
  { id: "camaras", label: "Cámaras" },
  { id: "accesorios", label: "Accesorios" },
];

// Cada producto utiliza su propio arreglo de imágenes. La primera imagen
// también funciona como portada de la tarjeta del catálogo.
export const productImageGalleries = {
  // "celular-nuevos-1": [
  //   "/products/celulares/nuevas/samsung-1.jpg",
  //   "/products/celulares/nuevas/samsung-2.jpg",
  // ],
  // "escritorio-nuevos-1": [
  //   "/products/computadoras/escritorio/nueva/hp-1.jpg",
  //   "/products/computadoras/escritorio/nueva/hp-2.jpg",
  // ],
};

const getProductImages = (productId) =>
  productImageGalleries[productId] ?? [];

export const computerCategories = [
  {
    id: "escritorio",
    label: "Escritorio",
    image: "/products/escritorio.jpg",
  },
  {
    id: "laptops",
    label: "Laptops",
    image: "/products/laptops.jpg",
  },
];

export const computerProductConditions = {
  escritorio: [
    {
      id: "nuevos",
      label: "Nuevos",
      image: "/products/computadoras/escritorio/imgescnuevo.jpg",
      actionLabel: "Ver equipos nuevos",
    },
    {
      id: "seminuevos",
      label: "Seminuevos",
      image: "/products/computadoras/escritorio/imgescseminuevo.jpg",
      actionLabel: "Ver equipos seminuevos",
    },
  ],

  laptops: [
    {
      id: "nuevos",
      label: "Nuevos",
      image: "/products/computadoras/laptops/imglapnuevo.jpg",
      actionLabel: "Ver equipos nuevos",
    },
    {
      id: "seminuevos",
      label: "Seminuevos",
      image: "/products/computadoras/laptops/imglapseminuevo.jpg",
      actionLabel: "Ver equipos seminuevos",
    },
  ],
};
const computerBrands = ["HP", "Dell", "Lenovo", "Acer", "ASUS"];

const createComputerProducts = (type, condition, typeLabel, conditionLabel) =>
  computerBrands.map((brand, index) => {
    const id = `${type}-${condition}-${index + 1}`;
    const images = getProductImages(id);

    return {
      id,
      type,
      condition,
      brand,
      tag: typeLabel,
      name: `${brand} ${typeLabel} ${conditionLabel}`,
      description: `Equipo ${conditionLabel.toLowerCase()} preparado para agregar sus características y especificaciones.`,
      price: `Q${(3850 - index * 175).toLocaleString("en-US")}`,
      badge: conditionLabel,
      image: images[0] ?? "",
      images,
    };
  });

export const computerProducts = [
  ...createComputerProducts("escritorio", "nuevos", "Escritorio", "Nuevo"),
  ...createComputerProducts(
    "escritorio",
    "seminuevos",
    "Escritorio",
    "Seminuevo",
  ),
  ...createComputerProducts("laptops", "nuevos", "Laptop", "Nueva"),
  ...createComputerProducts("laptops", "seminuevos", "Laptop", "Seminueva"),
];

export const phoneProductConditions = [
  {
    id: "nuevos",
    label: "Nuevos",
    image: "/products/celulares/clnuevo.jpg",
    actionLabel: "Ver celulares nuevos",
  },
  {
    id: "seminuevos",
    label: "Seminuevos",
    image: "/products/celulares/clseminuevo.jpg",
    actionLabel: "Ver celulares seminuevos",
  },
];

const phoneBrands = ["Samsung", "Apple", "Xiaomi", "Motorola", "Honor"];

const createPhoneProducts = (condition, conditionLabel) =>
  phoneBrands.map((brand, index) => {
    const id = `celular-${condition}-${index + 1}`;
    const images = getProductImages(id);

    return {
      id,
      category: "celulares",
      condition,
      brand,
      tag: "Celular",
      name:
        brand === "Samsung" && condition === "nuevos"
          ? "Samsung Galaxy S26 Ultra"
          : `${brand} ${conditionLabel} ${index + 1}`,
      description:
        brand === "Samsung" && condition === "nuevos"
          ? "Samsung Galaxy S26 Ultra, teléfono inteligente Android desbloqueado, 256GB, violeta cobalto | Pantalla de privacidad, Galaxy AI, cámara AI, carga súper rápida 3.0, batería duradera, 2026"
          : `Celular ${conditionLabel.toLowerCase()} preparado para agregar sus características y especificaciones.`,
      price: `Q${(2999 - index * 150).toLocaleString("en-US")}`,
      badge: conditionLabel,
      image: images[0] ?? "",
      images,
    };
  });

export const phoneProducts = [
  ...createPhoneProducts("nuevos", "Nuevo"),
  ...createPhoneProducts("seminuevos", "Seminuevo"),
];

export const products = [
  {
    id: 1,
    category: "computadoras",
    tag: "Laptop",
    name: "Laptop HP ProBook",
    description: "Equipo ideal para trabajo, estudio y tareas de oficina.",
    price: "Q3,850",
    badge: "Disponible",
    image: "",
  },
  {
    id: 2,
    category: "celulares",
    tag: "Smartphone",
    name: "Samsung Galaxy A Series",
    description: "Celular Android con buen rendimiento para uso diario.",
    price: "Q1,650",
    badge: "Nuevo",
  },
  {
    id: 3,
    category: "camaras",
    tag: "Seguridad",
    name: "Kit de cámaras WiFi",
    description: "Sistema de monitoreo para hogar o negocio.",
    price: "Q2,400",
    badge: "Instalación",
  },
  {
    id: 4,
    category: "accesorios",
    tag: "Accesorio",
    name: "Mouse inalámbrico",
    description: "Mouse cómodo, portátil y compatible con laptop o PC.",
    price: "Q95",
    badge: "Popular",
  },
];
