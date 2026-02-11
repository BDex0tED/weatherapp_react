# Weather App - React Version

A modern weather application built with React, Vite, and Tailwind CSS. Get real-time weather information for any city using the OpenWeatherMap API.

## Features

- Search weather by city name
- Display current temperature in Celsius and Fahrenheit
- Show weather description and icon
- Display additional metrics: feels like temperature, humidity, wind speed, and pressure
- Responsive design with dark theme
- Error handling for invalid cities and API issues

## Project Structure

```
src/
├── main.jsx           # React entry point
├── App.jsx            # Main application component
├── index.css          # Tailwind CSS
└── components/
    ├── SearchBar.jsx  # Search input component
    └── WeatherCard.jsx # Weather display component
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Usage

- Enter a city name in the search input
- Press Enter or click the "Get" button
- View the current weather information for the selected city

## API

Uses the [OpenWeatherMap API](https://openweathermap.org/api) with your API key configured in `App.jsx`.

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- OpenWeatherMap API
