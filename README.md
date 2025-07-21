# 💹 Crypto Tracker Dashboard — Frontend (React + Vite + Tailwind)

This is the frontend for the **Crypto Tracker** app, built with **React**, **Vite**, and **Tailwind CSS v4**.  
It displays the top 10 cryptocurrencies with search, sorting, filtering, and charting features.

🔗 **Live URL**: [https://crypto-tracker-dun-gamma.vercel.app](https://crypto-tracker-dun-gamma.vercel.app)

---

## 🚀 Features

- ✅ Top 10 Coins from CoinGecko API (via backend)
- 🔍 Search by name or symbol
- ↕️ Sort by price, market cap, or 24h %
- 🟢🔴 Filter gainers/losers
- 📈 Coin price chart (Chart.js)
- 🔁 Auto-refresh every 30 mins
- 💨 Fully responsive with Tailwind CSS

#Dashboard 
<img width="1731" height="728" alt="image" src="https://github.com/user-attachments/assets/bb204c22-5c11-4b94-853b-9b16f8d856ea" />


<img width="1267" height="689" alt="image" src="https://github.com/user-attachments/assets/daaee99c-66ae-46b0-b7b9-bd3283f15591" />

---

## 📦 Tech Stack

- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [Chart.js + react-chartjs-2](https://react-chartjs-2.js.org/)

---

## 🌍 Environment Variables

Create a `.env` file in `/client`:

```env
VITE_API_BASE_URL=https://crypto-tracker-server-3omc.onrender.com/api
