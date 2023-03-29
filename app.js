const express = require('express');
const cors = require('cors');
const app = express();

// define timeseries data as an array of objects
const timeseriesData = [
  { time: new Date("2022-01-01T00:00:00Z"), value: 10 },
  { time: new Date("2022-01-02T00:00:00Z"), value: 15 },
  { time: new Date("2022-01-03T00:00:00Z"), value: 20 },
  { time: new Date("2022-01-04T00:00:00Z"), value: 25 },
  { time: new Date("2022-01-05T00:00:00Z"), value: 30 },
];

// enable CORS protection
app.use(cors());

// define endpoint with query parameters "start" and "end"
app.get('/timeseries', (req, res) => {
  const { start, end } = req.query;
  const startDate = new Date(start);
  const endDate = new Date(end);
  
  // filter timeseries data based on start and end dates
  const filteredData = timeseriesData.filter(data => {
    return data.time >= startDate && data.time <= endDate;
  });
  
  res.json(filteredData);
});

// start server with hot reload
app.listen(5000, () => console.log('Server started on port 3000'))
  .on('listening', () => console.log('Server listening on port 3000'))
  .on('error', err => console.log(`Error starting server: ${err}`));
