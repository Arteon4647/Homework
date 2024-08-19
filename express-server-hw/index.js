const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const usersController = require("./src/controllers/users");
const carsController = require("./src/controllers/cars")

dotenv.config();

const server = express();

const port = process.env.PORT;

server.use(express.json());
server.use(cors({ origin: "*" }));
server.use("/users", usersController);
server.use("/cars", carsController);

server.get("/", (request, response) => {
  response.send({ message: "Hello Client" });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
