const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');


// read timeseries data from file
const timeseriesData = JSON.parse(fs.readFileSync('timeseriesData.json'));

// enable CORS protection
app.use(cors());

// define endpoint with query parameters "start" and "end"
app.get('/timeseries', (req, res) => {
  const { start, end } = req.query;
  let startDate = new Date(0); // default to the beginning of all time
  let endDate = new Date(); // default to the current date
  
  if (start) {
    startDate = new Date(start);
  }
  
  if (end) {
    endDate = new Date(end);
  }
  
  // filter timeseries data based on start and end dates
  const filteredData = timeseriesData.filter(data => {
    const time = new Date(data.time);
    return time >= startDate && time <= endDate;
  });
  
  res.json(filteredData);
});

// start server with hot reload
app.listen(5000, () => console.log('Server started on port 3000'))
  .on('listening', () => console.log('Server listening on port 3000'))
  .on('error', err => console.log(`Error starting server: ${err}`));
