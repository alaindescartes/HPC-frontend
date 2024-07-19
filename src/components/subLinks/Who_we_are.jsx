import React from "react";
import styles from "./Who_we_are.module.css";

const WhoWeAre = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Who We Are</h1>
      <p className={styles.introduction}>
        We are Christian, Non-Denominational, Bible Based, Spirit-Filled, Faith
        Filled, Evangelical, Contemporary, Loving & Friendly.
      </p>
      <p className={styles.description}>
        That's a mouthful! But simply put, we believe in experiencing and
        communicating the reality of God's love, truth, and power with anyone,
        regardless of their church affiliation or background, who wants to know
        God in a real, meaningful, and relevant way through a personal
        relationship with Jesus Christ.
      </p>
      <p className={styles.churchName}>
        Champion City Church is a member church of Impacting Canada Ministries.
      </p>
      <h2 className={styles.coreHeader}>Our Core Beliefs</h2>
      <ul className={styles.coreBeliefs}>
        <li>In the Holy Scriptures as the inspired Word of God.</li>
        <li>
          In One God, eternally existent in three persons: Father, Son, and Holy
          Spirit.
        </li>
        <li>
          In the deity of our Lord Jesus Christ, His virgin birth, His sinless
          life, His miracles, His vicarious and atoning death through His shed
          blood, His bodily resurrection, His ascension, and His imminent return
          in power and glory.
        </li>
      </ul>
      <h2 className={styles.coreHeader}>Our Purpose</h2>
      <p className={styles.purpose}>
        To preach the gospel and make disciples! We aim to reach out to the lost
        and wounded community at large through evangelism, bring them into
        worship with God, and fellowship with other believers.
      </p>
      <h2 className={styles.coreValuesHeader}>Our Core Values</h2>
      <ul className={styles.coreValues}>
        <li>L.A.F.F. - Love, Acceptance, Friendly & Fun.</li>
        <li>Relevant and practical Bible-based teaching.</li>
        <li>Contemporary Praise & Worship.</li>
      </ul>
    </div>
  );
};

export default WhoWeAre;
