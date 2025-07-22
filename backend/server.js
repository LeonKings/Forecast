const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const forecastRoute = require("./routes/forecast");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/forecast", forecastRoute);

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
