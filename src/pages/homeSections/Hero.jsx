import { Link } from "react-router-dom";

// images
import hero from "../../assets/images/photos/hero-image.webp";

// button images
import mcircle from "../../assets/images/icons/m-circle.svg";



const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="leftSide">
            <h2 className="title">bulk m&m's</h2>
            <p className="text">celebrate sweetly</p>
            <p className="text bold">15% off bulk candy</p>
            <div className="buttons">
              <button className="leftButton hover">
                <Link to={"/design-your-own"}>
                  <img src={mcircle} alt="circled-m" />
                  <p className="buttonText">design your own</p>
                </Link>
              </button>
              <button className="rightButton">
                <Link to={"/peanut-mix"}>
                  <p className="buttonText">shop bulk candy</p>
                </Link>
              </button>
            </div>
          </div>
          <div className="rightSide">
            <div className="heroImage">
              <img src={hero} alt="zoom in on peanut and chocolate M&M'S" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero