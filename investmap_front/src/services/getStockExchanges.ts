import axios from "axios";

async function getStockExchanges(symbol: string) {
  if (symbol) {
    const response = await axios.get(
      `http://localhost:3001/acao?symbol=${symbol}&key=5X0UOBACQBNVVXLR`
    );

    const stocks = await response.data;

    const metaData = stocks["Meta Data"];
    const timeSeriesDaily = stocks["Time Series (Daily)"];
    // const transTimeToArray = Object.entries(timeSeriesDaily);

    return { metaData, timeSeriesDaily };
  }
}

export default getStockExchanges;
