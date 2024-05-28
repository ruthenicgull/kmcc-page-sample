// import styles from "./App.module.css";

import Contact from "./components/Contact/Contact";
import Demo from "./components/Demo/Demo";
import Facilities from "./components/Facilities/Facilities";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Landing from "./components/Landing/Landing";
import OurServices from "./components/OurServices/OurServices";
import WhyUs from "./components/WhyUs/WhyUs";

function App() {
  return (
    <>
      <Landing />
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
