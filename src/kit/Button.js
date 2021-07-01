import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color, palette, elevation, fonts } from './commons/basics';


const Base = styled.div`
  --button-base-root: kit;
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  border: none;
  ${fonts.button}
`;

  const fontSizeButton = ({ size }) => (
    (size === 'small') ? '0.8125rem' :
    (size === 'medium') ? '0.875rem' : '0.9375rem'
  );

const ButtonBase = styled(Base)`
  --button-base: kit;
  min-width: 64px;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: ${props => fontSizeButton(props)};
`;

  const paddingTextButton = ({ size }) => (
    (size === 'small') ? '4px 5px' :
    (size === 'medium') ? '6px 8px' :
    '8px 11px'    
  )

const ButtonText = styled(ButtonBase)`
  --button-text: kit;
  padding: ${props => paddingTextButton(props)};
  ${props => colorTextButton(props)}
`;
//  color: ${props => props.disabled ? color.text.disabled : color[props.btnColor]};

  const paddingOutlinedButton = ({ size }) => (
    (size === 'small') ? '3px 9px' :
    (size === 'medium') ? '5px 15px' :
    '7px 21px'    
  )

const ButtonOutlined = styled(ButtonBase)`
  --button-outlined: kit;
  padding: ${props => paddingOutlinedButton(props)};
  ${props => colorOutlinedButton(props)}
`;
/* color: ${props => props.disabled ? color.text.disabled : color[props.btnColor]};
  border: 1px solid ${props =>
    props.disabled ? color.border.disabled : color.border[props.btnColor]
  }; */
//${props => props.disabled ? borders.disabled : borders[props.btnColor]}
  
const paddingContainedButton = ({ size }) => (
      (size === 'small') ? '4px 10px' :
      (size === 'medium') ? '6px 16px' :
      '8px 22px'    
    )

const ButtonContained = styled(ButtonBase)`
  --button-contained: kit;
  padding: ${props => paddingContainedButton(props)};  
  ${props => props.disabled ? "" : elevation[2]}
  ${props => colorContainedButton(props)}
`;

const Button = ({ variant, ...others }) => (
  (variant === 'text') ? <ButtonText {...others} /> :
  (variant === 'outlined') ? <ButtonOutlined {...others} /> :
  <ButtonContained {...others} />
);

export default Button;

Button.propTypes = {
  variant: PropTypes.string,  
  size: PropTypes.string,  
  btnColor: PropTypes.string,  
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired
};

Button.defaultProps = {
  variant: 'text',  // 'outlined'/'contained'
  size: 'medium',
  btnColor: 'default'
};





  const isFixed = ({ fixed }) => (
    fixed ? `
      position: fixed;
      bottom: 32px;
      right: 32px;
    ` : ""    
  );

const FabBase = styled(Base)`
  --button-fab-base: kit;
  ${props => isFixed(props)}
  ${props => colorFabButton(props)}
  ${elevation[6]}
`;

  const roundSizeFab = ({ size }) => (
    (size === "small") ? 40 :
    (size === "medium") ? 48 : 56
  );

const FabRound = styled(FabBase)`
  --button-fab-round: kit;
  border-radius: 50%;
  width: ${props => roundSizeFab(props) + "px"};
  height: ${props => roundSizeFab(props) + "px"};
`;

  const extendedSizeFab = ({ size }) => (
    (size === "small") ? 34 :
    (size === "medium") ? 40 : 48
  );

  const extendedPaddingFab = ({ size }) => (
    (size === "small") ? '0 8px' : '0 16px'
  );

const FabExtended = styled(FabBase)`
  --button-fab-extended: kit;
  border-radius: ${props => extendedSizeFab(props) / 2 + "px"};
  min-width: ${props => extendedSizeFab(props) + "px"};
  height: ${props => extendedSizeFab(props) + "px"};
  padding: ${props => extendedPaddingFab(props)}; 
  &>:first-child {
    margin-right: 8px;
  }  
`;

export const Fab = ({ variantForm, ...others }) => (
  (variantForm === 'round') ? 
  <FabRound {...others} /> :
  <FabExtended {...others} />
);

Fab.propTypes = {
  variant: PropTypes.string,
  variantForm: PropTypes.string,
  size: PropTypes.string,  
  btnColor: PropTypes.string,  
  fixed: PropTypes.bool,
};

Fab.defaultProps = {
  variant: 'contained',     // 'outlined'
  variantForm: 'round',     // 'extended'
  size: 'large',        // 'small'/'medium'/'large'
  btnColor: 'default',  // 'default'/'primary'/'secondary'...
  fixed: false,
};



function colorTextButton({ btnColor, disabled }) {
  if(disabled) return `
      color: ${color.text.disabled};
    `;
  return `
    color: ${color[btnColor]};
  `;
};

function colorOutlinedButton({ btnColor, disabled }) {
  if(disabled) return `
      color: ${color.text.disabled};
      border: 1px solid ${color.border.disabled};
    `;
  return `
    color: ${color[btnColor]};
    border: 1px solid ${color.border[btnColor]};
  `;
};

function colorContainedButton({ btnColor, disabled }) {
  if(disabled) return `
      color: ${color.button.disabled};
      background-color: ${color.button.disabled_bgc};
    `;
  if(btnColor==='default') return `
      background-color: ${color.button.default};
      color: ${color.default};  
    `;    
  return palette[btnColor];
};


function colorFabButton({ variant, btnColor }) {
  if(variant === 'outlined') return colorOutlinedButton({btnColor});
  return colorContainedButton({btnColor});  // 'contained'
};


