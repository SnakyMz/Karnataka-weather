import { render } from '@testing-library/react';
import Home from '../components/Home';
import City from '../components/City';

jest.mock('../components/Home');
jest.mock('../components/City');

describe('Testing components', () => {
  it('Should render Home page', () => {
    const home = render(<Home />);
    expect(home).toMatchSnapshot();
  });

  it('Should render City page', () => {
    const city = render(<City />);
    expect(city).toMatchSnapshot();
  });
});
