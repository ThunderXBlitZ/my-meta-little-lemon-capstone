import { Button, Card, Heading } from '../../components';
// import { FoodCard } from '../FoodCard/FoodCard';
import './Specials.css';

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};


export const Specials = ({ data, itemWidth }) => {
  return (
    <section id="specials" className="LL-Specials">
      <section className="specials-titlebar">
        <Heading size="lg">Specials - Today's Menu</Heading>
        <Button primary>Online Menu</Button>
      </section>

      <section id="LL-Section-SpecialItems">
        {data.map(({ id, title, price, description, image }) => (
          <Card key={id} title={title} width={itemWidth} image={image}>
            <div className="LL-CardHeader card-variant-food">
              <Heading tag="h3" size="m" className="food-title">
                {title}
              </Heading>
              <p className="food-price">${price}</p>
            </div>
            <div className="food-desc">{description}</div>

            <div className="card-footer LL-OrderButton" style={styles}>
              <Button class="btn-order" primary>
                Order
              </Button>
            </div>
          </Card>
        ))}
      </section>
    </section>
  );
};
