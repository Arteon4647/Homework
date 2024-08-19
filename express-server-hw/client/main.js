fetch("http://localhost:7777/users")
  .then((res) => res.json())
  .then((users) => console.log(users))
  .catch((err) => console.log(err));

fetch("http://localhost:7777/users/get-one/1")
  .then((res) => res.json())
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

fetch("http://localhost:7777/cars")
  .then((res) => res.json())
  .then((cars) => console.log(cars))
  .catch((err) => console.log(err));

fetch("http://localhost:7777/cars/get-name/BMW X5")
  .then((res) => res.json())
  .then((car) => console.log(car))
  .catch((err) => console.log(err));

fetch("http://localhost:7777/cars/get-year/2020")
  .then((res) => res.json())
  .then((car) => console.log(car))
  .catch((err) => console.log(err));
