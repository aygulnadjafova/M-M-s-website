import { Link } from "react-router-dom";

import arrowRight from "../assets/images/icons/arrow-right.svg";

const HeroCardItem = ({ data }) => {
  return (
    <div className="cardItem" style={{ backgroundColor: `${data.color}` }}>
      <div className="topIcon">
        <img src={data.icon} alt="card-icon-one" />
      </div>
      <div className="cardInfo">
        <div className="imgPart">
          <img src={data.image} alt={data.title} />
        </div>
        <div className="textPart">
          <h2 className="title">{data.title}</h2>
          <p className="info">{data.info}</p>
          <div className="link">
            <Link to="/shop/products">
              {data.link} <img src={arrowRight} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCardItem;
