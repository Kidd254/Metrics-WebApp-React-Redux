import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Countries from '../components/Countries';

describe('Countries testing: "features and components"', () => {
  const mockStore = configureStore([]);
  const initialState = {
    Countries: {
      countries: [
        {
          name: 'Zambia',
          population: 500,
          week: 'Monday',
        },
        {
          name: 'Ghana',
          population: 700,
          week: 'Sunday',
        },
        {
          name: 'Egypt',
          population: 550,
          week: 'Tuesday',
        },
      ],
    },
  };
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('is select element displaying', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Countries />
        </Provider>
      </BrowserRouter>,
    );
    const countryRows = screen.getByText('All');

    expect(countryRows).toBeInTheDocument();
  });

  test('is Countries container rendering', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Countries />
        </Provider>
      </BrowserRouter>,
    );
    const countriesContainer = screen.getByTestId('countryContainer');
    expect(countriesContainer).toBeInTheDocument();
  });

  test('is list container rendering', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Countries />
        </Provider>
      </BrowserRouter>,
    );
    const display = screen.getAllByRole('list');
    expect(display.length).toBe(initialState.Countries.countries.length);
  });
});
