import PropTypes from 'prop-types';
import { StatItem, Stat } from './Statistics.styled';

export const Statistics = props => {
  const { positivePercentage } = props;
  return (
    <ul>
      {['good', 'neutral', 'bad', 'total'].map(option => (
        <StatItem key={option}>
          <Stat>
            {buttonsName(option)}: {props[option]}
          </Stat>
        </StatItem>
      ))}
      <li>
        <p>Positive feedback: {positivePercentage}%</p>
      </li>
    </ul>
  );
};

function buttonsName(name) {
  return `${name[0].toUpperCase()}${name.slice(1, name.length)}`;
}

Statistics.propTypes = {
  props: PropTypes.exact({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }),
};