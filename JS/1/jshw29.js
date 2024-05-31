const user = {
  name: "Oleg",
  age: 26,
  position: "Middle web Developer",
};

// Створити Promise, що повератє дані корстувача через 3 секунди
// Отримавши данні цього Promise описати логіку збереження даних у LS
// Описати 1 Promise з відмовою (rej) - відловити відмову методом catch

new Promise((res) => {
  setTimeout(() => {
    res(user);
    console.log(user);
  }, 3000);
}).then((userData) => localStorage.setItem("user", JSON.stringify(userData)));

new Promise((res, rej) => rej("error")).catch((err) => console.log(err));
