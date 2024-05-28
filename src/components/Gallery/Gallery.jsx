import styles from "./Gallery.module.css";
import galleryData from "./gallery.json";

function Gallery() {
  return (
    <section className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.heading}>Gallery</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod tempor
          incididunt{" "}
        </p>
      </div>
      <div className={styles.photo_grid}>
        {galleryData.map((item, index) => (
          <div className={styles.grid_item} key={index}>
            <img
              className={styles.image}
              src={item.image_url}
              alt={item.title}
            />
            <h4 className={styles.image_title}>{item.title}</h4>
            <p className={styles.image_description}>{item.description}</p>
          </div>
        ))}
      </div>
      <button className={`${styles.button} outline-button`}>View All</button>
    </section>
  );
}

export default Gallery;
