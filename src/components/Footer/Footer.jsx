import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.details}>
          <img src="/logo.png" alt="#" />
          <p>
            Eventick is a global self-service ticketing platform for live
            experiences that allows anyone to create, share, find and attend
            events that fuel their passions and enrich their lives.
          </p>
        </div>
        <div className={styles.option_list}>
          <strong>Plan Events</strong>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Facilities</li>
            <li>Gallery</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={styles.option_list}>
          <strong>Services</strong>
          <ul>
            <li>Wedding</li>
            <li>Entertainments</li>
            <li>Decor</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div className={styles.option_list}>
          <strong>Stay in the loop</strong>
          <div>
            <p>
              Join our mailing list to stay in the loop with our newest for
              Event and concert
            </p>
            <form action="#" className={styles.mailing_list_form}>
              <input type="text" placeholder="Enter your email address" />
              <button type="Submit" className="filled-button">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
