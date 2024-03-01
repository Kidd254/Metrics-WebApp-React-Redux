/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Countries = () => {
  const [continent, setContinent] = useState('all');
  const { countries } = useSelector((state) => state.Countries);

  // Filter and group countries by continent
  const filteredCountries = countries.filter(
    (country) => continent === 'all' || country.continent === continent,
  );

  return (
    <div className="bg-gray-100 p-4" data-testid="countryContainer">
      <div className="container mx-auto">
        <Navbar />
        <h1 className="text-3xl font-bold mb-4">Countries</h1>
        <div>
          <select
            name="continents"
            id="continents"
            className="p-2 border rounded"
            onChange={(e) => setContinent(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="South America">South America</option>
            <option value="North America">North America</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctica">Antarctica</option>
          </select>
        </div>
        <div className="mb-4 border rounded" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 border-rounded">
          {filteredCountries.map((country, index) => (
            <Link
              to={`/${country.name.common}`}
              key={`country-${index}`}
              className={`p-4 border ${
                index % 2 === 0 ? 'bg-blue-500' : 'bg-blue-300'
              }`}
            >
              <div>
                <span className="text-xl font-bold mb-2">
                  {country.name.common}
                </span>
                <span className="block">{country.flag}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
