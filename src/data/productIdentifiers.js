const normalizeText = (value = "") =>
  String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

export const createSlug = (...parts) =>
  normalizeText(parts.filter(Boolean).join(" "))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const createCode = (value, length = 4) =>
  normalizeText(value)
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, length) || "GEN";

export const createSku = ({
  category,
  brand,
  model,
  storage,
  color,
  condition,
}) => {
  const categoryCodes = {
    celulares: "PH",
    computadoras: "PC",
    camaras: "CAM",
    accesorios: "ACC",
  };
  const conditionCodes = { nuevos: "N", seminuevos: "S" };

  return [
    categoryCodes[category] ?? "PRD",
    createCode(brand, 3),
    createCode(model, 6),
    storage ? createCode(storage, 5) : null,
    color ? createCode(color, 4) : null,
    conditionCodes[condition] ?? null,
  ]
    .filter(Boolean)
    .join("-");
};

export const addProductIdentifiers = (product) => {
  const slug = createSlug(
    product.brand,
    product.model ?? product.name,
    product.storage,
    product.color,
    product.condition,
  );

  return {
    ...product,
    slug,
    sku: createSku(product),
  };
};
