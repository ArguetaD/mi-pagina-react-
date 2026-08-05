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
const createComputerProducts = (type, condition, typeLabel, conditionLabel) =>
  Array.from({ length: 5 }, (_, index) => ({
    id: `${type}-${condition}-${index + 1}`,
    type,
    condition,
    tag: typeLabel,
    name: `${typeLabel} ${conditionLabel} ${index + 1}`,
    description: `Equipo ${conditionLabel.toLowerCase()} preparado para agregar sus características y especificaciones.`,
    price: "Consultar",
    badge: conditionLabel,
    image: "",
  }));

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
