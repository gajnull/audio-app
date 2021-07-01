import styled from 'styled-components';
import PropTypes from 'prop-types';

import { fonts } from './commons/basics';


const Typography = styled.span`
  ${props => fonts[props.variant]}
  ${props => props.noWrap ? fonts.noWrap : ""}
`;

export default Typography;


Typography.propTypes = {
  variant: PropTypes.string,
  noWrap: PropTypes.bool
};

Typography.defaultProps = {
  variant: 'body1',
  noWrap: false,
};