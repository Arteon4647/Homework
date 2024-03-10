const array = ["user", "guest", "admin", "anonim"];

// 1. Порахуйте суму індексів адміна та юзера, помножену на довжину масиву
// 2. Перетворіть весь масив на масив, слова якого починаються з великої літери

console.log((array.indexOf("user") + array.indexOf("admin")) * array.length);

for (const element of array) {
  console.log(`${element[0].toUpperCase()}${element.slice(1)}`);
}
