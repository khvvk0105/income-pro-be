const userRouter = require("express").Router();
const {
  getUsers,
  createTable,
  addUser,
  addUsers,
} = require("../service/user-service");

userRouter.get("/login", (req, res) => {});

userRouter.get("/users", async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

userRouter.get("/persons", async (req, res) => {
  const user = req.body;
  const persons = await createTable();
  res.json(persons);
});

userRouter.post("/users", async (req, res) => {
  const user = req.body;
  const users = await addUser(user);
  res.json(users);
});

userRouter.post("/persons", async (req, res) => {
  const adduser = req.body;
  const persons = await addUsers(adduser);
  res.json(persons);
});
// userRouter.post("/signup", async (req, res) => {
//   const newUserData = req.body;
//   const result = await addUser(newUserData);
//   res.json(result);
// });

module.exports = userRouter;
