// Завдання

function findCharactersQuantity(str, char) {
  // функція має рахувати кількість символів char у строці str

  let counter = 0;

  for (const chr of str) {
    if (chr === char) {
      counter = counter + 1;
    }
  }

  return counter;
}
console.log(findCharactersQuantity("a a a", "a"));

function encryption(str) {
  // функція має замініти у str:
  // кожну літеру а на :
  // кожну літеру b на -
  // кожну літеру с на !
  // for - of , switch - case

  let result = "";

  for (const char of str) {
    switch (char) {
      case "a":
        result = result.concat(":");
        break;
      case "b":
        result = result.concat("-");
        break;
      case "c":
        result = result.concat("!");
        break;
      default:
        result = result.concat(char);
    }
  }

  return result;
}

console.log(encryption("abc"));
console.log(encryption("abcd"));
