import React from "react";
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';


function FeedBackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={styles.container}>
      {options.map((option, index) => (
        <button className={styles.button}
          key={index}
          style={{ textTransform: "capitalize" }}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}


FeedBackOptions.propTypes = {
  options:PropTypes.array.isRequired,
  onLeaveFeedback:PropTypes.func.isRequired
}

export default FeedBackOptions;
