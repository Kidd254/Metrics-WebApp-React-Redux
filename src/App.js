import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Countries from './components/Countries';
import Country from './components/Country';
import { getDataFromApi } from './redux/country/countrySlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFromApi());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:id" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
