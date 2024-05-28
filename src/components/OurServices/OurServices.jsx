import styles from "./OurServices.module.css";
import carouselData from "./carousel.json";

function OurServices() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.big_heading}>
            Always Provide The Best Service
          </h1>
          <div className={styles.header_side}>
            <h3 className={styles.small_heading}>Our Services</h3>
            <p className={styles.header_side_text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore{" "}
            </p>
          </div>
        </div>
        <div className={styles.carousel}>
          {carouselData.map((item, index) => (
            <div className={styles.carousel_item} key={index}>
              <img
                className={styles.item_image}
                src={item.image_url}
                alt={item.text}
              />
              <span className={styles.item_text}>{item.text}</span>
            </div>
          ))}
        </div>
        <button className={styles.button}>View All</button>
      </div>
    </section>
  );
}

export default OurServices;
