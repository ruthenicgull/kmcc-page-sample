import styles from "./WhyUs.module.css";

function WhyUs() {
  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <h3 className={styles.small_header}>Way Choose Us?</h3>
        <h1 className={styles.big_header}>
          Let&apos;s Plan Your Next Event Together
        </h1>
        <p className={styles.info_body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <button className={styles.button}>About Us</button>
      </div>
      <img src="/events-collage.png" className={styles.events_collage}></img>
    </section>
  );
}

export default WhyUs;
