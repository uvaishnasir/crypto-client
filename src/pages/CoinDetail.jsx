import { useParams } from "react-router-dom";
import CoinChart from "../components/CoinChart";

const CoinDetail = () => {
  const { coinId } = useParams();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {coinId.toUpperCase()} — Price History
      </h1>
      <CoinChart coinId={coinId} />
    </div>
  );
};

export default CoinDetail;
