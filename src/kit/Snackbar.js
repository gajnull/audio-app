import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Modal } from './Page';
import Paper from './Paper';
import Button from './Button';
import IconButton from './IconButton';

import { fonts } from './commons/basics';
import animation from './commons/animations';

import imgClose from './img/close_grey.svg';



const SnackbarModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;  
`;

const SnackbarFrame = styled(Paper)`
  max-width: 600px;
  margin: 8px;
  display: flex;
  flex-wrap: wrap;
  max-height: calc(100% - 64px);
  background-color: rgb(50, 50, 50);
  padding: 6px ${props => props.withClose ? '42px' : '16px'} 6px 16px;
  position: relative;
  ${animation.fadeIn}
`;

const SnackbarMessage = styled.div`
  ${fonts.body2}
  flex: 2 1 auto; /* важно явно указать auto */
  color: white;
  padding: 8px 0;  
`;

const BtnClose = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1500;
`;

const SnackbarAction = styled.div`
  flex: 1 1 auto; 
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SnackbarButton = styled(Button).attrs({
  btnColor: 'secondary',
  size: 'small'
})`
  --snackbar-button: kit;
  margin-left: 16px;
`;

const Snackbar = ({ message, withClose, actBtns, open, onClose,
              styleModal, ...others }) => {

  const res = open ? (
    <SnackbarModal 
      transp role="kit-modal-snackbar" 
      open={open} onClick={onClose}
      style={styleModal}
    >
      <SnackbarFrame withClose={withClose}
        role="kit-snackbar"
        onClick={(e) => e.stopPropagation()}
        elevation="6" {...others}
      >
        <SnackbarMessage> {message} </SnackbarMessage>
        { withClose && 
          <BtnClose onClick={onClose} src={imgClose} /> 
        }
        { actBtns && <SnackbarAction> {actBtns} </SnackbarAction>}
      </SnackbarFrame>
    </SnackbarModal>
  ) : null;

  return res;
};

Snackbar.propTypes = {
  message: PropTypes.string,
  withClose: PropTypes.bool,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  styleModal: PropTypes.object
};

Snackbar.defaultProps = {
  withClose: false,
  open: false
};

export default Snackbar; 