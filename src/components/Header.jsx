import { Link } from "react-router-dom";
import { useState } from "react";

// Logo
import logo from "../assets/images/icons/logo.png";

// Navlink images
import products from "../assets/images/icons/products.svg";
import celebrate from "../assets/images/icons/celebrate.svg";
import explore from "../assets/images/icons/explore.svg";
import business from "../assets/images/icons/business.svg";
import productsHover from "../assets/images/icons/products-hover.svg";
import celebrateHover from "../assets/images/icons/celebrate-hover.svg";
import exploreHover from "../assets/images/icons/explore-hover.svg";
import businessHover from "../assets/images/icons/business-hover.svg";

// userArea icons
import mcircle from "../assets/images/icons/m-circle.svg";
import threeM from "../assets/images/icons/three-ms.svg";
import search from "../assets/images/icons/search.svg";
import language from "../assets/images/icons/english.svg";
import user from "../assets/images/icons/user.svg";
import cart from "../assets/images/icons/cart.svg";

// Burger Menu icons
import burgerIcon from "../assets/images/icons/burger-menu.svg";
import closeBurgerIcon from "../assets/images/icons/opened-burger.svg";

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <header className="header">
      <div className={burgerMenu ? "mobileMenu active" : "mobileMenu"}>
        <button
          onClick={() => {
            setBurgerMenu(!burgerMenu);
          }}
        >
          <img src={closeBurgerIcon} alt="burger-menu-icon" />
        </button>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <button className="userButtons">
          <img title="0 item(s) in your cart" src={cart} alt="cart-icon" />
        </button>
      </div>
      <div className="topPart">
        <div className="container">
          <p className="discount">
            Up to <span className="percentage">-20%</span> with the code
            <span className="promocode"> FLASHPEACH</span>. More{" "}
            <Link to={"promo-details"} className="link">
              details
            </Link>
          </p>
        </div>
      </div>
      <div className="bottomPart">
        <div className="row">
          <div
            className="burgerIcon"
            onClick={() => {
              setBurgerMenu(!burgerMenu);
            }}
          >
            <img src={burgerIcon} alt="burger-icon" />
          </div>
          <div className="mobileHeader">
            <nav className="navBar">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <ul className="navList">
                <li className="navItem">
                  <div className="itemDiv">
                    <img className="image" src={products} alt="products-icon" />
                    <img
                      className="imgHover"
                      src={productsHover}
                      alt="products-icon"
                    />
                  </div>
                  <span className="iconName">products</span>
                </li>
                <li className="navItem">
                  <div className="itemDiv">
                    <img src={celebrate} alt="celebrate-icon" />
                    <img
                      className="imgHover"
                      src={celebrateHover}
                      alt="celebrate-icon"
                    />
                  </div>
                  <span className="iconName">celebrate</span>
                </li>
                <li className="navItem">
                  <div className="itemDiv">
                    <img src={explore} alt="explore-icon" />
                    <img
                      className="imgHover"
                      src={exploreHover}
                      alt="explore-icon"
                    />
                  </div>
                  <span className="iconName">explore</span>
                </li>
                <li className="navItem">
                  <div className="itemDiv">
                    <img src={business} alt="business-icon" />
                    <img
                      className="imgHover"
                      src={businessHover}
                      alt="business-icon"
                    />
                  </div>
                  <span className="iconName">business</span>
                </li>
              </ul>
            </nav>
            <div className="buttons">
              <button className="headerButton">
                <Link to={"/design-your-own"}>
                  <img src={mcircle} alt="circled-m" />
                  <p className="buttonText">design your own</p>
                </Link>
              </button>
              <button className="headerButton">
                <Link to={"/peanut-mix"}>
                  <img src={threeM} alt="three-ms" />
                  <p className="buttonText">mix your M&M’S Peanut</p>
                </Link>
              </button>
            </div>
          </div>
          <ul className="userAreaList">
            <li className="userItem">
              <button className="userButtons">
                <img title="search" src={search} alt="search-icon" />
              </button>
            </li>
            <li className="userItem hidden">
              <button className="userButtons lng">
                <img title="change-locale" src={language} alt="language-icon" />
                <title>change locale</title>
              </button>
            </li>
            <li className="userItem hidden">
              <Link to={"/sign-in"} className="userButtons">
                <img title="sign-in" src={user} alt="user-icon" />
              </Link>
            </li>
            <li className="userItem">
              <button className="userButtons">
                <img
                  title="0 item(s) in your cart"
                  src={cart}
                  alt="cart-icon"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
