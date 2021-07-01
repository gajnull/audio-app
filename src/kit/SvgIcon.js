import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import imgCheckbox from './img/check_box.svg';
import imgCheckboxDisabled from './img/check_box_disabled.svg';
import imgCheckboxOn from './img/check_box_on.svg';
import imgCheckboxOnDisabled from './img/check_box_on_disabled.svg';

import imgRadio from './img/radio_button.svg';
import imgRadioDisabled from './img/radio_button_disabled.svg';
import imgRadioOn from './img/radio_button_on.svg';
import imgRadioOnDisabled from './img/radio_button_on_disabled.svg';



const IconFrame = styled.div`
  width: 24px;  /* высота устанавливается автоматически */
  line-height: 0;
`;  /* чтобы высота была равна высоте иконки, иначе от body она почему-то большая */

const SvgIcon = ({ src, alt='ico', ...others }) => (
  <IconFrame {...others}>
    <img src={src} alt={alt} />
  </IconFrame>
);

SvgIcon.propTypes = {
  src: PropTypes.string.isRequired,  
  alt: PropTypes.string
};

export default SvgIcon;



export const Checkbox = ({ on, disabled }) => {
  const src = (on && disabled) ? imgCheckboxOnDisabled :
                            on ? imgCheckboxOn :
                      disabled ? imgCheckboxDisabled : imgCheckbox;
  return <SvgIcon src={src} alt="checkbox" /> ;
}

  Checkbox.propTypes = {
    on: PropTypes.bool,  
    disabled: PropTypes.bool
  };

  Checkbox.defaultProps = {
    on: false,  
    disabled: false
  };



export const Radio = ({ on, disabled }) => {
  const src = (on && disabled) ? imgRadioOnDisabled :
                            on ? imgRadioOn :
                      disabled ? imgRadioDisabled : imgRadio;
  return <SvgIcon src={src} alt="radio" /> ;
}

  Radio.propTypes = {
    on: PropTypes.bool, 
    disabled: PropTypes.bool
  };

  Radio.defaultProps = {
    on: false, 
    disabled: false
  };


