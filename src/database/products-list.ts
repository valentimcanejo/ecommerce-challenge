interface SecondaryImage {
  id: number;
  image: string;
  alt: string;
}

interface Size {
  id: number;
  size: string;
}

interface Color {
  id: number;
  color: string;
  hexa: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  mainImage: string;
  price: number;
  secondaryImages: SecondaryImage[];
  sizeList: Size[];
  colorList: Color[];
}

export const productsList: Product[] = [
  {
    id: 1,
    name: "Camiseta Lisa da Montink",
    description: "Camiseta Lisa da Montink",
    mainImage: "/images/shirt.jpg",
    price: 29.9,
    secondaryImages: [
      {
        id: 1,
        image: "/images/shirt.jpg",
        alt: "Primeira Imagem",
      },
      {
        id: 2,
        image: "/images/shirt.jpg",
        alt: "Segunda Imagem",
      },
      {
        id: 3,
        image: "/images/shirt.jpg",
        alt: "Terceira Imagem",
      },
      {
        id: 4,
        image: "/images/shirt.jpg",
        alt: "Quarta Imagem",
      },
    ],
    sizeList: [
      {
        id: 1,
        size: "P",
      },
      {
        id: 2,
        size: "M",
      },
      {
        id: 3,
        size: "G",
      },
    ],
    colorList: [
      {
        id: 1,
        color: "branco",
        hexa: "#ffffff",
      },
      {
        id: 2,
        color: "preto",
        hexa: "#000000",
      },
      {
        id: 3,
        color: "azul",
        hexa: "#3b82f6",
      },

      {
        id: 4,
        color: "verde",
        hexa: "#22c55e",
      },
      {
        id: 5,
        color: "vermelho",
        hexa: "#ef4444",
      },
    ],
  },
];
