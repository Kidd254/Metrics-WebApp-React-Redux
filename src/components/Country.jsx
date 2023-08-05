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
        {country && (
          <div>
            <div className={styles.countryAndFlagItem}>
              <span>
                <img src={country.flagImage} className={styles.ctryFlag} alt={country.flag} />
              </span>
              <span className={styles.countryFlagName}>{country.flag}</span>
            </div>
            <ul className={styles.countryInformation}>
              <li className={styles.countryInformationList}>
                <span className={styles.key}>Capital City:</span>
                <span className={styles.value}>{country.capital}</span>
              </li>
              <li className={styles.countryInformationList}>
                <span className={styles.key}>Population:</span>
                <span className={styles.value}>{country.population}</span>
              </li>
              <li className={styles.countryInformationList}>
                <span className={styles.key}>Continent:</span>
                <span className={styles.value}>{country.continent}</span>
              </li>
              <li className={styles.countryInformationList}>
                <span className={styles.key}>Region:</span>
                <span className={styles.value}>{country.region}</span>
              </li>
              <li className={styles.countryInformationList}>
                <span className={styles.key}>Start of Week:</span>
                <span className={styles.value}>{country.week}</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Country;