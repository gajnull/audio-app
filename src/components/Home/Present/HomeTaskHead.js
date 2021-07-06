import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { 
    ListItem, ListItemIcon, ListItemText 
  } from 'kit/List';
import SvgIcon from 'kit/SvgIcon';

import { fonts } from 'kit/commons/basics';

import imgGoTask from '../img/arrow_forward_primary.svg';
import imgExpand from '../img/expand.svg';


const HomeTaskHead = styled.div`
  padding: 16px 16px 8px 16px;
  opacity: ${props=>props.isActive ? 1 : 0.7}
`;

export default HomeTaskHead;

  HomeTaskHead.propTypes = {
    isActive: PropTypes.bool
  };
  HomeTaskHead.defaultProps = {
    isActive: false
  };


  const TitleItem = styled(ListItem)`
    padding: 0;
    align-items: flex-start;
    min-height: 32px; /* in account to HomeTaskInfo  */  `;

  const TitleText = styled(ListItemText)`
    ${fonts.h5}
    line-height: 1;
    min-height: 32px; /* in account to HomeTaskInfo  */
  `;

export const HomeTaskTitle = ({ pic, caption, isActive, toTask }) => (
  <TitleItem>
    <ListItemIcon pos="start" short>
      <SvgIcon src={pic} alt="title" />
    </ListItemIcon>
    <TitleText>{caption}</TitleText>
    {
      isActive ?
      <ListItemIcon pos="end" onClick={toTask} short> 
        <SvgIcon src={imgGoTask} alt="toTask" />  
      </ListItemIcon> 
      :
      <ListItemIcon pos="end" short> 
        <SvgIcon src={imgExpand} alt="expand" />  
      </ListItemIcon>
    }
  </TitleItem>  
);

  HomeTaskTitle.propTypes = {
    pic: PropTypes.string,
    caption: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    toTask: PropTypes.func
  };
  HomeTaskTitle.defaultProps = {
    isActive: false
  };


export const HomeTaskInfo = styled.div`
  ${fonts.subtitle2}  
`;

export const HomeTaskInfoItem = styled.div`
  --home-task-info-item: app;
`;
