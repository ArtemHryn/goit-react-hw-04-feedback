import { SectionEl, Title } from './Section.styled';

export const Section = ({ title, children }) => {
    return (<SectionEl>
        <Title>{title}</Title>
        {children}
    </SectionEl>)
}