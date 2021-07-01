import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconButton from './IconButton';
import Popover from './Popover'; 
import { ListItemIcon, ListItemText } from './List';
import SvgIcon, { Checkbox } from './SvgIcon';

import { fonts, color } from './commons/basics';

import imgMenuMore from './img/more_vert-white.svg';
import imgArrow from './img/chevron_right.svg'



const PopoverMenu = styled(Popover)`
  min-width: 50%;   /* 28ch */
  max-width: 75%;
  position: fixed;
  top: 16px;
  right: 16px;
`;

export default function MenuMore({ children, styleButton, ...others }) {
  const [open, onClose] = useState(false);

  const openMenu = () => {
    onClose(true);
  };
  const closeMenu = () => {
    onClose(false);
  };

  return (
    <>
      <IconButton src={imgMenuMore} onClick={openMenu} style={styleButton} />
      <PopoverMenu
        role="popover-menu"
        open={open} onClose={closeMenu}
        {...others}
      >
        {children}       
      </PopoverMenu>
    </>
  );
};

  MenuMore.propTypes = {
    styleButton: PropTypes.object 
  };



const FrameCheckbox = styled(ListItemIcon)`width: 40px;`;

export const MenuItemCheckbox = ({ on }) => (
  <FrameCheckbox pos="end" role="menu-item-checkbox">        
    <Checkbox on={on} />
  </FrameCheckbox>
);

  MenuItemCheckbox.propTypes = {
    on: PropTypes.bool
  };
  MenuItemCheckbox.defaultProps = {
    on: false
  };


const FrameArrow = styled(ListItemIcon)`width: 32px;`;

export const MenuItemArrow = () => (
  <FrameArrow pos="end" isOpacity > 
    <SvgIcon src={imgArrow} /> 
  </FrameArrow> 
);


// -------------------------------------------

export const MenuItemText = styled(ListItemText)`
  line-height: 1.1;
`;

// ----------------------------------

const MainText = styled.div`
  ${fonts.body1}
  line-height: 1.1;
  flex: 3;
`;
const SubText = styled.div`
  ${fonts.body2}
  color: ${color.text.disabled};
  line-height: 1.1;
  margin-top: 4px;
`;
const ValueText = styled.div`
  ${fonts.body2}
  color: ${color.primary};
  line-height: 1.1;
  padding-left: 16px;
  flex: 0 1 auto;
`;

const ItemWithSub = styled.div`
  flex: 3;  
`;
const ItemWithValue = styled.div`
  flex: 3;
  display: flex; 
  align-items: center;
`;

export const MenuItemTextWithSub = ({ subText, children, styleText, styleSub, ...others }) => (
  <ItemWithSub role="menu-item-text-with-sub" {...others}>
    <MainText style={styleText}> {children} </MainText>
    <SubText style={styleSub}> {subText} </SubText>
  </ItemWithSub>
);
  MenuItemTextWithSub.propTypes = {
    subText: PropTypes.string, 
    children: PropTypes.string 
  };

export const MenuItemTextWithValue = ({ value, children, styleText, styleValue, ...others }) => (
  <ItemWithValue role="menu-item-text-with-value" {...others}>
    <MainText style={styleText}> {children} </MainText>
    <ValueText style={styleValue}> {value} </ValueText>
  </ItemWithValue>
);
  MenuItemTextWithValue.propTypes = {
    value: PropTypes.string, 
    children: PropTypes.string 
  };
