import { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';

const API_KEY = "8266b306ad8ed837804e265300ddbfe5";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    showDate();
  }, []);

  const showDate = () => {
    const now = new Date();
    const day = now.getDate();
    const monthName = now.toLocaleString('en', { month: 'long' });
    setCurrentDate(`${day} ${monthName}`);
  };

  const fetchWeather = async (city) => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setWeatherData(null);
    setError("");

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        if (response.status === 401) {
          setError("Invalid API Key. Please check and try again.");
        } else if (response.status === 404) {
          setError(`City not found: "${city}"`);
        } else {
          setError(`Error: ${response.statusText} (Status ${response.status})`);
        }
        setLoading(false);
        return;
      }

      const data = await response.json();
      setWeatherData(data);
      setError("");
    } catch (error) {
      console.error('Fetch Error:', error);
      setError("Error occurred while fetching data. Try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto bg-gray-900 text-gray-100 rounded-2xl shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-center mb-2">Current Weather</h1>
        <h2 className="text-2xl font-semibold text-center mb-4">
          It's <span className="text-2xl font-medium">{currentDate}</span>
        </h2>

        <SearchBar onSearch={fetchWeather} loading={loading} />

        {error && (
          <div className="bg-red-700 text-white text-center p-3 rounded-lg">
            <p>{error}</p>
          </div>
        )}

        {weatherData && <WeatherCard data={weatherData} />}
      </div>
    </div>
  );
}

export default App;
