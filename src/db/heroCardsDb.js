// hero Icons
import heroIconOne from "../assets/images/photos/hero-card-icon-1.webp";
import heroIconTwo from "../assets/images/photos/hero-card-icon-2.webp";
import heroIconThree from "../assets/images/photos/hero-card-icon-3.webp";

// hero card images
import heroImgOne from "../assets/images/photos/hero-card-image-1.webp";
import heroImgTwo from "../assets/images/photos/hero-card-image-2.webp";
import heroImgThree from "../assets/images/photos/hero-card-image-3.webp";

const heroCardsDb = [
  {
    id: 1,
    icon: heroIconOne,
    image: heroImgOne,
    title: "stocking stuffers",
    info: "your stocking called. they asked for these.",
    link: "shop now",
    color: "#00a832",
  },
  {
    id: 2,
    icon: heroIconTwo,
    image: heroImgTwo,
    title: "holiday flavors",
    info: "it's beginning to look a lot like delicious",
    link: "shop all flavors",
    color: "#d70100",
  },
  {
    id: 3,
    icon: heroIconThree,
    image: heroImgThree,
    title: "holiday in the office",
    info: "spread some holiday cheer in the office this year",
    link: "shop now",
    color: "#ed9418",
  },
];
export default heroCardsDb;
