// Завдання: опрацюйте логіку таймеру, додавши вивід мілесекунд (hh:mm:ss:msms).
// Оновлюйте таймер кожні 500 мілесекунд замість 1000

const date = new Date();

const fixedTimeValue = (value) => {
  const stringedValue = `${value}`;

  if (stringedValue.length < 2) {
    return `0${stringedValue}`;
  } else {
    return stringedValue;
  }
};

setInterval(() => {
  date.setSeconds(date.getSeconds() + 1);
  // Вивести лише hh:mm:ss
  // Забезпечити виведення 0 якщо в одиниці часу є лише одна цифра
  //  20:1:22  => 20:01:22
  //  20:11:22 => 20:11:22

  const [hours, minutes, seconds, milliseconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds(),
  ];

  console.log(`${fixedTimeValue(hours)}:${fixedTimeValue(minutes)}:${fixedTimeValue(seconds)}:${fixedTimeValue(milliseconds)}`);
}, 500);
