import Carousel from "../Carousel/Carousel";
import Navbar from "../Navbar/Navbar";
import styles from "./Landing.module.css";

function Landing({ sm }) {
  return (
    <header className={styles.container}>
      <Navbar sm={sm} />
      <Carousel />
    </header>
  );
}

export default Landing;
