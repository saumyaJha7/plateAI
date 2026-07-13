export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export type Restaurant = {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  priceForTwo: string;
  cuisine: string;
  distance: string;
  description: string;
  menu: MenuItem[];
};

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Pizza Paradise",
    image: "https://picsum.photos/600/400?random=1",
    rating: 4.8,
    deliveryTime: "20-25 mins",
    priceForTwo: "₹200 for two",
    cuisine: "Italian, Pizza",
    distance: "1.8 km",

    description:
      "Authentic wood-fired pizzas made with premium cheese, fresh vegetables and homemade sauces. Loved by pizza enthusiasts across the city.",

    menu: [
      {
        id: "1",
        name: "Margherita Pizza",
        description: "Classic cheese pizza with fresh basil.",
        price: 249,
      },
      {
        id: "2",
        name: "Farmhouse Pizza",
        description: "Loaded with fresh vegetables.",
        price: 329,
      },
      {
        id: "3",
        name: "Pepperoni Pizza",
        description: "Spicy pepperoni with mozzarella.",
        price: 379,
      },
    ],
  },

  {
    id: "2",
    name: "Burger House",
    image: "https://picsum.photos/600/400?random=2",
    rating: 4.6,
    deliveryTime: "18-22 mins",
    priceForTwo: "₹300 for two",
    cuisine: "American, Burgers",
    distance: "2.5 km",

    description:
      "Juicy handcrafted burgers served with crispy fries and refreshing beverages. Perfect for quick cravings.",

    menu: [
      {
        id: "1",
        name: "Classic Veg Burger",
        description: "Fresh lettuce, tomato & cheese.",
        price: 189,
      },
      {
        id: "2",
        name: "Chicken Supreme Burger",
        description: "Grilled chicken with spicy mayo.",
        price: 259,
      },
      {
        id: "3",
        name: "French Fries",
        description: "Crispy salted fries.",
        price: 129,
      },
    ],
  },

  {
    id: "3",
    name: "Chinese Wok",
    image: "https://picsum.photos/600/400?random=3",
    rating: 4.7,
    deliveryTime: "25-30 mins",
    priceForTwo: "₹350 for two",
    cuisine: "Chinese",
    distance: "3.2 km",

    description:
      "Authentic Indo-Chinese dishes cooked in traditional woks with fresh ingredients and bold flavours.",

    menu: [
      {
        id: "1",
        name: "Veg Hakka Noodles",
        description: "Stir-fried noodles with vegetables.",
        price: 219,
      },
      {
        id: "2",
        name: "Chilli Paneer",
        description: "Paneer tossed in spicy sauce.",
        price: 269,
      },
      {
        id: "3",
        name: "Manchurian",
        description: "Crispy vegetable dumplings.",
        price: 249,
      },
    ],
  },
];