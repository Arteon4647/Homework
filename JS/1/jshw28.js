const data = {
  value1: "value",
  value2: "value",
  value3: "value",
  value4: 10,
  value5: 11,
};

const keys = Object.keys(data);

keys
  .filter((key) => typeof data[key] === "string")
  .forEach((key) => {
    Cookies.set(key, data[key]);
  });

keys
  .filter((key) => typeof data[key] === "number")
  .forEach((key) => {
    Cookies.set(key, data[key], { expires: 1 / 24 });
  });
