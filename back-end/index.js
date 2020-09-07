const bodyParser = require("body-parser");
const cors = require('cors');
const express = require("express");
const app = express();

const PORT = process.env.PORT | 3000;

app.use(cors());
app.options('*',cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("./routes/app-router"));
app.get("/", function (req, res) {
  res.send("Building REST API with Nodejs!");
});

app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`));