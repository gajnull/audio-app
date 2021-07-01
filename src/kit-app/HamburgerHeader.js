import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ListItem, ListItemIcon } from 'kit/List';
import Typography from 'kit/Typography';
import SvgIcon from 'kit/SvgIcon';

import { palette } from 'kit/commons/basics';

import imgGoto from './img/chevron_right-white.svg';


const HeaderListItem = styled(ListItem)`
  ${props => props.bgColor && palette[props.bgColor]}
  padding-top: 16px; 
  padding-bottom: 16px;
`;

const HeaderCaption = styled.div`
  padding: 16px 0;
  flex: 1;
  text-align: left;
`;


const HamburgerHeader = ({ src, caption, subCaption, ...others }) => (
  <HeaderListItem {...others}>
    <ListItemIcon>
      <SvgIcon src={src} alt="avatar" />
    </ListItemIcon>
    <HeaderCaption>
      <Typography>{caption}</Typography>
      <br />
      <Typography variant="subtitle2" style={{lineHeight:1.2}}>{subCaption}</Typography>
    </HeaderCaption>
    <ListItemIcon pos="end" short>
      <SvgIcon src={imgGoto} alt="goto" />
    </ListItemIcon>      
  </HeaderListItem>  
);

export default HamburgerHeader;

HamburgerHeader.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  subCaption: PropTypes.string,
  bgColor: PropTypes.string,
  onClick: PropTypes.func
};

HamburgerHeader.defaultProps = {
  caption: '',
  subCaption: '',
  bgColor: 'primary',
  onClick: () => {}
};