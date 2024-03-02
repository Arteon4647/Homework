const o1 = { a: 1, b: 2, c: 3 };
const o2 = { a: 1, d: 4 };

// виведіть за допомогою циклу всі спільні ключі о1 та о2 (in)

function Same(o1, o2) {
  for (const key in o1) {
    if (o2.hasOwnProperty(key)) {
      console.log(key);
    }
  }
}
Same(o1, o2);
