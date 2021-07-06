import React/*, { useState }*/ from 'react';
import { useDispatch } from 'react-redux'

import MenuHamburger from 'kit/MenuHamburger';
import HamburgerHeader from 'kit-app/HamburgerHeader';
import List, { ListItem, ListItemIcon, ListItemText } from 'kit/List';
import SvgIcon from 'kit/SvgIcon';

import { gotoPage } from 'slices/pages';

import imgAuto from './img/auto.svg';
import imgStats from './img/stats.svg';
import imgState from './img/state.svg';
import imgSettings from './img/settings.svg';
import imgNoname from './img/noName_white.svg';


export default function MyButtonMenu() {   // props = { setCategory, currentCategory }

  const dispatch = useDispatch();

  const list = (
    <List>
      <ListItem onClick={() => dispatch(gotoPage('stats'))}>
        <ListItemIcon> 
          <SvgIcon src={imgStats} /> 
        </ListItemIcon>
        <ListItemText> Статистика </ListItemText>        
      </ListItem>    
      <ListItem onClick={() => dispatch(gotoPage('auto'))}>
        <ListItemIcon> 
          <SvgIcon src={imgAuto} /> 
        </ListItemIcon>
        <ListItemText> Авторежим </ListItemText>        
      </ListItem>
      <ListItem onClick={() => dispatch(gotoPage('settings'))}>
        <ListItemIcon> 
          <SvgIcon src={imgSettings} /> 
        </ListItemIcon>
        <ListItemText> Настройки </ListItemText>     
      </ListItem>
      <ListItem onClick={() => dispatch(gotoPage('state'))}>
        <ListItemIcon> 
          <SvgIcon src={imgState} /> 
        </ListItemIcon>
        <ListItemText> Состояние </ListItemText>     
      </ListItem>  
    </List>
  );  

  return (
    <MenuHamburger>
      <HamburgerHeader 
        src={imgNoname} 
        caption="Анонимный пользователь" 
        subCaption="зарегистрироваться" 
        onClick={() => dispatch(gotoPage('auth'))}
      />
      {list}
    </MenuHamburger>
  );
}

