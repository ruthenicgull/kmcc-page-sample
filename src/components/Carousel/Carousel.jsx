import styles from "./Carousel.module.css";

function Carousel() {
  return (
    <div className={styles.container}>
      <img src="/arrow.png" className={styles.car_left} />
      <div className={styles.content}>
        <img src="/office1.png" alt="#" className={styles.image} />
        <div className={styles.content_text}>
          <h1>Elevate your events with unforgettable experiences</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className={styles.button_group}>
            <button className={styles.button}>Contact</button>
            <button className={`${styles.button_outline}`}>Learn More</button>
          </div>
        </div>
      </div>
      <img src="/arrow.png" className={styles.car_right} />
    </div>
  );
}

export default Carousel;
