import React from "react";

const CoinCard = ({ coin }) => {
  return (
    <div className="border rounded-md p-4 shadow-sm bg-white hover:shadow-md transition">
      <h2 className="text-lg font-semibold">
        {coin.name} ({coin.symbol.toUpperCase()})
      </h2>
      <p>Price: ${coin.price.toLocaleString()}</p>
      <p>Market Cap: ${coin.marketCap.toLocaleString()}</p>
      <p>
        24h Change:{" "}
        <span
          className={coin.change24h >= 0 ? "text-green-600" : "text-red-500"}
        >
          {coin.change24h.toFixed(2)}%
        </span>
      </p>
      <p className="text-sm text-gray-500">
        Last Updated: {new Date(coin.lastUpdated).toLocaleString()}
      </p>
    </div>
  );
};

export default CoinCard;
