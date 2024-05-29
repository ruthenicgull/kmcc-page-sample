import styles from "./Facilities.module.css";

function Facilities() {
  return (
    <section className={styles.container}>
      <img
        src="/facilities-images/event-collage-2.png"
        className={styles.events_collage}
      ></img>
      <div className={styles.info}>
        <h3 className={styles.small_header}>Way Choose Us?</h3>
        <h1 className={styles.big_header}>
          Let&apos;s Plan Your Next Event Together
        </h1>
        <div className={styles.info_body}>
          <p className={styles.info_body_leader}>
            Lorem ipsum dolor sit amet, consectetur dipiscing elit eius mod
            tempor incididunt ut labore{" "}
          </p>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <img
                className={styles.list_item_bullet}
                src="/facilities-images/list-bullet.png"
                alt="#"
              />
              <div className={styles.list_item_body}>
                <p className={styles.list_item_header}>We are Committed</p>
                <p className={styles.list_item_body}>
                  Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                  tempor incididunt{" "}
                </p>
              </div>
            </li>
            <li className={styles.list_item}>
              <img
                className={styles.list_item_bullet}
                src="/facilities-images/list-bullet.png"
                alt="#"
              />
              <div className={styles.list_item_body}>
                <p className={styles.list_item_header}>We are Committed</p>
                <p className={styles.list_item_body}>
                  Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                  tempor incididunt{" "}
                </p>
              </div>
            </li>
            <li className={styles.list_item}>
              <img
                className={styles.list_item_bullet}
                src="/facilities-images/list-bullet.png"
                alt="#"
              />
              <div className={styles.list_item_body}>
                <p className={styles.list_item_header}>We are Committed</p>
                <p className={styles.list_item_body}>
                  Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                  tempor incididunt{" "}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <button className={`${styles.button} outline-button`}>View All</button>
      </div>
    </section>
  );
}

export default Facilities;
