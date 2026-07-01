require("dotenv").config();
const { loadPlanetsData } = require("./models/planets.model");

const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();
}

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
startServer();
