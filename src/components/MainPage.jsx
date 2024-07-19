import MainStyles from "./MainPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const MainPage = () => {
  return (
    <div className={MainStyles.bg}>
      <div className={MainStyles.container}>
        <div className={MainStyles.message}>
          <h1>LOVING ACCEPTING FRIENDLY FUN</h1>
          <p>
            <i>
              Now thanks be to God who always leads us in triumph in Christ, and
              through us diffuses the fragrance of His knowledge in every
              place." 2 Corinthians 2:14
            </i>
          </p>
          <button>JOIN US FOR AN ONLINE SERVICE</button>
        </div>
        <div className={MainStyles.image}>
          <img
            src="https://images.unsplash.com/photo-1508829040592-72f179f8a73f?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="worship-image"
          />
        </div>
        <div className={MainStyles.overlay}></div>
      </div>
      <div className={MainStyles.schedule}>
        <div>
          <h1>SUNDAY SERVICE TIMES</h1>
          <p>9:30AM | 11:30AM</p>
        </div>
        <div>
          <h1>LOCATION</h1>
          <p>70 EDGEFIELD WAY,ST ALBERT, AB</p>
        </div>
      </div>

      <div className={MainStyles.media}>
        <h2>CONNECT WITH US</h2>
        <div className={MainStyles.mediaIcons}>
          <span>
            <FontAwesomeIcon icon={faFacebookF} className={MainStyles.social} />
          </span>
          <span>
            <FontAwesomeIcon icon={faInstagram} className={MainStyles.social} />
          </span>
          <span>
            <FontAwesomeIcon icon={faYoutube} className={MainStyles.social} />
          </span>
        </div>
      </div>

      <div className={MainStyles.pastors}>
        <h1>OUR PASTOR</h1>
        <div>
          <img
            src={
              "https://images.unsplash.com/photo-1616805765352-beedbad46b2a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={"his presence church pastor"}
          />
        </div>
        <div>
          <h2>LIVE WESIGE</h2>
          <p>
            Meet Pastor Live, a dedicated servant of God with a lifelong
            commitment to spiritual leadership and community building. Pastor
            John's journey in faith began at a vibrant church camp in
            Saskatchewan back in 1986, where his profound encounter with God set
            the course for his future. Since then, he has devoted over three
            decades to full-time ministry, touching lives and nurturing faith
            across communities.
            <br />
            <blockquote>
              <p>
                We believe Jesus is the CHAMPION of champions and He wants you
                to become a champion in every arena of life through a personal
                relationship with Him!
              </p>
              <footer>— Live Wesige</footer>
            </blockquote>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
