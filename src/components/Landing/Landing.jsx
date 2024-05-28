import Carousel from "../Carousel/Carousel";
import Navbar from "../Navbar/Navbar";
import styles from "./Landing.module.css";

function Landing() {
  return (
    <header className={styles.container}>
      <Navbar />
      <Carousel />
    </header>
  );
}

export default Landing;
