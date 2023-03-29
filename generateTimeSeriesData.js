const fs = require("fs");

function generateRandomTimeseriesData(numPoints, timeStep) {
  const startDate = new Date("2022-01-01T00:00:00Z");

  const data = [];
  let currentTime = startDate.getTime();
  let currentValue = Math.random() * 100;

  for (let i = 0; i < numPoints; i++) {
    data.push({
      time: new Date(currentTime),
      value: Math.max(0, currentValue),
    });
    currentTime += timeStep;
    currentValue += Math.random() * 20 - 10;
  }

  return data;
}

const numPoints = process.argv[2] || 1000; // get number of data points from CLI argument, default to 1000
const timeseriesData = generateRandomTimeseriesData(numPoints, 1000 * 60 * 60 * 24);

fs.writeFileSync("timeseriesData.json", JSON.stringify(timeseriesData));
