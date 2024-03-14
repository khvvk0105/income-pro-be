const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const { v4: uuidv4, v4 } = require("uuid");
dotenv.config();

const userRouter = require("./route/user");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(userRouter);

app.listen(4000, () => {
  console.log("Server is listening at port 4000");
});
