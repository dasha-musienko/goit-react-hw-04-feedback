import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Layout } from './StylesComponents/Layout.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leavesFeedback = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => acc + el, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positive = this.state.good;

    return total ? Math.round((positive * 100) / total) : 0;
  };

  render() {
    const options = this.state;
    const { good, neutral, bad } = options;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.leavesFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback!" />
          )}
        </Section>

        <GlobalStyle />
      </Layout>
    );
  }
}
