import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { wnd } from './commons/basics';
import animation from './commons/animations';


const ModalWindow = styled.div`
  ${wnd.modal}
  ${wnd.modalFull}
  ${wnd.contentCenter}
  ${props => props.transp ? 
    'background-color: rgba(255, 255, 255, 0.1)' : animation.blackout
  }
`;

const Modal = ({ open, onClose, children, transp, ...others }) => {
  const exitModal = (e) => {
    onClose();
    e.stopPropagation();
  };

  const res =  open ?  
    (<ModalWindow 
      transp={transp} onClick={exitModal}{...others} 
    > 
      {children}
    </ModalWindow>) : null;
  return res;
}; 

  Modal.propTypes = {
    transp: PropTypes.bool,
    open: PropTypes.bool,  
    onClose: PropTypes.func.isRequired 
  };
  Modal.defaultProps = {
    transp: false,
    /*styleModal: styleDialog,*/
    open: false
  };

export default Modal;












