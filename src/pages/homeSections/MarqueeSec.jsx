import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

const MarqueeSec = () => {
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShouldPlay(true);
      } else {
        setShouldPlay(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="marquee">
      <Marquee autoFill play={shouldPlay} direction={"right"} speed={20}>
        <span>family</span>
        <span className="ampersant">&</span>
        <span>friends</span>{" "}
        <span className="ampersant" style={{ color: "red" }}>
          &
        </span>
        <span>giving</span>
        <span className="ampersant" style={{ color: "rgb(0, 115, 255)" }}>
          &
        </span>
        <span>celebration</span>
        <span className="ampersant">&</span>
        <span>holidays</span>
        <span className="ampersant" style={{ color: "red" }}>
          &
        </span>
        <span>joy</span>
        <span className="ampersant" style={{ color: "rgb(0, 115, 255)" }}>
          &
        </span>
      </Marquee>{" "}
      <Marquee autoFill play={shouldPlay} speed={20}>
        <span>stockings</span>
        <span className="ampersant">&</span>
        <span>ornaments</span>{" "}
        <span className="ampersant" style={{ color: "red" }}>
          &
        </span>
        <span>presents</span>
        <span className="ampersant" style={{ color: "rgb(0, 115, 255)" }}>
          &
        </span>
        <span>laughter</span>
        <span className="ampersant">&</span>
        <span>peace</span>
        <span className="ampersant" style={{ color: "red" }}>
          &
        </span>
        <span>love</span>
        <span className="ampersant" style={{ color: "rgb(0, 115, 255)" }}>
          &
        </span>
      </Marquee>
    </section>
  );
};

export default MarqueeSec;
