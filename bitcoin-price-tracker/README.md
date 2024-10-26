# Bitcoin Price Tracker

This is a simple React application built with Vite that displays the current Bitcoin price using the CoinDesk API. The price updates automatically every five minutes.

## Features

- Fetches real-time Bitcoin price data from the CoinDesk API
- Displays the current Bitcoin price in USD
- Automatically updates the price every five minutes
- Minimalist and easy-to-read interface

## API Used

This project uses the CoinDesk Bitcoin Price Index API:

```
https://api.coindesk.com/v1/bpi/currentprice.json
```

## How to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/anxhukumar/Mini-practice-projects.git
   ```

2. Navigate to the project directory:
   ```bash
   cd bitcoin-price-tracker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to the localhost URL provided in the terminal (usually `http://localhost:5173`).

## Technologies Used

- **React**: A JavaScript library for building user interfaces
- **Vite**: A fast development environment and build tool
- **Axios**: A promise-based HTTP client for making API requests
- **Tailwind CSS**: A utility-first CSS framework for styling
