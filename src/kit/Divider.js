//import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color } from './commons/basics';

const Divider = styled.hr`
  border: none;
  height: 1px;
  margin: 0;
  flex-shrink: 0;
  background-color: ${props => props.light ? 
    color.divider.light : color.divider.default};
`;

export default Divider;


Divider.propTypes = {
  light: PropTypes.bool
};

Divider.defaultProps = {
  light: false
};
