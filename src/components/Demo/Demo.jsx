import styles from "./Demo.module.css";

function Demo() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <div className={styles.left_content}>
          <h1 className={styles.content_heading}>
            Are You Ready To Work With Us Now?
          </h1>
          <p className={styles.content_body}>
            What do you think after seeing the good response from our previous
            customers
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <img
          className={styles.thumbnail}
          src="/demo-images/video-thumbnail.png"
          alt="video-thumbnail"
        />
        <img
          className={styles.play_button}
          src="/demo-images/video-play-button.png"
          alt="play-button"
        />
      </div>
    </section>
  );
}

export default Demo;
