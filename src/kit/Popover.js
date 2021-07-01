import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Modal } from './Page';
import Paper from './Paper';

import { zindex, elevation } from './commons/basics';
import animation from './commons/animations';


const Popover = ({ open, onClose, style, children, ...others}) => {

  const res = open ? (
    <>
      <Modal 
        role="kit-modal-popover" open={open} 
        onClick={onClose}
        transp
      />    
      <PopoverFrame 
        role="kit-popover"
        onClick={onClose} {...others} 
      >
        {children} 
      </PopoverFrame>
    </> 
  ) : null;

  return res;
};  /* e.stopPropagation() in Modal.js  */

  Popover.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func.isRequired
  };
  Popover.defaultProps = {
    open: false
  };

export default Popover;


const PopoverFrame = styled(Paper)`
  ${elevation[8]}
  z-index: ${zindex.modal + 1};
  ${animation.popDown}
`;


