function repeat(message, times) {
  // опишіть функцію repeat так, щоб вона виводила message [times] разів (while)
let counter = 0;
  while (counter < times) {
    console.log(message);
    counter = counter + 1;
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
