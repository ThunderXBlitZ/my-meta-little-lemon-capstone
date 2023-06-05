import { useNavigate } from 'react-router-dom';
import { Button, Heading } from '..';
import './Banner.css';

export const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="LL-Banner">
      <div className="LL-Banner-left">
        <img
          src="https://ik.imagekit.io/zenius/Coursera/html-css/little-lemon-pizzas_v269Oq2LM.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674426273890"
          alt="Little Lemon - Banner"
        />
      </div>
      <div className="LL-Banner-right">
        <Heading tag="h1" size="2xl">
          Little Lemon
        </Heading>
        <p className="subtitle">Chicago</p>
        <p id="LL-Banner-desc">
          Serving delicious Mediterranean food, hope you enjoy your time here!
        </p>
        <Button
          ariaLabel="Reserve a Table"
          id="LL-Banner-btn"
          primary
          onClick={() => navigate('/bookings')}
        >
          Reserve a Table
        </Button>
      </div>
    </section>
  );
};
