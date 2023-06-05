import { Heading, Stack } from '..';
import './About.css';

export const About = () => {
  return (
    <section id="about">
      <Stack className="about-columns" justify="space-between">
      <section className="about-left-column">
          <section id="about-images">
            <div id="about-first-image">
              <img
                src="https://ik.imagekit.io/zenius/Coursera/html-css/little-lemon-pastas_-BfcomSI5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674426273746"
                alt="Little Lemon - Burritos"
              />
            </div>
          </section>
        </section>

        <Stack.Item
          className="about-right-column"
          vertical
          gap="2.25rem"
          basis="50%"
        >
          <Stack.Item vertical>
            <Heading>Little Lemon</Heading>
            <p>Chicago</p>
          </Stack.Item>

          <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            It is our dream to open our own resturant, and the recipes are passed down from our grandma, we hope that you enjoy them!
          </p>
        </Stack.Item>


      </Stack>
    </section>
  );
};
