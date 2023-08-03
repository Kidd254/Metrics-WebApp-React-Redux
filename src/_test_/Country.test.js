import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Country from '../components/Country';

describe('Countries testing: "features and components"', () => {
  const mockStore = configureStore([]);
  const initialState = {
    Countries: {
      countries: [
        {
          name: 'Somalia',
          population: 1000,
          week: 'monday',
        },
        {
          name: 'Tanzania',
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
  test('is more detail container rendering', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Country />
        </Provider>
      </BrowserRouter>,
    );
    const moreInfo = screen.getByTestId('details');
    expect(moreInfo).toBeInTheDocument();
  });
});
