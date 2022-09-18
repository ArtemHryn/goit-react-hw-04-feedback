import PropTypes from 'prop-types';
import { buttonsName } from '../helper';
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


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string,).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};