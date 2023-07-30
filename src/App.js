import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries';
import Country from './components/Country';

function App() {
  return (
    <div>
   <Routes>
    <Route path='/' element={<Countries />}/>
    <Route path='/:id' element={<Country />} />
   </Routes>
   </div>
  );
}

export default App;
