import { useState } from 'react';
import { Section } from './Section/Section.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import css from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = evt => {
    const stateName = evt.target.name;

    if (stateName === 'good') {
      setGood(good + 1);
    } else if (stateName === 'neutral') {
      setNeutral(neutral + 1);
    } else {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / (good + neutral + bad)) * 100);
  };

  return (
    <Section title="Please, leave your Feedback">
      <FeedbackOptions
        // options={('good', 'neutral', 'bad')}
        onLeaveFeedback={onLeaveFeedback}
      />
      {countTotalFeedback() === 0 ? (
        <p className={css.massege}>No feedback given</p>
      ) : (
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      )}
    </Section>
  );
}
