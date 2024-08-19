const express = require("express");
const CarsService = require("../services/cars");

const carsController = express.Router();

carsController.get("/", (_, response) => {
    const cars = CarsService.getAll();
    response.status(200).send(cars);
});

carsController.get("/get-name/:name", (req, res) => {
    const car = CarsService.getName(req.params.name);
    if (!car) return res.status(404).send({ message: "Car is not found"});
    res.status(200).send(car);
})

carsController.get("/get-year/:year", (req, res) => {
    const car = CarsService.getYear(+req.params.year);
    if (!car) return res.status(404).send({ message: "Car is not found"});
    res.status(200).send(car);
})

carsController.post("/", (req, res) => {
    CarsService.create(req.body);
    res.status(201).send({ message: "Car was created"});
});

module.exports = carsController;