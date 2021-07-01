import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SvgIcon from './SvgIcon';

import { wnd } from './commons/basics';


const IconButtonFrame  = styled.div`
  width: 48px; 
  height: 48px;   
  ${wnd.contentCenter}
`

const IconButton = ({ src, alt, onClick, ...others }) => (
  <IconButtonFrame onClick={onClick} {...others}>
    <SvgIcon src={src} alt={alt} />
  </IconButtonFrame>   
);

export default IconButton;

IconButton.propTypes = {
  src: PropTypes.string.isRequired,  
  alt: PropTypes.string,
  onClick: PropTypes.func
};

