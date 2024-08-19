class CarsService {
  static cars = [
    {
      name: "Toyota Camry",
      model: "XLE",
      year: 2020,
    },
    {
      name: "Honda Accord",
      model: "EX-L",
      year: 2018,
    },
    {
      name: "Ford Mustang",
      model: "GT",
      year: 2021,
    },
    {
      name: "Chevrolet Tahoe",
      model: "LT",
      year: 2019,
    },
    {
      name: "BMW X5",
      model: "xDrive40i",
      year: 2022,
    },
  ];

  static getAll = () => CarsService.cars;

  static getName = (name) => {
    return CarsService.cars.find((car) => car.name === name);
  };

  static getYear = (year) => {
    return CarsService.cars.find((car) => car.year === year);
  };

  static create = (car) => {
    CarsService.cars.push(car);
  };
}

module.exports = CarsService;
