//import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from 'kit/Paper';
import { Content } from 'kit/Page';

import { elevation, color } from 'kit/commons/basics';

const noActive = `
  border: 1px solid ${color.divider.default}; 
  ${elevation[0]}  /* in Paper elevation[0] - on default*/
`;

const HomeCard = styled(Paper)`
  margin: 4px 8px;  /*padding: 8px;*/
  display: flex;
  flex-flow: column nowrap;
  opacity: 1;
  color: ${color.text.default};
  background-color: white;
  ${props => props.isActive ? elevation[8] : noActive} 
`;

export default HomeCard;

HomeCard.propTypes = {
  isActive: PropTypes.bool
};
HomeCard.defaultProps = {
  isActive: false
};


export const HomeContent = styled(Content)`
  padding: 4px 0;
  background-color: ${color.bgcGrey};
`;