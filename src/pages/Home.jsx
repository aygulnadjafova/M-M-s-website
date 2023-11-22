// Sections
import Hero from "./homeSections/Hero";
import HeroCards from "./homeSections/HeroCards";
import MarqueeSec from "./homeSections/MarqueeSec";
import Mission from "./homeSections/Mission";
import Occasions from "./homeSections/Occasions";
import FeaturedProducts from "./homeSections/FeaturedProducts";
import ShareFun from "./homeSections/ShareFun";

const Home = () => {
  return (
    <main>
      <Hero />
      <HeroCards />
      <MarqueeSec />
      <Mission />
      <Occasions />
      <FeaturedProducts />
      <ShareFun />
    </main>
  );
};

export default Home;
