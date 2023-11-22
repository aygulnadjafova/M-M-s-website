// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";

//import Slide images
import slideOne from "../../assets/images/photos/share-fun-1.webp";
import slideTwo from "../../assets/images/photos/share-fun-2.webp";
import slideThree from "../../assets/images/photos/share-fun-3.webp";
import slideFour from "../../assets/images/photos/share-fun-4.webp";
// import slideFive from "../../assets/images/photos/share-fun-5.webp";

import svgOne from "../../assets/images/icons/rainbow.svg"

const ShareFun = () => {
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
              slidesPerView={4}
              scrollbar={{
                draggable: true,
                dragSize: 500,
              }}
              modules={[Scrollbar]}
              className="mySwiper"
            >
              <SwiperSlide className="slide">
                <div className="slideItem">
                  <div className="slideImage">
                    <img src={slideOne} alt="slide-imagee" />
                  </div>
                  <p className="itemName">@candicemc</p>
                  <span className="svgOne"><img src={svgOne} alt="" /></span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide">Slide 2</SwiperSlide>
              <SwiperSlide className="slide">Slide 3</SwiperSlide>
              <SwiperSlide className="slide">Slide 4</SwiperSlide>
              <SwiperSlide className="slide">Slide 5</SwiperSlide>
              <SwiperSlide className="slide">Slide 6</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareFun;
