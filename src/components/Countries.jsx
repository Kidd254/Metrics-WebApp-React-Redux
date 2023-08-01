import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDataFromApi } from '../redux/country/countrySlice';
import Navbar from './Navbar';
import CountriesCSS from '../styles/Countries.module.css';

const Countries = () => {
  const [continent, setContinent] = useState('all');
  const { countries } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the getDataFromApi action to fetch the data when the component mounts
    dispatch(getDataFromApi());
  }, [dispatch]);
  return (
    <div className={CountriesCSS.countryMainContainer} data-testid="countryContainer">
      <div className={CountriesCSS.countryContainer}>
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
        <div className={CountriesCSS.countryList}>
          {countries.filter((country) => {
            if (continent === 'all') {
              return country;
            }
            return country.continent === continent;
          }).map((country) => (
            <Link to={`/${country.name.common}`} key={country.name.common} className={CountriesCSS.link}>
              <ul className={CountriesCSS.linkList}>
                <li className={CountriesCSS.countryName}>{country.name.common}</li>
                <li className={CountriesCSS.countryFlag}>{country.flag}</li>
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
