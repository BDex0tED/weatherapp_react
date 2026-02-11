import { useState } from 'react';

export default function SearchBar({ onSearch, loading }) {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="space-y-4 mb-6">
      <div>
        <label htmlFor="city-name" className="block text-sm font-medium mb-1 text-gray-300">
          City Name
        </label>
        <div className="flex space-x-2">
          <input
            type="text"
            id="city-name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-grow px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            placeholder="e.g.. Bishkek, Barcelona"
            disabled={loading}
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 rounded-lg font-semibold shadow-lg transition-colors"
          >
            {loading ? 'Loading...' : 'Get'}
          </button>
        </div>
      </div>
    </div>
  );
}
