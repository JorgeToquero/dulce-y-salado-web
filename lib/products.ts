export type Product = {
  name: string;
  description: string;
  image: string;
};

export type ProductCategory = {
  id: string;
  name: string;
  description: string;
  products: Product[];
};

export const productCategories: ProductCategory[] = [
  {
    id: "pan",
    name: "Pan",
    description: "El básico de cada día, en hogazas, barras y panes especiales.",
    products: [
      {
        name: "Hogaza de campo",
        description:
          "Corteza dorada y miga tierna, perfecta para acompañar cualquier comida.",
        image: "/images/productos/pan-hogaza.jpg",
      },
      {
        name: "Barra rústica",
        description:
          "La barra de siempre, con un toque crujiente y un interior esponjoso.",
        image: "/images/productos/pan-barra.jpg",
      },
      {
        name: "Pan de semillas",
        description:
          "Miga compacta con semillas de girasol, calabaza y lino.",
        image: "/images/hero-pan.jpg",
      },
    ],
  },
  {
    id: "bolleria",
    name: "Bollería",
    description: "Piezas de hojaldre y bollería para desayunos y meriendas.",
    products: [
      {
        name: "Croissant de mantequilla",
        description:
          "Hojaldre ligero y crujiente, ideal para el desayuno o la merienda.",
        image: "/images/obrador-croissants.jpg",
      },
      {
        name: "Rollo de canela",
        description:
          "Espiral de masa suave con un aroma cálido a canela y azúcar.",
        image: "/images/productos/rollo-canela.jpg",
      },
    ],
  },
  {
    id: "tortas-y-dulces",
    name: "Tortas y dulces",
    description:
      "Tartas, cupcakes y postres para celebrar o darte un capricho.",
    products: [
      {
        name: "Tarta de chocolate",
        description:
          "Bizcocho de cacao con cobertura de chocolate para los más golosos.",
        image: "/images/productos/tarta-chocolate.jpg",
      },
      {
        name: "Tarta de frutos rojos",
        description: "Capas suaves con nata y frutos rojos frescos.",
        image: "/images/productos/tarta-frutos-rojos.jpg",
      },
      {
        name: "Cupcakes",
        description:
          "Pequeños bocados dulces con crema de mantequilla y decoración de colores.",
        image: "/images/productos/cupcakes.jpg",
      },
    ],
  },
  {
    id: "encargos",
    name: "Encargos",
    description:
      "Tartas personalizadas y mesas dulces para tus celebraciones.",
    products: [
      {
        name: "Tartas personalizadas",
        description:
          "Tartas para cumpleaños, bodas y celebraciones, a tu medida.",
        image: "/images/productos/tarta-celebracion.jpg",
      },
      {
        name: "Mesas dulces",
        description:
          "Una selección de dulces y postres para cumpleaños, bodas y eventos.",
        image: "/images/productos/postre-frutos-rojos.jpg",
      },
    ],
  },
];
