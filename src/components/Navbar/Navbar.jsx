import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.container}>
      <img src="/logo.png" alt="logo" className={styles.logo} />

      {isSmallScreen ? (
        <>
          <ul
            className={styles.menu}
            style={{ display: menuOpen ? "flex" : "none" }}
          >
            <button className={styles.close_menu_btn} onClick={closeMenu}>
              <IoMdClose />
            </button>
            <li className={styles.menu_item}>Home</li>
            <li className={styles.menu_item}>About Us</li>
            <li className={styles.menu_item}>Services</li>
            <li className={styles.menu_item}>Facilities</li>
            <li className={styles.menu_item}>Gallery</li>
            <li className={styles.menu_button}>Contact Us</li>
          </ul>
          <button
            className={styles.open_menu_btn}
            onClick={openMenu}
            style={{ display: menuOpen ? "none" : "inline" }}
          >
            <RxHamburgerMenu />
          </button>
        </>
      ) : (
        <>
          <ul className={styles.menu}>
            <li className={styles.menu_item}>Home</li>
            <li className={styles.menu_item}>About Us</li>
            <li className={styles.menu_item}>Services</li>
            <li className={styles.menu_item}>Facilities</li>
            <li className={styles.menu_item}>Gallery</li>
            <li className={styles.menu_button}>Contact Us</li>
          </ul>
        </>
      )}
    </nav>
  );
}

export default Navbar;
