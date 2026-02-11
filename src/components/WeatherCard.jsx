export default function WeatherCard({ data }) {
  if (!data) return null;

  const {
    name: cityName,
    sys: { country },
    weather: [{ icon: iconCode, description }],
    main: { temp: tempCelsius, feels_like: feelsLikeCelsius, humidity, pressure },
    wind: { speed: windSpeedValue },
  } = data;

  const tempFahrenheit = (tempCelsius * 9) / 5 + 32;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold">{cityName}, {country}</h2>
        <div className="flex justify-center items-center">
          <img
            src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
            alt={description}
            className="w-24 h-24 -my-2"
          />
        </div>
        <p className="text-xl capitalize text-gray-300">{description}</p>
      </div>

      <div className="text-center">
        <p className="text-7xl font-extrabold">{Math.round(tempCelsius)}°C</p>
        <p className="text-2xl text-gray-400">{Math.round(tempFahrenheit)}°F</p>
      </div>

      <div className="grid grid-cols-2 gap-4 bg-gray-800 p-4 rounded-lg">
        <div className="text-center">
          <p className="text-sm text-gray-400">Feels Like</p>
          <p className="text-2xl font-semibold">{Math.round(feelsLikeCelsius)}°C</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-400">Humidity</p>
          <p className="text-2xl font-semibold">{humidity}%</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-400">Wind speed</p>
          <p className="text-2xl font-semibold">{windSpeedValue.toFixed(1)} m/s</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-400">Pressure</p>
          <p className="text-2xl font-semibold">{pressure} hPa</p>
        </div>
      </div>
    </div>
  );
}
