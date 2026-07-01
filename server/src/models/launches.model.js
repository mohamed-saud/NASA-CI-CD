const launches = new Map();

let leastFlightNumber = 100;

const launche = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  destination: "Kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launche) {
  leastFlightNumber++;
  launches.set(
    leastFlightNumber,
    Object.assign(launche, {
      success: true,
      upcoming: true,
      customers: ["Zero to Mastery", "NASA"],
      flightNumber: leastFlightNumber,
    }),
  );
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
};
