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
    mainImage: "/images/main-image.png",
    price: 29.9,
    secondaryImages: [
      {
        id: 1,
        image: "/images/second-image.png",
        alt: "Primeira Imagem",
      },
      {
        id: 2,
        image: "/images/third-image.png",
        alt: "Segunda Imagem",
      },
      {
        id: 3,
        image: "/images/fourth-image.png",
        alt: "Terceira Imagem",
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
