import React from "react";
import styles from "./FaqsStyles.module.css";

const Faqs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Frequently Asked Questions</h1>
      <div className={styles.content}>
        <h2>How do I get to the church?</h2>
        <p>
          Our Sunday morning services are held at 12709-52 St. in North
          Edmonton. There is a large parking lot just south of the building, as
          well as limited parking on the north side. Friendly greeters will be
          waiting for your arrival. <a href="/map">Click here for a map.</a>
        </p>

        <h2>What can I expect when I come?</h2>
        <p>
          There are 2 services on Sunday to choose from: 9:30 & 11:30 am. You
          can expect each service to run about an hour and a half. Come a bit
          earlier to relax and enjoy our FREE coffee from our Champion's Cup
          Cafe. This area is open 30 min before each service, and immediately
          following the service. Feel free to bring a coffee into the service in
          a spill-proof cup.
        </p>

        <h2>Child Check-In</h2>
        <p>
          If you have children under 11 yrs, you will be shown where the
          check-in for children's church and nursery are. We offer four age
          appropriate classes: Wee Winners 0-23 months, Mighty Tikes 2 & 3 yrs,
          Champs Class 4 & 5 yrs, and All Stars 6-11 yrs. All of our staff are
          loving & caring individuals who have been cleared through Police
          checks and child intervention screening.
        </p>

        <h2>Do I have to give money?</h2>
        <p>
          No. While scripture encourages tithes and offerings, it's not
          mandatory. If you decide to give, you can do it at the Giving Stations
          in the church lobby or by going online.
        </p>

        <h2>Do I have to participate in any way?</h2>
        <p>
          Nope. Our worship service is contemporary and upbeat, but there is no
          pressure to participate in any specific way.
        </p>

        <h2>What do I wear?</h2>
        <p>
          There is no dress code. Whether you're in a suit or shorts and a
          T-shirt, you won't feel out of place. Our main focus is on your
          presence, not fashion!
        </p>
      </div>
    </div>
  );
};

export default Faqs;
