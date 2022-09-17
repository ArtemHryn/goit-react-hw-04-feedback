import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import GlobalStyle from './Global';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickButton = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (totalFeedback, feedbackNumbers) => {
        return totalFeedback + feedbackNumbers;
      },
      0
    );
  };
  countPositiveFeedbackPercentage = () => {
    return Math.floor((+this.state.good * 100) / +this.countTotalFeedback());
  };
  render() {
    const stats = Object.keys(this.state);
    return (
      <>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={stats}
            onLeaveFeedback={this.onClickButton}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          /> : <Notification message="There is no feedback"/>}
        </Section>
      </>
    );
  }
}
