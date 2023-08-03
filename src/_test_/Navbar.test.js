import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Navbar from '../components/Navbar';

describe('Countries testing: "features and components"', () => {
  const mockStore = configureStore([]);
  const initialState = {
    Countries: {
      countries: [
        {
          name: 'Mali',
          population: 500,
          week: 'monday',
        },
        {
          name: 'Kenya',
          population: 1700,
          week: 'Sunday',
        },
        {
          name: 'Tunisia',
          population: 5000,
          week: 'Tuesday',
        },
      ],
    },
  };
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });
  test('is navContainer container rendering', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>,
    );
    const NavContent = screen.getByTestId('navContainer');
    expect(NavContent).toBeInTheDocument();
  });
});
