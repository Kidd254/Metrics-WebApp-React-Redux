import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import CountryCSS from '../styles/Country.module.css';

const Country = () => {
  const { id } = useParams();
  const { countries } = useSelector((state) => state.countries);

  const country = countries.find((display) => display.name.common === id);
  return (
    <div className={CountryCSS.countryMainContainer} data-testid="details">
      <div className={CountryCSS.countryContainer}>
        <Navbar />
        { country && (
        <div>
          <div>
            <div className={CountryCSS.countryAndFlagItem}>
              {' '}
              <span>
                {' '}
                <img src={country.flagImage} className={CountryCSS.ctryFlag} alt={country.flag} />
                {' '}
              </span>
              {' '}
              <span className={CountryCSS.countryFlagName}>{country.flag}</span>
              {' '}
            </div>
          </div>
          <ul className={CountryCSS.countryInformation}>
            <li className={CountryCSS.countryInformationList}>
              Capital City:
              {country.capital}
            </li>
            <li className={CountryCSS.countryInformationList}>
              Population:
              {country.population}
            </li>
            <li className={CountryCSS.countryInformationList}>
              {' '}
              Continent:
              {country.continent}
            </li>
            <li className={CountryCSS.countryInformationList}>
              {' '}
              Region:
              {country.region}
            </li>
            <li className={CountryCSS.countryInformationList}>
              {' '}
              Start of Week:
              {country.startOfWeek}
            </li>
          </ul>
        </div>
        )}
      </div>
    </div>
  );
};
export default Country;
