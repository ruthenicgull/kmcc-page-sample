import { useState } from "react";
import styles from "./Carousel.module.css";
import slides from "./slides.json";

function Carousel() {
  const [itemIndex, setItemIndex] = useState(0);

  function showNextSlide() {
    if (itemIndex === slides.length - 1) setItemIndex(0);
    else setItemIndex((itemIndex) => itemIndex + 1);
  }

  function showPrevSlide() {
    if (itemIndex === 0) setItemIndex(slides.length - 1);
    else setItemIndex((itemIndex) => itemIndex - 1);
  }

  return (
    <div className={styles.container}>
      <img
        src="/arrow.png"
        className={styles.car_left}
        onClick={showPrevSlide}
      />
      <div className={styles.content}>
        <img
          src={slides[itemIndex].imageUrl}
          alt="#"
          className={styles.image}
        />
        <div className={styles.content_text}>
          <h1>{slides[itemIndex].title}</h1>
          <p>{slides[itemIndex].description}</p>
          <div className={styles.button_group}>
            <button className={styles.button}>Contact</button>
            <button className={`${styles.button} ${styles.button_outline}`}>
              Learn More
            </button>
          </div>
        </div>
      </div>
      <img
        src="/arrow.png"
        className={styles.car_right}
        onClick={showNextSlide}
      />
    </div>
  );
}

export default Carousel;
