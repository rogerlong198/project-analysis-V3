import type { Product, Additional, Review } from "./types"

export const products: Product[] = [
  // COMBOS FOLIA (ofertas - cards grandes) - Cervejas em destaque
  {
    id: "1",
    name: "Skol Beats Senses Long Neck 313ml",
    description: "Bebida mista citrica refrescante em long neck",
    price: 3.69,
    originalPrice: 5.79,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/Imagem1_48f492cc-7d6d-42d2-8a0b-2c342bee977d.jpg?v=1769486797",
    category: "ofertas",
    stock: 50,
    minQuantity: 12,
    includes: ["1 garrafa de 313ml"],
    accompaniments: []
  },
  {
    id: "2",
    name: "Heineken 330ml",
    description: "Cerveja puro malte premium em long neck",
    price: 3.63,
    originalPrice: 5.79,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/178.jpg?v=1769486884",
    category: "ofertas",
    stock: 50,
    minQuantity: 12,
    includes: ["1 garrafa de 330ml"],
    accompaniments: []
  },
  {
    id: "3",
    name: "Cerveja Brahma Chopp 550ml",
    description: "A cerveja numero 1 do Brasil em versao chopp gelado",
    price: 2.39,
    originalPrice: 5.79,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/imgi_1_image_2.jpg?v=1769487731",
    category: "ofertas",
    stock: 50,
    minQuantity: 12,
    includes: ["1 lata de 550ml"],
    accompaniments: []
  },
  {
    id: "4",
    name: "Cerveja Brahma Duplo Malte 350ml",
    description: "Cerveja com duplo malte para um sabor mais encorpado",
    price: 2.49,
    originalPrice: 4.09,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/imgi_1_image_3.jpg?v=1769488266",
    category: "ofertas",
    stock: 50,
    minQuantity: 12,
    includes: ["1 lata de 350ml"],
    accompaniments: []
  },
  {
    id: "5",
    name: "Amstel Cerveja 473ml",
    description: "Cerveja puro malte com sabor equilibrado e refrescante",
    price: 3.20,
    originalPrice: 5.79,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/amstel_1fe3b8f0-2cb6-44e5-8f8e-7ea7b3835e70.jpg?v=1769489135",
    category: "ofertas",
    stock: 50,
    includes: ["1 lata de 473ml"],
    accompaniments: []
  },
  {
    id: "47",
    name: "Kit Cerveja Heineken 350ml (24 unidades)",
    description: "Kit completo com 24 latas de Heineken geladas",
    price: 59.76,
    originalPrice: 76.80,
    image: "https://cdn.shopify.com/s/files/1/0709/6211/8725/files/kit-cerveja-heineken-350ml-sleek-com-24-unidades-1.jpg?v=1769119703",
    category: "ofertas",
    badge: "ECONOMIA",
    stock: 8,
    includes: ["24 latas de 350ml", "Cerveja puro malte"],
    accompaniments: []
  },
  {
    id: "48",
    name: "Whisky Johnnie Walker Red Label 750ml + 6 Tonicas",
    description: "Kit whisky com tonicas Schweppes Citrus para drinks",
    price: 69.90,
    originalPrice: 90.93,
    image: "https://cdn.shopify.com/s/files/1/0709/6211/8725/files/whisky-johnnie-walker-red-label-750-ml---6-tonicas-schweppes-citrus-lata-350-ml-1.jpg?v=1769119720",
    category: "ofertas",
    badge: "KIT DRINK",
    stock: 6,
    includes: ["1 Whisky 750ml", "6 Tonicas 350ml"],
    accompaniments: ["Gelo", "Limao"]
  },

  // CERVEJAS (cervejas)
  {
    id: "24",
    name: "Amstel Cerveja 473ml",
    description: "Cerveja puro malte com sabor equilibrado e refrescante",
    price: 3.20,
    originalPrice: 5.79,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/amstel_1fe3b8f0-2cb6-44e5-8f8e-7ea7b3835e70.jpg?v=1769489135",
    category: "cervejas",
    includes: ["1 lata de 473ml"],
    accompaniments: []
  },
  {
    id: "25",
    name: "Cerveja Corona Coronita Extra Lager 6un 210ml",
    description: "Cerveja Corona classica, gelada e com uma fatia de limao. American Lager premium",
    price: 27.90,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/91064246b383f2d443f79f23bf15ce02.webp?v=1769488518",
    category: "cervejas",
    badge: "PACK 6UN",
    includes: ["6 garrafas de 210ml"],
    accompaniments: ["Limao"]
  },
  {
    id: "26",
    name: "Skol Beats Senses 6un 313ml",
    description: "Bebida mista com base de cerveja, sabor citrico e refrescante. Otima para festas",
    price: 27.90,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/a4f48483bbab465a4304ef1886d372ef.jpg?v=1769488484",
    category: "cervejas",
    badge: "PACK 6UN",
    includes: ["6 garrafas de 313ml"],
    accompaniments: []
  },
  {
    id: "27",
    name: "Cerveja Brahma Duplo Malte 350ml",
    description: "Cerveja com duplo malte para um sabor mais encorpado",
    price: 2.49,
    originalPrice: 4.09,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/imgi_1_image_3.jpg?v=1769488266",
    category: "cervejas",
    minQuantity: 12,
    includes: ["1 lata de 350ml"],
    accompaniments: []
  },
  {
    id: "28",
    name: "Cerveja Brahma Chopp 550ml",
    description: "A cerveja numero 1 do Brasil em versao chopp gelado",
    price: 2.39,
    originalPrice: 5.79,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/imgi_1_image_2.jpg?v=1769487731",
    category: "cervejas",
    minQuantity: 12,
    includes: ["1 lata de 550ml"],
    accompaniments: []
  },
  {
    id: "29",
    name: "Cerveja Amstel Sleek 350ml",
    description: "Amstel em lata sleek, pratica e gelada",
    price: 2.49,
    originalPrice: 3.79,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/imgi_1_image.jpg?v=1769487611",
    category: "cervejas",
    minQuantity: 12,
    includes: ["1 lata de 350ml"],
    accompaniments: []
  },
  {
    id: "30",
    name: "Cerveja Antarctica Original Pilsen 473ml",
    description: "Cerveja pilsen tradicional brasileira",
    price: 3.28,
    originalPrice: 5.79,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/Imagem10_6a8b2fe1-e2f2-4a51-b38f-7d74c52e4409.png?v=1769486965",
    category: "cervejas",
    minQuantity: 12,
    includes: ["1 lata de 473ml"],
    accompaniments: []
  },
  {
    id: "31",
    name: "Cerveja Stella Artois 473ml",
    description: "Cerveja belga premium com sabor sofisticado",
    price: 3.34,
    originalPrice: 5.79,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/Imagem2_2dec00d2-02d8-4491-81b4-c9984891e735.png?v=1769486961",
    category: "cervejas",
    minQuantity: 12,
    includes: ["1 lata de 473ml"],
    accompaniments: []
  },
  {
    id: "32",
    name: "Heineken 600ml",
    description: "Cerveja puro malte premium em garrafa grande",
    price: 3.47,
    originalPrice: 5.79,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/619615-Cerveja-Heineken-650ml.jpg?v=1769486957",
    category: "cervejas",
    includes: ["1 garrafa de 600ml"],
    accompaniments: []
  },
  {
    id: "33",
    name: "Skol Puro Malte 473ml",
    description: "Cerveja puro malte da Skol, sabor leve e refrescante",
    price: 2.49,
    originalPrice: 4.09,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/Imagem30_e34272cf-8fa3-44d9-a034-ebf962b4a4fc.png?v=1769486952",
    category: "cervejas",
    minQuantity: 12,
    includes: ["1 lata de 473ml"],
    accompaniments: []
  },
  {
    id: "34",
    name: "Heineken 330ml",
    description: "Cerveja puro malte premium em long neck",
    price: 3.63,
    originalPrice: 5.79,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/178.jpg?v=1769486884",
    category: "cervejas",
    minQuantity: 12,
    includes: ["1 garrafa de 330ml"],
    accompaniments: []
  },
  {
    id: "35",
    name: "Itaipava 473ml",
    description: "Cerveja pilsen brasileira refrescante",
    price: 2.49,
    originalPrice: 4.10,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/Imagem13_b38c8601-04cc-4b51-aa4e-be8aa6dba3fa.jpg?v=1769486878",
    category: "cervejas",
    minQuantity: 12,
    includes: ["1 lata de 473ml"],
    accompaniments: []
  },
  {
    id: "36",
    name: "Budweiser 473ml",
    description: "Cerveja americana premium, sabor marcante",
    price: 2.53,
    originalPrice: 5.79,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/budw.jpg?v=1769486864",
    category: "cervejas",
    minQuantity: 12,
    includes: ["1 lata de 473ml"],
    accompaniments: []
  },
  {
    id: "37",
    name: "Corona 330ml - Pack 6 garrafas",
    description: "Pack com 6 garrafas da classica cerveja mexicana",
    price: 19.19,
    originalPrice: 24.14,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/cerveja_corona_2_1.jpg?v=1769486848",
    category: "cervejas",
    badge: "PROMO",
    includes: ["6 garrafas de 330ml"],
    accompaniments: ["Limao"]
  },
  {
    id: "38",
    name: "Skol Beats Senses Long Neck 313ml",
    description: "Bebida mista citrica refrescante em long neck",
    price: 3.69,
    originalPrice: 5.79,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/Imagem1_48f492cc-7d6d-42d2-8a0b-2c342bee977d.jpg?v=1769486797",
    category: "cervejas",
    minQuantity: 12,
    includes: ["1 garrafa de 313ml"],
    accompaniments: []
  },
  {
    id: "39",
    name: "Red Bull Energy Drink 250ml - 4 unidades",
    description: "Red Bull te da asas! Energetico com cafeina, taurina e vitaminas do grupo B",
    price: 11.90,
    originalPrice: 33.96,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/352bc8bb94367ea49ebf312bf24bf842.jpg?v=1769488562",
    category: "combinados",
    badge: "PACK 4UN",
    includes: ["4 latas de 250ml"],
    accompaniments: []
  },

  // DESTILADOS E DRINKS FORTES (queridinhos)
  {
    id: "49",
    name: "Gin + Combo Melancia 1L (6 unidades)",
    description: "Gin com sabor melancia, refrescante e pronto para beber. Teor alcoolico 8%",
    price: 38.43,
    originalPrice: 54.90,
    image: "https://cdn.shopify.com/s/files/1/0709/6211/8725/files/img-20250113-wa0056-2aa5040058fbde1f4a17367909276814-1024-1024.webp?v=1769120814",
    category: "queridinhos",
    badge: "-30%",
    includes: ["6 garrafas de 1L", "Sabor melancia", "Pronto para beber"],
    accompaniments: ["Gelo", "Limao"]
  },
  {
    id: "50",
    name: "Vodka + Combo 1L (6 unidades)",
    description: "Vodka com sabor energetico, equilibrio perfeito entre diversao e sabor. Teor alcoolico 8%",
    price: 38.43,
    originalPrice: 54.90,
    image: "https://cdn.shopify.com/s/files/1/0709/6211/8725/files/img-20250113-wa0057-9481b9342d5d4a5dac17367908987407-1024-1024.webp?v=1769120804",
    category: "queridinhos",
    badge: "-30%",
    includes: ["6 garrafas de 1L", "Sabor energetico", "Pronto para beber"],
    accompaniments: ["Gelo"]
  },
  {
    id: "51",
    name: "Whisky + Combo 1L (6 unidades)",
    description: "Whisky com toque energetico, sabor marcante. Teor alcoolico 8%",
    price: 38.43,
    originalPrice: 54.90,
    image: "https://cdn.shopify.com/s/files/1/0709/6211/8725/files/img-20250113-wa0055-b81be437b87f0596c317367908684473-1024-1024.webp?v=1769120795",
    category: "queridinhos",
    badge: "-30%",
    includes: ["6 garrafas de 1L", "Sabor energetico", "Pronto para beber"],
    accompaniments: ["Gelo"]
  },
  {
    id: "52",
    name: "Whisky + Combo Double Darkness 1L (6 unidades)",
    description: "Versao mais intensa com teor alcoolico elevado. Teor alcoolico 10%",
    price: 38.43,
    originalPrice: 54.90,
    image: "https://cdn.shopify.com/s/files/1/0709/6211/8725/files/whisky-combo-double-darkness-50c0b27f9d998c5fad17545763653107-1024-1024.webp?v=1769120801",
    category: "queridinhos",
    badge: "-30%",
    includes: ["6 garrafas de 1L", "Sabor intenso", "10% alcool"],
    accompaniments: ["Gelo"]
  },
  {
    id: "53",
    name: "Whisky + Combo Job 1L (6 unidades)",
    description: "Whisky pronto para beber com sabor energetico",
    price: 38.43,
    originalPrice: 54.90,
    image: "https://cdn.shopify.com/s/files/1/0709/6211/8725/files/whisky-combo-job-1l-b479a979fd3eb2d80b17654683945967-1024-1024.webp?v=1769120808",
    category: "queridinhos",
    badge: "-30%",
    includes: ["6 garrafas de 1L", "Pronto para beber"],
    accompaniments: ["Gelo"]
  },
  {
    id: "40",
    name: "Tanqueray Gin Export Strength 750ml",
    description: "Gin premium London Dry com sabor classico e equilibrado",
    price: 69.90,
    originalPrice: 187.90,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/Imagem12_544c77a0-e504-46d6-8b76-9ca806a0e094.jpg?v=1769489300",
    category: "queridinhos",
    includes: ["1 garrafa de 750ml"],
    accompaniments: ["Gelo", "Tonica", "Limao"]
  },
  {
    id: "41",
    name: "Whisky Jack Daniel's 1L",
    description: "Whisky americano Tennessee, suave e com notas de caramelo e baunilha",
    price: 54.90,
    originalPrice: 188.89,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/082184090442_WHISKEY-JACK-DANIELS_02_novas.jpg?v=1769489303",
    category: "queridinhos",
    includes: ["1 garrafa de 1L"],
    accompaniments: ["Gelo", "Coca-Cola"]
  },
  {
    id: "42",
    name: "Campari 900ml",
    description: "Aperitivo italiano amargo, ideal para drinks como Negroni e Americano",
    price: 49.90,
    originalPrice: 70.49,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/318_campari_900ml.png?v=1769489310",
    category: "queridinhos",
    includes: ["1 garrafa de 900ml"],
    accompaniments: ["Gelo", "Laranja", "Tonica"]
  },
  {
    id: "43",
    name: "Smirnoff Ice Long Neck 275ml",
    description: "Bebida mista de vodka com sabor citrico, refrescante e pronta para beber",
    price: 6.99,
    originalPrice: 9.15,
    image: "https://cdn.shopify.com/s/files/1/0800/7050/8802/files/Imagem5_673c05aa-8507-43fa-8ec5-2035a65312a4.png?v=1769489390",
    category: "queridinhos",
    includes: ["1 garrafa de 275ml"],
    accompaniments: []
  },
  {
    id: "8",
    name: "Rum Montilla Carta Ouro 1L",
    description: "Rum com paladar levemente adocicado, notas de frutas secas e mel. 38%",
    price: 29.90,
    originalPrice: 37.89,
    image: "https://cdn.shopify.com/s/files/1/0709/6211/8725/files/rum-montilla-carta-ouro-1-l-1.jpg?v=1769124338",
    category: "queridinhos",
    includes: ["1 garrafa de 1L", "Envelhecido em carvalho"],
    accompaniments: ["Gelo", "Coca-Cola"]
  },
  {
    id: "9",
    name: "Vodka Absolut Vanilia 750ml",
    description: "Vodka com notas de caramelo e chocolate amargo. 38%",
    price: 49.90,
    originalPrice: 99.99,
    image: "https://cdn.shopify.com/s/files/1/0709/6211/8725/files/vodka-absolut-vanilia---750-ml-1.jpg?v=1769119757",
    category: "queridinhos",
    includes: ["1 garrafa de 750ml", "Sabor baunilha"],
    accompaniments: ["Gelo", "Café"]
  },
  {
    id: "10",
    name: "Whisky Chivas Regal 12 Anos 750ml",
    description: "Blend suave com aroma de maçã, mel e baunilha. 40%",
    price: 59.90,
    originalPrice: 89.99,
    image: "https://cdn.shopify.com/s/files/1/0709/6211/8725/files/whisky-chivas-regal-escoces-12-anos-750-ml-1.jpg?v=1769119744",
    category: "queridinhos",
    includes: ["1 garrafa de 750ml", "12 anos de maturação"],
    accompaniments: ["Gelo"]
  },
  {
    id: "11",
    name: "Whiskey Jameson Irlandês 750ml",
    description: "Whiskey triplamente destilado, suave e aromático. 40%",
    price: 54.90,
    originalPrice: 89.99,
    image: "https://cdn.shopify.com/s/files/1/0709/6211/8725/files/whiskey-jameson-irlandes---750-ml-1.jpg?v=1769119732",
    category: "queridinhos",
    includes: ["1 garrafa de 750ml", "Envelhecido 4+ anos"],
    accompaniments: ["Gelo", "Ginger Ale"]
  },
  {
    id: "12",
    name: "Whisky Johnnie Walker Red Label 1L",
    description: "Sabor intenso e vigoroso, ideal para drinks. 40%",
    price: 59.90,
    originalPrice: 89.90,
    image: "https://cdn.shopify.com/s/files/1/0709/6211/8725/files/whisky-johnnie-walker-red-label-1-l-1.jpg?v=1769119712",
    category: "queridinhos",
    includes: ["1 garrafa de 1L", "Blend escocês"],
    accompaniments: ["Gelo", "Água de coco"]
  },

  // ENERGETICOS (combinados)
  {
    id: "13",
    name: "Energético Baly Melancia Lata 473ml",
    description: "Energético refrescante sabor melancia com cafeína e taurina",
    price: 5.89,
    image: "https://cdn.shopify.com/s/files/1/0709/6211/8725/files/energetico-baly-melancia-lata-473ml-1.jpg?v=1769120715",
    category: "combinados",
    includes: ["1 lata de 473ml"],
    accompaniments: []
  },
  {
    id: "14",
    name: "Energético Baly Morango e Pêssego 473ml",
    description: "Sabor morango com pêssego, delicioso e energizante",
    price: 5.89,
    image: "https://cdn.shopify.com/s/files/1/0709/6211/8725/files/energetico-de-morango-e-pessego-baly-473ml-1.jpg?v=1769120711",
    category: "combinados",
    includes: ["1 lata de 473ml"],
    accompaniments: []
  },
  {
    id: "15",
    name: "Energético Baly Melancia Sem Açúcar 473ml",
    description: "Versão sem açúcar do sabor melancia",
    price: 5.89,
    image: "https://cdn.shopify.com/s/files/1/0709/6211/8725/files/energetico-baly-melancia-sem-acucar-lata-473ml-1.jpg?v=1769120706",
    category: "combinados",
    includes: ["1 lata de 473ml", "Zero açúcar"],
    accompaniments: []
  },
  {
    id: "16",
    name: "Energético Baly Maçã Verde 473ml",
    description: "Sabor maçã verde refrescante com cafeína e taurina",
    price: 5.89,
    image: "https://cdn.shopify.com/s/files/1/0709/6211/8725/files/energetico-baly-brasil-sabor-maca-verde-lata-473ml-1.jpg?v=1769120702",
    category: "combinados",
    includes: ["1 lata de 473ml"],
    accompaniments: []
  },
  {
    id: "17",
    name: "Energético Baly Maçã Verde 2L",
    description: "Garrafa grande de energético maçã verde",
    price: 7.40,
    originalPrice: 12.39,
    image: "https://cdn.shopify.com/s/files/1/0709/6211/8725/files/energetico-maca-verde-baly-garrafa-2l-1.jpg?v=1769120698",
    category: "combinados",
    includes: ["1 garrafa de 2L"],
    accompaniments: []
  },
  {
    id: "18",
    name: "Energético Baly Tropical 2L",
    description: "Garrafa grande de energético sabor tropical",
    price: 7.40,
    originalPrice: 12.39,
    image: "https://cdn.shopify.com/s/files/1/0709/6211/8725/files/energetico-tropical-baly-garrafa-2-l-1.jpg?v=1769120692",
    category: "combinados",
    includes: ["1 garrafa de 2L"],
    accompaniments: []
  },
  {
    id: "19",
    name: "Energético Baly Melancia 2L",
    description: "Garrafa grande de energético sabor melancia",
    price: 7.40,
    originalPrice: 12.39,
    image: "https://cdn.shopify.com/s/files/1/0709/6211/8725/files/energetico-melancia-baly-garrafa-2-l-1.jpg?v=1769120688",
    category: "combinados",
    includes: ["1 garrafa de 2L"],
    accompaniments: []
  },

  // REFRIGERANTES (temaki)
  {
    id: "20",
    name: "Guaraná Antarctica Sem Açúcar 1,5L",
    description: "O mesmo sabor original do Brasil, agora sem açúcar",
    price: 5.99,
    image: "https://cdn.shopify.com/s/files/1/0709/6211/8725/files/refrigerante-guarana-antarctica-sem-acucar-garrafa-15l-1.jpg?v=1769124335",
    category: "temaki",
    includes: ["1 garrafa de 1,5L", "Zero açúcar"],
    accompaniments: []
  },
  {
    id: "21",
    name: "Guaraná Antarctica Sem Açúcar Lata 350ml",
    description: "Guaraná feito com fruto da Amazônia, sem açúcar",
    price: 3.09,
    image: "https://cdn.shopify.com/s/files/1/0709/6211/8725/files/refrigerante-guarana-antarctica-sem-acucar-lata-350ml-1.jpg?v=1769124330",
    category: "temaki",
    includes: ["1 lata de 350ml", "Zero açúcar"],
    accompaniments: []
  },
  {
    id: "22",
    name: "Guaraná Antarctica Lata 350ml",
    description: "O clássico guaraná brasileiro com sabor único",
    price: 3.59,
    image: "https://cdn.shopify.com/s/files/1/0709/6211/8725/files/refrigerante-guarana-antarctica-350ml-1.jpg?v=1769124326",
    category: "temaki",
    includes: ["1 lata de 350ml"],
    accompaniments: []
  },

  // GELINHOS (poke)
  {
    id: "23",
    name: "Gelo Para Drink Limão Coco Leve 190g",
    description: "Gelo saborizado para deixar seu drink ainda mais especial",
    price: 3.19,
    image: "https://cdn.shopify.com/s/files/1/0709/6211/8725/files/Gelo-Para-Drink-Limao-Coco-Leve-190g.jpg?v=1769119762",
    category: "poke",
    includes: ["1 pacote de 190g", "Sabor limão com coco"],
    accompaniments: []
  }
]

