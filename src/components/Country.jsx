import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';

const Country = () => {
  const { id } = useParams();
  const { countries } = useSelector((state) => state.Countries);

  const country = countries.find((display) => display.name.common === id);

  return (
    <div className="bg-gray-100 p-4" data-testid="details">
      <div className="container mx-auto">
        <Navbar />
        {country && (
          <div>
            <div className="flex items-center mb-4">
              <img src={country.flagImage} className="w-12 h-8 mr-2" alt={country.flag} />
              <span className="text-xl font-bold">{country.flag}</span>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="mb-2">
                <span className="font-bold">Capital City:</span>
                <span>{country.capital}</span>
              </li>
              <li className="mb-2">
                <span className="font-bold">Population:</span>
                <span>{country.population}</span>
              </li>
              <li className="mb-2">
                <span className="font-bold">Continent:</span>
                <span>{country.continent}</span>
              </li>
              <li className="mb-2">
                <span className="font-bold">Region:</span>
                <span>{country.region}</span>
              </li>
              <li className="mb-2">
                <span className="font-bold">Start of Week:</span>
                <span>{country.week}</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Country;
