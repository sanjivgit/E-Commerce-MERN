const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 8800;

app.get("/", (req, res) => {
  res.send("Hello Guys!!!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
