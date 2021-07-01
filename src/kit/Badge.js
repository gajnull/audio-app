import React from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';

import { wnd, palette } from './commons/basics';


const BadgeOuter = styled.div`
  display: inline-block;
  position: relative;
  margin: 8px;
`;

const BadgeContent = styled.span`
  position: absolute;   
  z-index: 2;  
  height: 20px;
  min-width: 20px;
  border-radius: 10px;
  padding: 0 6px;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1;
  ${wnd.contentCenter} 
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  top: 0;
  left: 50%;
  transform: translate(0, -50%);
  ${palette.secondary} 
`;


const Badge = ({ content, children, styleOuter, ...others }) => {
  const value = content || '';
  return (
    <BadgeOuter style={styleOuter}>
      {children}
      <BadgeContent {...others}>{value}</BadgeContent>
    </BadgeOuter>  
  );
};
/*
Badge.propTypes = {
  content: PropTypes.string
};
*/

export default Badge;
