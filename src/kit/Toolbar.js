import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Typography from './Typography';
import Button from './Button';


const Toolbar = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%; 
  margin: 0 4px;
`;  /* width: 100% по умолчанию */

export default Toolbar;


const CaptionTb = styled.div`
  flex: 1;
  margin: 0 16px;  
  overflow: hidden;
`;

export const ToolbarCaption = ({ children }) => (
  <CaptionTb>
    <Typography variant="h6" noWrap>
      {children}
    </Typography>
  </CaptionTb>  
);

ToolbarCaption.propTypes = {
  children: PropTypes.string
};


const ButtonTb = styled(Button)`
  margin: 0;
`;

export const ToolbarButton = ({ onClick, children }) => (
  <ButtonTb size="small" btnColor="inherit" onClick={onClick}>
      {children}
  </ButtonTb>  
);