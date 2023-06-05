import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Banner } from './Banner';

/** Mock useNavigate */
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('components/Banner', () => {
  describe('<Banner />', () => {
    it('Rendered in the DOM', () => {
      render(
        <BrowserRouter>
          <Banner />
        </BrowserRouter>
      );
      const heroHeadingEl = screen.getByText('Little Lemon');
      expect(heroHeadingEl).toBeInTheDocument();
    });

    it('Button functionality', () => {
      render(
        <BrowserRouter>
          <Banner />
        </BrowserRouter>
      );
      const buttonEl = screen.getByRole('button');
      fireEvent.click(buttonEl);
      expect(mockedUsedNavigate).toBeCalledTimes(1);
    });
  });
});
