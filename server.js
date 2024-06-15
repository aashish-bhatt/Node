const express = require("express");
const app = express();
const db = require("./db");
const Person = require("./models/Person");
const menuItem = require("./models/Menu");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Welcome to my World");
});
app.get("/express", (req, res) => {
  const learning = {
    name: "Aashish",
    age: 22,
  };
  res.send(learning);
});

const personRouter = require("./routes/personRoutes");
app.use("/person",personRouter)

const menuRouter = require("./routes/MenuRoutes");
app.use("/menu",menuRouter)

app.listen(3030, () => {
  console.log("Server is running on port 3030");
});
