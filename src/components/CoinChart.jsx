import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

import axios from "axios";
import { useEffect, useState } from "react";

const CoinChart = ({ coinId }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/history/${coinId}`
      );
      setHistory(data);
    };
    fetchHistory();
  }, [coinId]);

  const chartData = {
    labels: history.map((point) =>
      new Date(point.timestamp).toLocaleTimeString()
    ),
    datasets: [
      {
        label: "Price ($)",
        data: history.map((point) => point.price),
        fill: false,
        borderColor: "#3b82f6",
        tension: 0.3,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default CoinChart;
