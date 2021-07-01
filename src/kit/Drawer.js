import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Modal } from './Page';
import Paper from './Paper';
import { ListItem } from './List';

import { fonts } from './commons/basics';
import animation from './commons/animations';


const motion = {
  left: animation.fromLeft,
  right: animation.fromRight,
  top: animation.fromTop,
  bottom: animation.fromBottom
};

const place = (anchor) => `
  ${(anchor !== 'right') ? 'left: 0;' : ''}
  ${(anchor !== 'left') ? 'right: 0;' : ''}
  ${(anchor !== 'top') ? 'bottom: 0;' : ''}
  ${(anchor !== 'bottom') ? 'top: 0;' : ''}
`;


const DrawerFrame = styled(Paper)`
  position: absolute;
  ${props => place(props.anchor)}
  ${props => motion[props.anchor]}
`;


const Drawer = ({ anchor, open, onClose, children, ...others }) => {

  const exitDrawer = (e) => {
    onClose();
    e.stopPropagation();
  };  

  const res = open ? (
    <Modal 
      role="kit-modal-drawer" 
      open={open} onClick={exitDrawer}
    >
      <DrawerFrame
        role="kit-drawer" anchor={anchor} square
        elevation="16" {...others}
      >
        { children }
      </DrawerFrame>
    </Modal>
  ) : null;

  return res;
};


Drawer.propTypes = {
  anchor: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

Drawer.defaultProps = {
  anchor: 'left',   /* 'left'/'bottom'/'top'/'right' */
  open: false
};

export default Drawer;




export const ChoiceDrawer = styled(Drawer)`
  border-radius: 12px 12px 0 0;
`;

export const ChoiceHeader = styled(ListItem)`
  ${fonts.body1};
  justify-content: center;
  font-weight: 500;
  color: black;
`;  // <span> children </span>