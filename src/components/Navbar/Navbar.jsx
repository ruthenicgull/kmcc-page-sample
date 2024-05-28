import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.container}>
      <img src="/logo.png" alt="logo" className={styles.logo} />
      {/* <div className={styles.nav_controls}></div> */}
      <ul className={styles.menu}>
        <li className={styles.menu_item}>Home</li>
        <li className={styles.menu_item}>About Us</li>
        <li className={styles.menu_item}>Services</li>
        <li className={styles.menu_item}>Facilities</li>
        <li className={styles.menu_item}>Gallery</li>
        <li className={styles.menu_button}>Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
