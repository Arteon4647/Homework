const message = "Hello";
let times = 0;
function repeat(message, times) {
  // опишіть функцію repeat так, щоб вона виводила message [times] разів (while)

  while (times < 5) {
    console.log(message);
    times = times + 1;
  }
  
}

repeat("Hello", 5);

// Дано

function getMonthsOf(season) {
  const month = "September";

  switch (month) {
    case "June":
    case "July":
    case "August":
      console.log("summer");
      break;

    case "September":
    case "October":
    case "November":
      console.log("autumn");
      break;

    case "December":
    case "January":
    case "February":
      console.log("winter");
      break;

    case "March":
    case "April":
    case "May":
      console.log("spring");
      break;
  }
  // опишіть функцію getMonthsOf, яка залежно від пори року
  // (winter, summer, autumnm, spring) поверне її місяці як строку (switch-case)
}

getMonthsOf("summer"); // -> June, July, August
