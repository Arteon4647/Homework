const arr = ["Oleg", "Maxim", "Katerina", "Igor", "Vladislav"];

// За допомогою методу splice:

// 1. Приберіть перших два елемента масива
// 2. Помінятйе місцями “Igor” та “Vladislav”

arr.splice(0, 2);
console.log(arr);

arr.push(arr[1]);
arr.splice(1, 1);
console.log(arr);