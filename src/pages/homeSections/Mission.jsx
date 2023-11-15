import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <section className="mission">
      <div className="container">
        <div className="row">
          <div className="textPart">
            <h2 className="title">our mission</h2>
            <p className="text">
              M&M’S creates a world where everyone feels they belong through the
              power of fun to include everyone.
            </p>
            <button className="button">
              <Link to={"/explore"}>
                <p className="buttonText">learn more about our mission</p>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="imgPart">
        <div className="bgImage"></div>
      </div>
    </section>
  );
};

export default Mission;
