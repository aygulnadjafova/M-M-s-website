// Sections
import Hero from "./homeSections/Hero";
import HeroCards from "./homeSections/HeroCards";
import MarqueeSec from "./homeSections/MarqueeSec";
import Mission from "./homeSections/Mission";
import Occasions from "./homeSections/Occasions";
import FeaturedProducts from "./homeSections/FeaturedProducts";
import Wedding from "./homeSections/Wedding";

const Home = () => {
  return (
    <main>
      <Hero />
      <HeroCards />
      <MarqueeSec />
      <Mission />
      <Occasions />
      <FeaturedProducts />
      <Wedding />
    </main>
  );
};

export default Home;
