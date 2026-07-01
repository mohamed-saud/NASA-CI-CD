const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");
const corsOptions = {
  // Single domain string, or an array of allowed domains
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
// app.use(morgan("combined"));

app.use(express.json());
app.use(planetsRouter);
app.use(launchesRouter);

app.use(express.static(path.join(__dirname, "..", "public")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
app.use((req, res) => {
  res.status(404).json({
    error: "Page not found",
  });
});
module.exports = app;
