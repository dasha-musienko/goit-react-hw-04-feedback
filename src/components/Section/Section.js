import { SectionWrapper } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <h1>{title}</h1>
      {children}
    </SectionWrapper>
  );
};
