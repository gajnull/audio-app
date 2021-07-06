import React, { useState } from 'react';
//import { useSelector } from 'react-redux';

import Page, { AppBar } from 'kit/Page';

import TopicToolbar from './TopicToolbar';
import TopicContent from './TopicContent';



export default function Topic() {
  //const page = useSelector(state => state.pages.current);
  const [state, setState] = useState('plain');

  return (
    <Page>
      <AppBar>
        <TopicToolbar />
      </AppBar>
      <TopicContent>
        Еще не сделано
      </TopicContent>
    </Page>
  );
}


