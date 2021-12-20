import PropTypes from 'prop-types';
import { ContainerSection, Title } from './CSSSection';

function Section({ title, children }) {
  return (
    <ContainerSection>
      {title && <Title>{title}</Title>}
      {children}
    </ContainerSection>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Section;
