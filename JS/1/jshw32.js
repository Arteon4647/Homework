const orders = [
  { item: "Socks", price: 30 },
  { item: "TShirt", price: 20 },
  { item: "Socks", price: 30 },
  { item: "Shorts", price: 70 },
];

// Прибрати дублікати шляхом переведення даних у структуру {item: {item, price}}
//  {"Socks": { item: "Socks", price: 30 }...}

const names = ["Igor", "Nastya", "Oleg", "Max", "Max"];
// Прибрати дублікати (Set)

const mappedOrders = orders.reduce((acc, order) => {
  acc[order.item] = order;

  return acc;
}, {});

console.log(mappedOrders, "mappedOrder");

console.log(Array.from(new Set(names)), "unique names");
