import styles from "./Happening.module.css";

const Happening = () => {
    return(
        <div className={styles.container}>
            <div className={styles.upcoming}>
                <h1>OUR EVENTS</h1>
            </div>
            <div className={styles.events}>
                <div className={styles.eventCard}>
                    <img src="/images/event1.JPG" alt="eventCard" />
                </div>
                <div className={styles.eventCard}>
                    <img src="/images/event2.JPG" alt="eventCard"/>
                </div>
                <div className={styles.eventCard}>
                    <img src="/images/event3.JPG" alt="eventCard"/>
                </div>
            </div>
        </div>
    )
}
export default Happening;