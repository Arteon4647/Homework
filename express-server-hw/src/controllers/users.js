const express = require("express");
const UsersService = require("../services/users");

const usersController = express.Router();

usersController.get("/", (_, response) => {
    const users = UsersService.getAll();
    response.status(200).send(users);
});

usersController.get("/get-one/:id", (req, res) => {
    const user = UsersService.getOne(+req.params.id);
    if (!user) return res.status(404).send({ message: "User is not found"});
    res.status(200).send(user);
})

usersController.post("/", (req, res) => {
    UsersService.create(req.body);
    res.status(201).send({ message: "User was created"});
});

module.exports = usersController;
