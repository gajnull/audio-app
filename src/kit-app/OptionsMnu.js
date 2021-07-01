import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Drawer from 'kit/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'kit/List';
import { Radio } from 'kit/SvgIcon';
import Divider from 'kit/Divider';

import { fonts } from 'kit/commons/basics';


const FrameHeader = styled(ListItem)`
  ${fonts.body1};
  justify-content: center;
  font-weight: 500;
  color: black;
`;  

export const OptionsHeader = ({children, ...others}) => (
  <>
    <FrameHeader {...others}>
      <span>{children}</span>
    </FrameHeader>
    <Divider />
  </>
);  // {...others} - {onClick, ...}


export const OptionsItem = ({isActive, children, ...others}) => (
  <ListItem {...others}>
    <ListItemIcon pos="start"> <Radio on={isActive} /> </ListItemIcon>
    <ListItemText>{children}</ListItemText>      
  </ListItem>
);  // {...others} - {onClick, ...}
  OptionsItem.propTypes = {
    isActive: PropTypes.bool,
    //children: PropTypes.string.isRequired
  };
  OptionsItem.defaultProps = {
    isActive: false
  };

const OptionsDrawer = styled(Drawer)`
  border-radius: 12px 12px 0 0;
`;

export default function OptionsMnu({ children, ...others }) {
  return(
    <OptionsDrawer anchor="bottom" {...others}>
      <List>{children}</List>      
    </OptionsDrawer>
  ); 
};  // {...others} - {onClose, open ...}
  OptionsMnu.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func.isRequired
  };
  OptionsMnu.defaultProps = {
    open: false
  };


/*export default function OptionsMnu(props) {
  return (
    <OptionsDrawer anchor="bottom" {...props}>
      <List>
        <ChoiceHeader>
          <span> Показывать слова </span>
        </ChoiceHeader>

        <Divider />

        <ListItem>
          <ListItemIcon pos="start"> <Radio /> </ListItemIcon>
          <ListItemText> Только новые </ListItemText>      
        </ListItem>

        <ListItem>
          <ListItemIcon pos="start"> <Radio on /> </ListItemIcon>
          <ListItemText> Все </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemIcon pos="start"> <Radio /> </ListItemIcon>
          <ListItemText> Изученные ранее </ListItemText>
        </ListItem>
      </List>  
    </OptionsDrawer>
  );
};*/

