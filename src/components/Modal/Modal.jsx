import styles from "./Modal.module.css";
import { IoIosClose } from "react-icons/io";

function Modal({ children, closeModal }) {
  return (
    <div className={styles.container} onClick={closeModal}>
      <div
        className={styles.dialog}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
        <button className={styles.close_button} onClick={closeModal}>
          <IoIosClose />
        </button>
      </div>
    </div>
  );
}

export default Modal;
