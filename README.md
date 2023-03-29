# Fake TimeSeries Express.js Server

This repository contains an Express.js server (app.js) and a script for generating random timeseries data (generateTimeseriesData.js).
Installation

To use this project, you will need to have Node.js and yarn installed on your machine.

First, clone this repository to your local machine:

```bash
git clone https://github.com/manu2194/refactored-waddle.git
```

Then, navigate to the project directory and install the dependencies for both the server and the timeseries data generator:

```bash
cd refactored-waddle
yarn install
```

## Timeseries Data Generator
Usage

To generate random timeseries data, navigate to the timeseries-data-generator directory and run the generateTimeseriesData.js script:

```bash
yarn node generateTimeseriesData.js
```

By default, the script will generate 1000 data points and write them to a file named `timeseriesData.json`.

To generate a different number of data points, you can pass in a positional argument when running the script:

```
yarn node generateTimeseriesData.js 500
```

This will generate 500 data points and write them to timeseriesData.json.

The generated timeseries data will be an array of objects, with each object containing a time property and a value property.

## Express.js Server
Usage

***NOTE: Ensure that there is a timeseriesData.json file in the server directory. If not, you can generate one by running the timeseries data generator script (see above).***

To run the Express.js server, run

```bash
yarn start
```

This will start the server on port 5000. You can access the timeseries data endpoint by visiting `http://localhost:5000/timeseries`.

By default, the endpoint will return all the timeseries data in the timeseriesData array in app.js. You can filter the data based on a start date and/or an end date by passing in the start and/or end query parameters in ISO string format:

```bash
http://localhost:3000/timeseries?start=2022-01-01T00:00:00Z&end=2022-01-05T00:00:00Z
```

### CORS Protection

The Express.js server uses the cors middleware to enable CORS protection. This means that only clients from allowed domains will be able to access the server. You can customize the allowed domains by editing the origin property in the corsOptions object in app.js.
