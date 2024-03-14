const userRouter = require("express").Router();
const { getUsers, createTable } = require("../service/user-service");

userRouter.get("/login", (req, res) => {});

userRouter.get("/users", async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

userRouter.post("/persons", async (req, res) => {
  const persons = await createTable();
  res.json(persons);
});

userRouter.post("/signup", async (req, res) => {
  const newUserData = req.body;
  const result = await addUser(newUserData);
  res.json(result);
});

module.exports = userRouter;
