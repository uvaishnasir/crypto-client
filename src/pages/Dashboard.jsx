import React, { useEffect, useState } from "react";
import { fetchCoins } from "../services/coinAPI";
import CoinCard from "../components/CoinCard";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const data = await fetchCoins();
      setCoins(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching coins:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();

    const interval = setInterval(loadData, 30 * 60 * 1000); // every 30 min
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Top 10 Cryptocurrencies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coins.map((coin) => (
          <div key={coin.coinId} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">
              {coin.name} ({coin.symbol.toUpperCase()})
            </h2>
            <p>💰 Price: ${coin.price.toLocaleString()}</p>
            <p>🏦 Market Cap: ${coin.marketCap.toLocaleString()}</p>
            <p>
              📉 24h Change:{" "}
              <span
                className={
                  coin.change24h >= 0 ? "text-green-600" : "text-red-500"
                }
              >
                {coin.change24h.toFixed(2)}%
              </span>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              ⏱ Last Updated: {new Date(coin.lastUpdated).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
