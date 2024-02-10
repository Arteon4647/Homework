// Дано
function calculation() {
  const x = 10;
  const y = 1;
  const z = 50;

  const awrg = (x + y + z) / 3;

  if ((x, y, z) > 0) {
    console.log(awrg);
  } else if ((x, y, z) < 0) {
    console.log(x);
  } else if ((x || y || z) === undefined) {
    console.log(`Invalid calculation`);
  }

  // якщо всі числа більше за нуль - виведіть середнє арифметичне
  // якщо хоча б одне з чисел відсутнє (undefined) - виведіть "Invalid calculation"
  // якщо всі числа від`ємні - виведіть лише X
}
calculation ();

// Дано
const data = undefined;
const backup = {};

function checkData() {

    if (data === undefined) {
        console.log(backup);
    } else if (data === true) {
        console.log(`${backup}`);
    }
  // якщо дані undefined - виведіть backup, якщо ж дані є - зaпишіть їх у backup
  // та виведіть
}
