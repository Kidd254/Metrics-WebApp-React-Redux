import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import styles from '../styles/Country.module.css';

const Country = () => {
  const { id } = useParams();
  const { countries } = useSelector((state) => state.Countries);

  const country = countries.find((display) => display.name.common === id);
  return (
    <div className={styles.countryMainContainer} data-testid="details">
      <div className={styles.countryContainer}>
        <Navbar />
        { country && (
        <div>
          <div>
            <div className={styles.countryAndFlagItem}>
              {' '}
              <span>
                {' '}
                <img src={country.flagImage} className={styles.ctryFlag} alt={country.flag} />
                {' '}
              </span>
              {' '}
              <span className={styles.countryFlagName}>{country.flag}</span>
              {' '}
            </div>
          </div>
          <ul className={styles.countryInformation}>
            <li className={styles.countryInformationList}>
              Capital City:
              {country.capital}
            </li>
            <li className={styles.countryInformationList}>
              Population:
              {country.population}
            </li>
            <li className={styles.countryInformationList}>
              {' '}
              Continent:
              {country.continent}
            </li>
            <li className={styles.countryInformationList}>
              {' '}
              Region:
              {country.region}
            </li>
            <li className={styles.countryInformationList}>
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
