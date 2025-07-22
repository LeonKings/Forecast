# Weather Activity Scheduler

This is a full-stack application that allows users to schedule outdoor activities based on weather forecasts retrieved from BMKG's API.

BMKG Weather Forecast Source: [https://data.bmkg.go.id/prakiraan-cuaca/](https://data.bmkg.go.id/prakiraan-cuaca/)

## Features

### Frontend (React + Tailwind CSS)
- User-friendly form to input:
  - Activity name
  - Location (Sub-district/Village Code)
  - Preferred Date
- Displays recommended time slots based on favorable weather (e.g., clear or cloudy).

### Backend (Node.js + Express)
- Fetches 3-day weather forecast from BMKG API.
- Parses and filters data for suitable time slots.
- Returns suggestions to the frontend.
- Logs activities and chosen time slots in a local database (JSON file for simplicity).

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/LeonKings/Forecast.git
```

### 2. Install dependencies
```bash
cd Forecast/backend
npm install

cd ../frontend
npm install
```

### 3. Start the backend and frontend
```bash
cd Forecast/backend
node server.js

# Open a new terminal and navigate to the folder frontend
cd ../frontend
npm run dev
```

## Example
  "activity": "Morning Jog",
  "location": "31.71.01.1001",
  "date": "2025-07-23"

## Assumptions
- BMKG's public API returns data in a reliable and consistent JSON format.
- Forecast location is provided as a sub-district/village administrative code (`adm4`).
- Backend stores data locally; no persistent external database is used.

---

Feel free to simulate responses with mock data if the BMKG API is unreachable during development.

> Developed as a weather-aware activity planner using BMKG forecast data.
z
