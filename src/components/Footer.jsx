// import Footer background
import footerDesktop from "../assets/images/photos/purpose-footer-with-purple-desktop.webp";

// import Footer icons
import storeIcon from "../assets/images/icons/location.svg";
import contactIcon from "../assets/images/icons/contact.svg";
import externalLink from "../assets/images/icons/external-link.svg";

// import social icons
import instagram from "../assets/images/socials/instagram.svg";
import facebook from "../assets/images/socials/facebook.svg";
import twitter from "../assets/images/socials/twitter.svg";
import youtube from "../assets/images/socials/youtube.svg";
import pinterest from "../assets/images/socials/pinterest.svg";
import mars from "../assets/images/socials/mars.svg";
import logo from "../assets/images/socials/mars-box.svg";
import arrowRight from "../assets/images/icons/to-right.svg";

// import Mars box images
import snickers from "../assets/images/mars-box/Snickers.webp";
import twix from "../assets/images/mars-box/Twix.webp";
import celebrations from "../assets/images/mars-box/Celebrations.webp";
import marss from "../assets/images/mars-box/Mars.webp";
import closeMarsBox from "../assets/images/icons/opened-burger.svg";

// import router-dom elements
import { Link } from "react-router-dom";

import { useState } from "react";

const Footer = () => {
  const [openMars, setOpenMars] = useState(false);

  return (
    <section className="footer">
      <div className={openMars ? "marsDiv" : "marsDiv hidden"}>
        <div className="marsBox">
          <div className="closeIcon">
            <img
              onClick={() => {
                setOpenMars(!openMars);
              }}
              src={closeMarsBox}
              alt="closing-icon"
            />
          </div>
          <div className="topPart">
            <div className="logo">
              <img src={logo} alt="mars-logo" />
            </div>
            <h2 className="title">our family of brands</h2>
          </div>
          <div className="brands">
            <Link
              to={"https://www.snickers.co.uk/"}
              target="_blank"
              className="brandImg"
            >
              <img src={snickers} alt="brand-img" />
            </Link>{" "}
            <Link
              to={"https://www.twix.co.uk/"}
              target="_blank"
              className="brandImg"
            >
              <img src={twix} alt="brand-img" />
            </Link>{" "}
            <Link
              to={"https://www.celebrations.co.uk/"}
              target="_blank"
              className="brandImg"
            >
              <img src={celebrations} alt="brand-img" />
            </Link>{" "}
            <Link
              to={"https://www.marsbar.co.uk/"}
              target="_blank"
              className="brandImg"
            >
              <img src={marss} alt="brand-img" />
            </Link>
          </div>
          <button className="marsBoxButton">
            <Link
              to={"https://gbr.mars.com/made-by-mars/mars-wrigley"}
              target="_blank"
              className="button"
            >
              view all brands
            </Link>
          </button>
        </div>
      </div>
      <div className="footerImage">
        <div className="imagePart ">
          <img src={footerDesktop} alt="purpose-footer-with-purple-desktop" />
        </div>
      </div>
      <div className="footerInfo">
        <div className="container">
          <div className="contactDetails">
            <div className="contactDetail">
              <div className="detailImage">
                <Link to={"/explore/mms-stores"}>
                  <img src={storeIcon} alt="store-icon" />
                </Link>
              </div>
              <div className="detailInfo">
                <h3 className="title">find a store</h3>
                <p className="text">
                  Visit our flagship{" "}
                  <Link to={"/explore/mms-stores"}>M&M'S stores</Link> around
                  the globe.
                </p>
              </div>
            </div>
            <div className="contactDetail">
              <div className="detailImage">
                <Link to={"tel: +448081010061"}>
                  <img src={contactIcon} alt="contact-icon" />
                </Link>
              </div>
              <div className="detailInfo">
                <h3 className="title">contact us</h3>
                <p className="text">
                  <Link to={"tel: +448081010061"}>+448081010061</Link> Mon -
                  Fri, 8am - 4:00 pm
                </p>
              </div>
            </div>
          </div>
          <div className="footerLinks">
            <div className="leftSide">
              <h2 className="title">
                join the community for all deals and offers
              </h2>
              <div className="form">
                <form>
                  <div className="inputDiv">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address*"
                      className="input"
                    />
                  </div>
                  <div className="policy">
                    <p>
                      By clicking the submit button, you confirm that you are
                      over the age of 16, are willing to receive marketing
                      communications from M&M'S and agree to our{" "}
                      <Link to={"https://www.mars.com/legal-uk"} target="_blank">
                        Privacy Policy{" "}
                        <img src={externalLink} alt="external-link" />
                      </Link>
                    </p>
                  </div>
                  <div className="signupButton">
                    <button type="submit">sign up now</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="rightSide">
              <div className="links">
                <h4 className="title">Customer service</h4>
                <ul className="list">
                  <li className="listItem">
                    <Link to={"/shipping-information"}>
                      Shipping Information
                    </Link>
                  </li>
                  <li className="listItem">
                    <Link to={"/term-conditions"}>Terms & Conditions</Link>
                  </li>
                  <li className="listItem">
                    <Link to={"/faq"}>FAQs</Link>
                  </li>
                  <li className="listItem">
                    <Link to={"order-status"}>Order status</Link>
                  </li>
                  <li className="listItem">
                    <Link to={"contact-us"}>Contact us</Link>
                  </li>
                </ul>
              </div>
              <div className="links">
                <h4 className="title">about us</h4>
                <ul className="list">
                  <li className="listItem">
                    <Link to={"/mms-stores"}>Our stores</Link>
                  </li>
                  <li className="listItem">
                    <Link to={"https://careers.mars.com/uk/en"} target="_blank">
                      Careers
                      <img src={externalLink} alt="external-link" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="socials">
                <h4 className="title">connect with us</h4>
                <ul className="socialList">
                  <li className="socialItem">
                    <Link
                      to={"/sign-https://www.instagram.com/mmsuk"}
                      target="_blank"
                      className="userButtons"
                    >
                      <img src={instagram} alt="user-icon" />
                    </Link>
                  </li>{" "}
                  <li className="socialItem">
                    <Link
                      to={"https://www.facebook.com/mmsuk"}
                      target="_blank"
                      className="userButtons"
                    >
                      <img src={facebook} alt="user-icon" />
                    </Link>
                  </li>{" "}
                  <li className="socialItem">
                    <Link
                      to={"https://twitter.com/mmsuk"}
                      target="_blank"
                      className="userButtons"
                    >
                      <img src={twitter} alt="user-icon" />
                    </Link>
                  </li>{" "}
                  <li className="socialItem">
                    <Link
                      to={
                        "https://www.youtube.com/channel/UCBPbFTz9GThomkxqr3WENvQ/featured"
                      }
                      target="_blank"
                      className="userButtons"
                    >
                      <img src={youtube} alt="user-icon" />
                    </Link>
                  </li>{" "}
                  <li className="socialItem">
                    <Link
                      to={"https://www.pinterest.com/mmschocolate/"}
                      target="_blank"
                      className="userButtons"
                    >
                      <img src={pinterest} alt="user-icon" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="marsSettings">
            <div className="leftSide">
              <div
                className="marsImage"
                onClick={() => {
                  setOpenMars(!openMars);
                }}
              >
                <img src={mars} alt="mars-icon" />
                <img src={arrowRight} alt="arrow-right" />
              </div>
            </div>
            <div className="rightSide">
              <div className="links">
                <ul className="list">
                  <li className="listItem">
                    <Link to={""}>Cookies Settings</Link>
                  </li>
                  <li className="listItem">
                    <Link to={"https://careers.mars.com/uk/en"} target="_blank">
                      Privacy Statement
                      <img src={externalLink} alt="external-link" />
                    </Link>
                  </li>{" "}
                  <li className="listItem">
                    <Link to={"https://careers.mars.com/uk/en"} target="_blank">
                      Legal Notice
                      <img src={externalLink} alt="external-link" />
                    </Link>
                  </li>{" "}
                  <li className="listItem">
                    <Link to={"https://careers.mars.com/uk/en"} target="_blank">
                      Cookies Notice
                      <img src={externalLink} alt="external-link" />
                    </Link>
                  </li>{" "}
                  <li className="listItem">
                    <Link to={"https://careers.mars.com/uk/en"} target="_blank">
                      Accessibility
                      <img src={externalLink} alt="external-link" />
                    </Link>
                  </li>{" "}
                  <li className="listItem">
                    <Link to={"https://careers.mars.com/uk/en"} target="_blank">
                      Note to Parents
                      <img src={externalLink} alt="external-link" />
                    </Link>
                  </li>{" "}
                  <li className="listItem">
                    <Link to={"https://careers.mars.com/uk/en"} target="_blank">
                      Modern Slavery Act
                      <img src={externalLink} alt="external-link" />
                    </Link>
                  </li>{" "}
                  <li className="listItem">
                    <Link to={"https://careers.mars.com/uk/en"} target="_blank">
                      Supply Chain Act
                      <img src={externalLink} alt="external-link" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="copy">
                © 2023 MMS.COM. Mars Incorporated and its affiliates. All Rights
                Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
