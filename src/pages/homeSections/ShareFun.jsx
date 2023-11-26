// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// import required modules
import { FreeMode, Scrollbar } from "swiper/modules";

//import Slide images
import slideOne from "../../assets/images/photos/share-fun-1.webp";
import slideTwo from "../../assets/images/photos/share-fun-2.webp";
import slideThree from "../../assets/images/photos/share-fun-3.webp";
import slideFour from "../../assets/images/photos/share-fun-4.webp";
import slideFive from "../../assets/images/photos/share-fun-5.webp";

export default function App() {
  return (
    <section className="shareFun">
      <div className="container">
        <div className="row">
          <div className="titlePart">
            <h2 className="title">fun in every color</h2>
            <p className="text">
              Mention @mmschocolate or tag #mmssuperfan on Instagram or TikTok
              for a chance to be featured!
            </p>
          </div>
          <div className="mainPart">
            <Swiper
              breakpoints={{
                // when window width is >= 1024px
                1024: {
                  width: 1024,
                  slidesPerView: 3,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
                // when window width is >= 350px
                350: {
                  width: 350,
                  slidesPerView: 1,
                },
              }}
              freeMode={true}
              scrollbar={{
                draggable: true,
                dragSize: 400,
              }}
              modules={[FreeMode, Scrollbar]}
              className="swiper"
            >
              <SwiperSlide className="swiper-slide">
                <div className="slideOne">
                  <div className="slideImageOne">
                    <img src={slideOne} alt="slide-imagee" />
                  </div>
                  <p className="itemName">@candicemc</p>
                  <p className="hashtag">#shareyourfun</p>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide className="swiper-slide">
                <div className="slideTwo">
                  <div className="slideImageTwo">
                    <img src={slideTwo} alt="slide-imagee" />
                  </div>
                  <p className="itemName">@caltlyna</p>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide className="swiper-slide">
                <div className="slideThree">
                  <div className="slideImageThree">
                    <img src={slideThree} alt="slide-imagee" />
                  </div>
                  <p className="itemName">@ashleywhite123</p>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide className="swiper-slide">
                <div className="slideFour">
                  <div className="slideImageFour">
                    <img src={slideFour} alt="slide-imagee" />
                  </div>
                  <p className="itemName">@angelinaf</p>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide className="swiper-slide">
                <div className="slideFive">
                  <div className="slideImageFive">
                    <img src={slideFive} alt="slide-imagee" />
                  </div>
                  <p className="itemName">@jennsweeney</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
