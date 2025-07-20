import { useEffect, useState } from "react";
import { fetchCoins } from "../services/coinAPI";
import CoinCard from "../components/CoinCard";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filterChange, setFilterChange] = useState("all");

  const loadData = async () => {
    const data = await fetchCoins();
    setCoins(data);
    setFilteredCoins(data);
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let updated = [...coins];

    // 🔍 Filter by search
    if (search) {
      updated = updated.filter(
        (coin) =>
          coin.name.toLowerCase().includes(search.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(search.toLowerCase())
      );
    }

    // 🔴🟢 Filter by 24h change
    if (filterChange === "gainers") {
      updated = updated.filter((coin) => coin.change24h > 0);
    } else if (filterChange === "losers") {
      updated = updated.filter((coin) => coin.change24h < 0);
    }

    // ↕️ Sort
    if (sortBy === "price") {
      updated.sort((a, b) => b.price - a.price);
    } else if (sortBy === "marketCap") {
      updated.sort((a, b) => b.marketCap - a.marketCap);
    } else if (sortBy === "change") {
      updated.sort((a, b) => b.change24h - a.change24h);
    }

    setFilteredCoins(updated);
  }, [search, sortBy, filterChange, coins]);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-b from-gray-100 to-gray-200">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Top 10 Cryptocurrencies
      </h1>

      {/* 🔎 Search & Filters */}
      <div className="flex flex-wrap gap-4 mb-6 items-center">
        <input
          type="text"
          placeholder="Search coin..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-md w-full md:w-60 bg-white"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border rounded-md bg-white cursor-pointer"
        >
          <option value="">Sort</option>
          <option value="price">Price</option>
          <option value="marketCap">Market Cap</option>
          <option value="change">24h Change</option>
        </select>
        <select
          value={filterChange}
          onChange={(e) => setFilterChange(e.target.value)}
          className="px-4 py-2 border rounded-md bg-white cursor-pointer"
        >
          <option value="all">All</option>
          <option value="gainers">Gainers</option>
          <option value="losers">Losers</option>
        </select>
      </div>

      {/* 📦 Coin Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCoins.map((coin) => (
          <CoinCard key={coin.coinId} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
