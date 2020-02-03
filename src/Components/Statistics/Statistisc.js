import React from "react";
import Notification from "../Notification";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={styles.container}>
      {total > 0 ? (
        <>
          <p className={styles.statItem}>
            Good:<span>{good}</span>
          </p>
          <p className={styles.statItem}>
            Neutral:<span>{neutral}</span>
          </p>
          <p className={styles.statItem}>
            Bad:<span>{bad}</span>
          </p>
          <p className={styles.statItem}>
            Total:<span>{total}</span>
          </p>
          <p className={styles.statItem}>
            Positive feedback:<span>{positivePercentage}%</span>
          </p>{" "}
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};

export default Statistics;
