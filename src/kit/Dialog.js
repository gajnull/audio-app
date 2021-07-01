import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Modal } from './Page';
import Paper from './Paper';
import Button from './Button';
import IconButton from './IconButton';

import { color, fonts, wnd } from './commons/basics';
import animation from './commons/animations';

import imgClose from './img/close_grey.svg';


const DialogModal = styled(Modal)`
  ${wnd.contentCenter}
`;

const DialogFrame = styled(Paper)`
  max-width: 600px;
  margin: 32px;
  display: flex;
  max-height: calc(100% - 64px);
  flex-direction: column; 
  overflow-y: auto; 
  ${animation.fadeIn}
`;

const Dialog = ({ children, open, onClose, ...others }) => {

  const res = open ? (
    <DialogModal 
      role="kit-modal-dialog" open={open} 
      onClick={onClose}
    >
      <DialogFrame 
        role="kit-dialog"
        onClick={(e) => e.stopPropagation()}
        elevation="24" {...others}
      >
        {children}
      </DialogFrame>
    </DialogModal>
  ) : null;

  return res;
};

  Dialog.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func.isRequired 
  };
  Dialog.defaultProps = {
    open: false
  };

export default Dialog; 


const DialogTitleFrame = styled.div`
  padding: 8px;
  flex: 0 0 auto;
  display: flex;
`

const DialogTitleCaption = styled.div`
  padding: 8px;
  flex: 1;
  ${fonts.h6}
`
export const DialogTitle = ({ children, onClose, 
                        styleCaption, ...others }) => (
  <DialogTitleFrame role="kit-dialog-title" {...others}>
    <DialogTitleCaption style={styleCaption}> 
      {children} 
    </DialogTitleCaption> 
    {onClose && <IconButton onClick={onClose} src={imgClose} />}
  </DialogTitleFrame>
);

DialogTitle.propTypes = {
  onClose: PropTypes.func
};


export const DialogContent = styled.div`
  --dialog-content: kit;
  flex: 1 1 auto;
  padding: 8px 16px 16px 16px;
  overflow-y: auto;
  color: ${color.text.paper};
  ${fonts.body1}
`

export const DialogActions = styled.div`
  --dialog-actions: kit;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
`


export const DialogButton = styled(Button).attrs({
  btnColor: "primary",
})`
  --dialog-button: kit;
  margin-left: 8px;
`;







