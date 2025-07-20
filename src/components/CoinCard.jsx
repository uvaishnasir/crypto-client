const CoinCard = ({ coin }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition border border-gray-200">
      <h2 className="text-xl font-semibold mb-2">
        {coin.name} ({coin.symbol.toUpperCase()})
      </h2>
      <p className="mb-1">
        <span role="img" aria-label="price" className="mr-1">
          💰
        </span>
        Price: ${coin.price.toLocaleString()}
      </p>
      <p className="mb-1">
        <span role="img" aria-label="market cap" className="mr-1">
          🏦
        </span>
        Market Cap: ${coin.marketCap.toLocaleString()}
      </p>
      <p className="mb-1">
        <span role="img" aria-label="change" className="mr-1">
          📉
        </span>
        24h Change:{" "}
        <span
          className={
            coin.change24h > 0
              ? "text-green-600 font-medium"
              : coin.change24h < 0
              ? "text-red-500 font-medium"
              : "text-gray-700"
          }
        >
          {coin.change24h.toFixed(2)}%
        </span>
      </p>
      <p className="text-sm text-gray-500 mt-2">
        <span role="img" aria-label="clock" className="mr-1">
          ⏰
        </span>
        Last Updated: {new Date(coin.lastUpdated).toLocaleString()}
      </p>
    </div>
  );
};

export default CoinCard;
