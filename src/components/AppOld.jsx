import React, { Component } from 'react';
import { Section } from './Section/Section.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import css from './App.module.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.onLeaveFeedback = this.onLeaveFeedback.bind(this);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  onLeaveFeedback = evt => {
    const stateName = evt.target.name;
    const { good, neutral, bad } = this.state;
    if (stateName === 'good') {
      this.setState({ [stateName]: good + 1 });
    } else if (stateName === 'neutral') {
      this.setState({ [stateName]: neutral + 1 });
    } else {
      this.setState({ [stateName]: bad + 1 });
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.floor((good / (good + neutral + bad)) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Section title="Please, leave your Feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {this.countTotalFeedback() === 0 ? (
          <p className={css.massege}>No feedback given</p>
        ) : (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    );
  }
}
