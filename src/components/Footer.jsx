import React from "react";
import footerStyles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerContent}>
        <div className={footerStyles.links}>
          <Link to="about/new">About Us</Link>
          <Link to="about/contact-us">Contact</Link>
        </div>
        <div className={footerStyles.socialMedia}>
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://instagram.com">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className={footerStyles.copyRight}>
          <p>
            © {new Date().getFullYear()} HIS PRESENCE CHURCH. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
