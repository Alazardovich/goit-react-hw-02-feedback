import './App.css';
import React, { Component } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOption/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    let total = 0;
    for (const value of values) {
      total = total + value;
    }
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback(this.state)) * 100);
  };

  render() {
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const total = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={keys} leaveFeedback={this.onLeaveFeedback} />
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
      </div>
    );
  }
}

export default App;
