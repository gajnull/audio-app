import React/*, { useState }*/ from 'react';
//import { useSelector } from 'react-redux';

import { AppBar } from 'kit/Page';
import Toolbar, { ToolbarCaption } from 'kit/Toolbar';
import IconButton from 'kit/IconButton';

export default function HomeAppBar() {
  //const page = useSelector(state => state.pages.current);
  //const [activeCard, setActiveCard] = useState('');

  return (
    <AppBar>
      <Toolbar>
        <IconButton 
          src={imgClose} 
          onClick={()=>{}} 
        />

        <ToolbarCaption>lng-audio</ToolbarCaption>

        <IconButton 
          src={imgToogle} 
          onClick={()=>{}} 
        />
      </Toolbar>
    </AppBar>

  );
}


