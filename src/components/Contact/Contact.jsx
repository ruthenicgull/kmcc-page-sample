import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <img className={styles.image} src="/contact.png" alt="contact" />
        <div className={styles.contact_form}>
          <h2>Contact Us</h2>
          <form action="#" className={styles.form}>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="E-mail" />
            <input type="text" placeholder="Message" />
            <button
              className="filled-button"
              onClick={(event) => event.preventDefault()}
            >
              Send
            </button>
          </form>
        </div>
        <div className={styles.side_section}>
          <div className={styles.contact_details}>
            <p>Contact</p>
            <div className={styles.contact}>
              <p>kmcceventsauh@gmail.com</p>
              <p>+02 49119551</p>
            </div>
          </div>
          <div className={styles.based}>
            <p>Based in</p>
            <div className={styles.address}>
              <p>Alfalah Street, </p>
              <p>Abu Dhabi - UAE</p>
            </div>
          </div>
          <div className={styles.social_media}>
            <img src="/contact-images/Facebook.png" alt="fb" />
            <img src="/contact-images/Instagram.png" alt="ig" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
