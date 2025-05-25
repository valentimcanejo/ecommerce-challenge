interface ImageList {
  id: string;
  image: string;
  alt: string;
}

interface Size {
  id: string;
  size: string;
}

interface Color {
  id: string;
  color: string;
  hexa: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageList: {
    [key: string]: ImageList[];
  };
  sizeList: Size[];
  colorList: Color[];
}

export const productsList: Product[] = [
  {
    id: "1",
    name: "Camiseta Montink",
    description: `
          A Camiseta da Montink é sinônimo de conforto, estilo e versatilidade. 
          Confeccionada com materiais de alta qualidade, ela oferece um caimento perfeito e toque macio, 
          ideal para o dia a dia. Disponível nas cores branco, azul e verde, e nos tamanhos P, M e G, combina com diversos estilos e ocasiões. 
    `,
    price: 29.9,
    imageList: {
      white: [
        {
          id: "1",
          image: "/images/white/main-image.png",
          alt: "Primeira Imagem",
        },
        {
          id: "2",
          image: "/images/white/second-image.png",
          alt: "Segunda Imagem",
        },
        {
          id: "3",
          image: "/images/white/third-image.png",
          alt: "Terceira Imagem",
        },
        {
          id: "4",
          image: "/images/white/fourth-image.png",
          alt: "Quarta Imagem",
        },
      ],
      blue: [
        {
          id: "1",
          image: "/images/blue/main-image.png",
          alt: "Primeira Imagem",
        },
        {
          id: "2",
          image: "/images/blue/second-image.png",
          alt: "Segunda Imagem",
        },
        {
          id: "3",
          image: "/images/blue/third-image.png",
          alt: "Terceira Imagem",
        },
        {
          id: "4",
          image: "/images/blue/fourth-image.png",
          alt: "Quarta Imagem",
        },
      ],
      green: [
        {
          id: "1",
          image: "/images/green/main-image.png",
          alt: "Primeira Imagem",
        },
        {
          id: "2",
          image: "/images/green/second-image.png",
          alt: "Segunda Imagem",
        },
        {
          id: "3",
          image: "/images/green/third-image.png",
          alt: "Terceira Imagem",
        },
        {
          id: "4",
          image: "/images/green/fourth-image.png",
          alt: "Quarta Imagem",
        },
      ],
    },
    sizeList: [
      {
        id: "1",
        size: "P",
      },
      {
        id: "2",
        size: "M",
      },
      {
        id: "3",
        size: "G",
      },
    ],
    colorList: [
      {
        id: "1",
        color: "branco",
        hexa: "#ffffff",
      },
      {
        id: "2",
        color: "azul",
        hexa: "#86f1ff",
      },
      {
        id: "3",
        color: "verde",
        hexa: "#c0f5c9",
      },
    ],
  },
];
