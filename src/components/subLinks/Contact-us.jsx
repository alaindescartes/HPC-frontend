import ContactUs_styles from "./Contact-us.module.css";
import { Form, Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className={ContactUs_styles.container}>
      <h1>CONTACT US</h1>
      <h1>HIS PRESENCE CHURCH</h1>
      <h2>70 EDGEFIELD WAY, ST ALBERT, AB</h2>
      <a
        href="https://www.google.com/maps/search/?api=1&query=70+Edgefield+Way+St+Albert+AB"
        className={ContactUs_styles.direction}
        target="_blank"
        rel="noopener noreferrer"
      >
        DIRECTIONS
      </a>
      <h2>OFFICE HOURS</h2>
      <p>MONDAY T0 FRIDAY 9AM-4PM</p>
      <h2>PHONE</h2>
      <p>xxx-xxx-xxxx</p>
      <h2>EMAIL</h2>
      <p>hisPresenceChurch@gmail.com</p>
      <div className={ContactUs_styles.form}>
        <Form method="post" action="/events">
          <label htmlFor="firstname">FIRSTNAME</label>
          <input type="text" id="firstname" name="firstname" required />
          <label htmlFor="lastname">LASTNAME</label>
          <input type="text" id="lastname" name="lastname" required />
          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">SUBJECT</label>
          <textarea id="message" name="message" required />
          <button type="submit">SUBMIT</button>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
