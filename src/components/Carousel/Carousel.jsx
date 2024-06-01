import { useCallback, useEffect, useState } from "react";
import styles from "./Carousel.module.css";
import slides from "./slides.json";

function Carousel() {
  const [itemIndex, setItemIndex] = useState(0);

  // const autoRollEffect = useCallback(() => {
  //   if (itemIndex >= slides.length - 1) setItemIndex(0);
  //   else setItemIndex((prevIndex) => prevIndex + 1);
  // }, [itemIndex]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     autoRollEffect();
  //   }, 3000);
  // }, [autoRollEffect]);

  function showNextSlide() {
    setItemIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }

  function showPrevSlide() {
    setItemIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      showNextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [itemIndex]);

  return (
    <div className={styles.container}>
      <img
        src="/arrow.png"
        className={styles.car_left}
        onClick={showPrevSlide}
      />
      <div key={itemIndex} className={styles.content}>
        <img
          src={slides[itemIndex]?.imageUrl}
          alt="#"
          className={styles.image}
        />
        <div className={styles.content_text}>
          <h1>{slides[itemIndex]?.title}</h1>
          <p>{slides[itemIndex]?.description}</p>
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
