import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import GlobalStyle from './Global';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickButton = e => {
    switch (e.target.name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.floor((+good * 100) / +countTotalFeedback());
  };
  const stats = ['good', 'neutral', 'bad'];

  return (
    <>
      <GlobalStyle />
      <Section title="Please leave feedback">
        <FeedbackOptions options={stats} onLeaveFeedback={onClickButton} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};