export const additionals: Additional[] = [
  { id: "a1", name: "Gelo Extra 1kg", quantity: "1 un", price: 0, freeOnFirstOrder: true },
  { id: "a2", name: "Copos Descartáveis", quantity: "10 un", price: 0, freeOnFirstOrder: true },
  { id: "a3", name: "Limão Fatiado", quantity: "1 un", price: 0, freeOnFirstOrder: true },
  { id: "a4", name: "Canudo Biodegradável", quantity: "5 un", price: 0, freeOnFirstOrder: true },
  { id: "a5", name: "Guardanapos", quantity: "20 un", price: 0, freeOnFirstOrder: true },
  { id: "a6", name: "Saco Térmico", quantity: "1 un", price: 0, freeOnFirstOrder: true },
]

export const reviews: Review[] = [
  { id: "r1", name: "Carlos M.", rating: 5, comment: "Bebida gelada e entrega rápida! Salvou a festa.", date: "2 dias atrás" },
  { id: "r2", name: "Ana Paula S.", rating: 5, comment: "Preços muito bons e chegou super rápido!", date: "3 dias atrás" },
  { id: "r3", name: "Henrique L.", rating: 5, comment: "Sempre peço aqui pro churrasco. Recomendo!", date: "5 dias atrás" },
  { id: "r4", name: "Marcia F.", rating: 4, comment: "Ótima variedade de bebidas. Voltarei a comprar.", date: "1 semana atrás" },
  { id: "r5", name: "Roberto N.", rating: 5, comment: "Kit Heineken pelo melhor preço da região!", date: "1 semana atrás" },
  { id: "r6", name: "Juliana C.", rating: 5, comment: "Atendimento top e entrega antes do previsto.", date: "2 semanas atrás" },
]

export const categories = [
  { id: "ofertas", name: "Combos Folia" },
  { id: "cervejas", name: "Cervejas" },
  { id: "queridinhos", name: "Destilados e Drinks Fortes" },
  { id: "combinados", name: "Energeticos" },
  { id: "temaki", name: "Refrigerantes" },
  { id: "poke", name: "Gelinhos" },
]
