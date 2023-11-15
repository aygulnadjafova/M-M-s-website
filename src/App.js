// import router-dom elements
import { Route, Routes } from "react-router-dom";

// import Components
import Header from "./components/Header";
import Footer from "./components/Footer";

//import Pages
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
