import React, { useState, useEffect } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Accordion } from "./components/Accordion";
import { Typography } from "./components/Typography";
import { Tooltip } from "./components/Tooltip";
import { Heading } from "./components/Heading";
import "./index.css";

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.coinlore.net/api/tickers/");
      const data = await response.json();
      setCryptoData(data.data);
      setFilteredData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchQuery(value);
    const filtered = cryptoData.filter(
      (coin) =>
        coin.name.toLowerCase().includes(value) ||
        coin.symbol.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  return (
    <div className="app-container">
      <Heading level="1">Cryptocurrency Prices</Heading>
      <Button variant="bordered" onClick={fetchData}>Update</Button>
      <Input
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearch}
      />

      {}
      {filteredData.map((coin) => (
        <Accordion key={coin.id} title={coin.name}>
          <Typography>
            <strong>Symbol:</strong> {coin.symbol}
          </Typography>
          <Typography>
            <strong>Price USD:</strong> {coin.price_usd}
          </Typography>
          <Typography>
            <strong>Price BTC:</strong> {coin.price_btc}
          </Typography>
          <Tooltip text="The market capitalization of a cryptocurrency is calculated by multiplying the number of coins in circulation by the current price">
            <Typography>
              <strong>Market Cap USD:</strong> {coin.market_cap_usd}
            </Typography>
          </Tooltip>
          <Typography
            className={
              coin.percent_change_24h >= 0
                ? "price-positive"
                : "price-negative"
            }
          >
            <strong>Percent Change 24H:</strong> {coin.percent_change_24h}%
          </Typography>
        </Accordion>
      ))}
    </div>
  );
}

export default App;
