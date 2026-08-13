import { addProductIdentifiers } from "./productIdentifiers.js";

const brands = ["HP", "Dell", "Lenovo", "Acer", "ASUS"];
const prices = ["Q3,850", "Q3,675", "Q3,500", "Q3,325", "Q3,150"];

const computerGroups = [
  { type: "escritorio", condition: "nuevos", label: "Escritorio Nuevo" },
  { type: "escritorio", condition: "seminuevos", label: "Escritorio Seminuevo" },
  { type: "laptops", condition: "nuevos", label: "Laptop Nueva" },
  { type: "laptops", condition: "seminuevos", label: "Laptop Seminueva" },
];

export const computerProducts = computerGroups.flatMap((group, groupIndex) =>
  brands.map((brand, brandIndex) => {
    const productNumber = groupIndex * brands.length + brandIndex + 1;
    const id = `pc-${String(productNumber).padStart(4, "0")}`;
    const images = [];

    return addProductIdentifiers({
      id,
      category: "computadoras",
      type: group.type,
      condition: group.condition,
      brand,
      model: `${group.label} ${brandIndex + 1}`,
      tag: group.type === "laptops" ? "Laptop" : "Escritorio",
      name: `${brand} ${group.label}`,
      price: prices[brandIndex],
      description: `${brand} ${group.label.toLowerCase()} preparada para agregar su información real.`,
      badge: group.condition === "nuevos" ? "Nuevo" : "Seminuevo",
      images,
      image: images[0] ?? "",
    });
  }),
);
