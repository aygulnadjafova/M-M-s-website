import { useEffect, useState } from "react";

// import Hero card item
import HeroCardItem from "../../components/HeroCardItem";

// import database
import heroCardsDb from "../../db/heroCardsDb";

const HeroCards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(heroCardsDb);
  }, []);

  return (
    <section className="heroCards">
      <div className="container">
        <div className="row">
          <div className="cards">
            {data.map((item) => (
              <HeroCardItem data={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCards;
