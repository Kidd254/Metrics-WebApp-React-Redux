/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import styles from '../styles/Countries.module.css';

const Countries = () => {
  const [continent, setContinent] = useState('all');
  const { countries } = useSelector((state) => state.Countries);

  // Filter and group countries by continent
  const filteredCountries = countries.filter((country) => continent === 'all' || country.continent === continent);
  const countriesByRow = [];
  const rowSize = 2;
  for (let i = 0; i < filteredCountries.length; i += rowSize) {
    countriesByRow.push(filteredCountries.slice(i, i + rowSize));
  }

  return (
    <div className={styles.countryMainContainer} data-testid="countryContainer">
      <div className={styles.countryContainer}>
        <Navbar />
        <h1>Countries</h1>
        <div>
          <select
            name="continents"
            id="continents"
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
        <div className={styles.selectHeader} />
        <div className={styles.countryList}>
          {countriesByRow.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className={styles.rowContainer}>
              {row.map((country, colIndex) => (
                <Link
                  to={`/${country.name.common}`}
                  key={`row-${rowIndex}-col-${colIndex}`}
                  className={`${styles.link} ${
                    (rowIndex + colIndex) % 2 === 0 ? styles.evenCountry : styles.oddCountry
                  }`}
                >
                  <div className={styles.linkList}>
                    <span className={styles.countryName}>{country.name.common}</span>
                    <span className={styles.countryFlag}>{country.flag}</span>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
