// import styles from "./App.module.css";

import { useEffect, useState } from "react";
import Contact from "./components/Contact/Contact";
import Demo from "./components/Demo/Demo";
import Facilities from "./components/Facilities/Facilities";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Landing from "./components/Landing/Landing";
import OurServices from "./components/OurServices/OurServices";
import WhyUs from "./components/WhyUs/WhyUs";

function App() {
  const [sm, setSm] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSm(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Landing sm={sm} />
      <WhyUs />
      <OurServices />
      <Facilities />
      <Demo />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
