import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './country/countrySlice';

const store = configureStore({
  reducer: {
    Countries: countryReducer,
  },
});

export default store;
