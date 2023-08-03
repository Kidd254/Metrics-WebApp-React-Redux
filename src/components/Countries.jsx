import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import styles from '../styles/Countries.module.css';

const Countries = () => {
  const [continent, setContinent] = useState('all');
  const { countries } = useSelector((state) => state.Countries);
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
        <div className={styles.countryList}>
          {countries.filter((country) => {
            if (continent === 'all') {
              return country;
            }
            return country.continent === continent;
          }).map((country) => (
            <Link to={`/${country.name.common}`} key={country.name.common} className={styles.link}>
              <ul className={styles.linkList}>
                <li className={styles.countryName}>{country.name.common}</li>
                <li className={styles.countryFlag}>{country.flag}</li>
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
