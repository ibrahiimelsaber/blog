const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(corsOptions));

const CONNECTION_URL = "mongodb://localhost:27017/BlogPosts";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
  console.log("connected to db");
});
mongoose.set("useCreateIndex", true);
app.get("/", (req, res) => {
  res.send(`<h3>Welcome</h3>`);
});

//Models import
require("./models/post");
require("./models/category");
require("./models/comment");

app.use(express.json());

//Router import
app.use(require("./routes/post"));
app.use(require("./routes/category"));
app.use(require("./routes/comment"));

app.listen(PORT, (error) => {
  if (!error) console.log(`Server Running on Port: http://localhost:${PORT}`);
  else console.log(`${error} did not connect`);
});
