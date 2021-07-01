import React, { useState } from 'react';
import styled from 'styled-components';

import IconButton from './IconButton';
import Drawer from './Drawer';

import imgMenu from './img/menu-white.svg';


const HamburgerDrawer = styled(Drawer)`
  max-width: 85%;
  min-width: 70%;
`;

const MenuHamburger = (props) => {
  
  const [open, onClose] = useState(false);
  
  const openDrawer = () => {
    onClose(true);
  };  
  const closeDrawer = () => {
    onClose(false);
  };
  
  return (
    <React.Fragment>    
      <IconButton src={imgMenu} onClick={openDrawer} />
      <HamburgerDrawer 
        role="hamburger-drawer"
        {...props} anchor="left"
        open={open} onClose={closeDrawer}
      >
        {props.children}
      </HamburgerDrawer>        
    </React.Fragment>
  );
}

export default MenuHamburger;


