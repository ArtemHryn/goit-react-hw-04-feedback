import PropTypes from 'prop-types';
import { SectionEl, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionEl>
      <Title>{title}</Title>
      {children}
    </SectionEl>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};