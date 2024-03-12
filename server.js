require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { addUser } = require("./route/add-user");
const { getUser } = require("./route/get-user");
const { createTable } = require("./route/crete-table");
const app = express();

const router = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.use(router);

router.post("/add-user", addUser);
router.get("/get-user", getUser);
router.post("/crete-table", createTable);

app.listen(4000, () => {
  console.log("Server is listening at port 4000");
});
