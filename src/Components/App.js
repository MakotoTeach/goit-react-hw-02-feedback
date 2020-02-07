import React, { Component } from "react";
import FeedBackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistisc";
import Section from "./Section/Section";

export default class Feedback extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = type => {

    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = (totalV, goodV) => {
    return totalV > 0 && goodV > 0 ? Math.round((goodV / totalV) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(
      total,
      good
    );
    const options = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </>
    );
  }
}
