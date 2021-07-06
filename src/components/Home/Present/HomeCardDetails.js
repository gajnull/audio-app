import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { 
    ListItem, ListItemIcon, ListItemText 
  } from 'kit/List';
import SvgIcon, { Checkbox } from 'kit/SvgIcon';
import Dialog, { DialogTitle, DialogContent, DialogActions, DialogButton } from 'kit/Dialog'; 

//import { color } from 'kit/commons/basics';

import info from '../img/info.svg';

const HomeTaskDetails = ({ groups, toogle }) => (
  <div className="home-task-details">
    {
      groups.map(group =>
        <HomeTaskDetailsItem key={group.id} item={group} toogle={toogle} />
      )
    }
  </div>
);

export default HomeTaskDetails;

HomeTaskDetails.propTypes = {
  groups: PropTypes.array.isRequired,
  toogle: PropTypes.func.isRequired,
};

  const TitleItem = styled(ListItem)`
    min-height: 40px;
    padding: 4px 8px;
    margin: 4px 8px;
    ${props => props.marked ? 'background-color: #e5e5e5;' : ''}
  `;  /* аттрибут on - зарезервирован */

const HomeTaskDetailsItem = ({ item, toogle }) => (
  <TitleItem marked={item.on}>
    <ListItemIcon 
      pos="start" short
      onClick={() => toogle(item.id)}
    >
      <Checkbox on={item.on} />
    </ListItemIcon>

    <ListItemText onClick={() => toogle(item.id)}>
      {item.caption}
    </ListItemText>

    <InfoAboutTask item={item} />   
  </TitleItem>
);



const InfoAboutTask = ({ item }) => {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog  = () => {
    setOpen(false);
  };
  return ( 
    <>      
      <ListItemIcon pos="end" short onClick={openDialog}> 
        <SvgIcon src={info} alt="info" />  
      </ListItemIcon>
      <Dialog open={open} onClose={closeDialog}> 
        <DialogTitle onClose={closeDialog}>{item.caption}</DialogTitle>
        <DialogContent> 
          { item.info }
        </DialogContent>
        <DialogActions>
          <DialogButton onClick={closeDialog}> Понятно </DialogButton>  
        </DialogActions>
      </Dialog>
    </>  
  );  
};