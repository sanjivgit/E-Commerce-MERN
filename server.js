const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 8800;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected with DB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
