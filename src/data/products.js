export { computerProducts } from "./computerProducts";
export { phoneProducts } from "./phoneProducts";

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
  {
    id: "cam-0001",
    slug: "kit-camaras-wifi",
    sku: "CAM-WIFI-001",
    category: "camaras",
    tag: "Seguridad",
    name: "Kit de cámaras WiFi",
    description: "Sistema de monitoreo para hogar o negocio.",
    price: "Q2,400",
    badge: "Instalación",
  },
  {
    id: "acc-0001",
    slug: "mouse-inalambrico",
    sku: "ACC-MOU-001",
    category: "accesorios",
    tag: "Accesorio",
    name: "Mouse inalámbrico",
    description: "Mouse cómodo, portátil y compatible con laptop o PC.",
    price: "Q95",
    badge: "Popular",
  },
];
