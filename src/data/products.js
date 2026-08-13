import { addProductIdentifiers } from "./productIdentifiers.js";

export { computerProducts } from "./computerProducts.js";
export { phoneProducts } from "./phoneProducts.js";

export const categories = [
  { id: "todos", label: "Todos" },
  { id: "computadoras", label: "Computadoras" },
  { id: "celulares", label: "Celulares" },
  { id: "camaras", label: "Cámaras" },
  { id: "accesorios", label: "Accesorios" },
];

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
export const phoneProductConditions = [
  {
    id: "nuevos",
    label: "Nuevos",
    image: "/products/celulares/clnuevo.jpg",
    imageFit: "cover",
    actionLabel: "Ver celulares nuevos",
  },
  {
    id: "seminuevos",
    label: "Seminuevos",
    image: "/products/celulares/clseminuevo.jpg",
    imageFit: "cover-seminuevo",
    actionLabel: "Ver celulares seminuevos",
  },
];

export const products = [
  addProductIdentifiers({
    id: "cam-0001",
    category: "camaras",
    brand: "Genérica",
    model: "Kit cámaras WiFi",
    tag: "Seguridad",
    name: "Kit de cámaras WiFi",
    description: "Sistema de monitoreo para hogar o negocio.",
    price: "Q2,400",
    badge: "Instalación",
  }),
  addProductIdentifiers({
    id: "acc-0001",
    category: "accesorios",
    brand: "Genérica",
    model: "Mouse inalámbrico",
    tag: "Accesorio",
    name: "Mouse inalámbrico",
    description: "Mouse cómodo, portátil y compatible con laptop o PC.",
    price: "Q95",
    badge: "Popular",
  }),
];
