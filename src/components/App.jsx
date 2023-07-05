import React, { Component } from 'react';
import Container from './Container';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notifications from './Notifications';

//====================================================

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = e => {
    const currentBtnValue = e.currentTarget.value;
    this.setState(prevState => {
      return {
        ...prevState,
        [currentBtnValue]: prevState[currentBtnValue] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const statesValueArr = Object.values(this.state);
    return statesValueArr.reduce((acc, value) => {
      acc += value;
      return acc;
    });
  };
  countPositiveFeedbackPercentage = () => {
    return Math.trunc((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const btnSense = Object.keys(this.state);
    const {
      onLeaveFeedback,
      state,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    return (
      <Container>
        <Section title="Please Leave Your Feedback">
          <FeedbackOptions
            options={btnSense}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        {countTotalFeedback() === 0 ? (
          <Notifications message="No Feedback Given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              state={state}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </Container>
    );
  }
}

export default App;
