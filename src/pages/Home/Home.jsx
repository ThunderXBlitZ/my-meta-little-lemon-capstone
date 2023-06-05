import { About, Banner, Main, Specials, Testimonials } from '../../components';

import specials from '../../data/specials.json';
import testimonials from '../../data/testimonials.json';

export const Home = () => {
  return (
    <Main>
      <Banner />
      <Specials data={specials} itemWidth="400px" />
      <Testimonials data={testimonials} itemWidth="400px" />
      <About />
    </Main>
  );
};
