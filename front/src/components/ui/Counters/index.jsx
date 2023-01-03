import React from "react";
import styles from "./styles.module.scss";

const counters = {
  minutes: 7,
  workouts: 1,
  kgs: 5,
};

function Counters() {
  return (
    <div className={styles.wrapper}>
      {Object.entries(counters).map((el) => (
        <div className={styles.count} key={el[0]}>
          <div className={styles.heading}>{el[0]}</div>
          <div className={styles.number}>{el[1]}</div>
        </div>
      ))}
    </div>
  );
}

export default Counters;
