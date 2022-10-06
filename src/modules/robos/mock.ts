import { Item } from "vue3-easy-data-table";

export const mockClientItems = (itemsNumber = 100): Item[] => {
  const mockItems: Item[] = [];
  const sports = ["basketball", "football", "running", "swimming"];
  const fruits = ["banana", "apple", "orange", "peach"];

  for (let i = 1; i < itemsNumber + 1; i += 1) {
    mockItems.push({
      name: `name-${i}`,
      address: `address-${i}`,
      height: i,
      weight: i,
      age: i,
      favouriteSport: sports[i % 4],
      favouriteFruits: fruits[i % 4]
    });
  }
  return mockItems;
};

export const mockItems = [
  {
    id: 1,
    name: "James",
    address: "Cecilia Chapma 711-2880 Nulla St",
    email: "jamesemail@gmail.com",
    age: 28,
    rank: "⭐⭐⭐⭐⭐"
  },
  {
    id: 2,
    name: "Curry",
    address: "Iris WatsonP.O. Box 283 8562 Fusce Rd.",
    email: "curryemail@gmail.com",
    age: 26,
    rank: "⭐⭐⭐⭐⭐"
  },
  {
    id: 3,
    name: "Harden",
    address: "Celeste Slater606-3727 Ullamcorper.",
    email: "hardenemail@gmail.com",
    age: 28,
    rank: "⭐⭐⭐⭐"
  },
  {
    id: 4,
    name: "Durant",
    address: "Theodore LoweAp #867-859 Sit Rd.",
    email: "durantemail@gmail.com",
    age: 27,
    rank: "⭐⭐⭐⭐⭐"
  },
  {
    id: 5,
    name: "Paul",
    address: "Calista Wise7292 Dictum Av.",
    email: "paulsemail@gmail.com",
    age: 30,
    rank: "⭐⭐⭐⭐"
  },
  {
    id: 6,
    name: "Butler",
    address: "Kyla OlsenAp #651-8679 Sodales Av.",
    email: "butleremail@gmail.com",
    age: 26,
    rank: "⭐⭐⭐⭐"
  },
  {
    id: 7,
    name: "Tatum",
    address: "Forrest Ray191-103 Integer Rd.",
    email: "tatumemail@gmail.com",
    age: 24,
    rank: "⭐⭐⭐⭐"
  },
  {
    id: 8,
    name: "Tompson",
    address: "Hiroko PotterP.O. Box 887 2508 Dolor. Av.",
    email: "tompsonemail@gmail.com",
    age: 29,
    rank: "⭐⭐⭐⭐⭐"
  }
];
