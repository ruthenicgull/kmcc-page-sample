import { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./Demo.module.css";
import Contact from "../Contact/Contact";

function Demo() {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
    console.log("close", showModal);
  }

  function openModal() {
    setShowModal(true);
    console.log("open", showModal);
  }

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
          onClick={openModal}
        />
      </div>
      {showModal && (
        <Modal closeModal={closeModal}>
          <video
            src="/videos/stock_footage.mp4"
            className={styles.video}
            controls
          />
        </Modal>
      )}
    </section>
  );
}

export default Demo;
