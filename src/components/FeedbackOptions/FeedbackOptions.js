import { ButtonsWrapper, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsWrapper>
      {Object.keys(options).map(option => {
        return (
          <li key={option}>
            <Button name={option} onClick={() => onLeaveFeedback(option)}>
              {option}
            </Button>
          </li>
        );
      })}
    </ButtonsWrapper>
  );
};
