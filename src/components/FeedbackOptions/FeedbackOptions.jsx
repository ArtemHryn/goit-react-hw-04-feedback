import { ButtonList, ButtonItem, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => (
        <ButtonItem key={option}>
          <Button type="button" name={option} onClick={onLeaveFeedback}>
            {buttonsName(option)}
          </Button>
        </ButtonItem>
      ))}
    </ButtonList>
  );
};

function  buttonsName (name) {
    return `${name[0].toUpperCase()}${name.slice(1, name.length)}`;
  };