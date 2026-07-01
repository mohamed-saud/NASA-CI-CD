const URL = "http://localhost:8000";

async function httpGetPlanets() {
  const response = await fetch(`${URL}/planets`);
  const planets = await response.json();
  return planets;
}

async function httpGetLaunches() {
  const response = await fetch(`${URL}/launches`);
  const fetchedLaunches = await response.json();

  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
  const response = await fetch(`${URL}/launches`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(launch),
  });
  return response.json();
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
