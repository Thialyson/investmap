const express = require("express");
const port = 3001;

const app = express();

const cors = require("cors");
app.use(cors());

const axios = require("axios");

app.get("/acao", async (req, res, next) => {
  const { symbol, interval, key } = req.query;
  if (!symbol) {
    return res.status(422).send("Symbol is required!!");
  }

  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}.SA&apikey=${key}`
    );

    return res.json(response.data);
  } catch (err) {
    return res.status(500).json(err.response ? err.response.data : err.message);
  }
});

app.listen(port);
console.log("Server is listening...");
