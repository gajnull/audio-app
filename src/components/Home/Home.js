import React, { useState } from 'react';
//import { useSelector } from 'react-redux';

import Page, { Content } from 'kit/Page';

import HomeAppBar from './HomeAppBar';
import HomeCard, { HomeContent } from './HomeCard';



export default function Home() {
  //const page = useSelector(state => state.pages.current);
  const [activeCard, setActiveCard] = useState('');

  return (
    <Page>
      <HomeAppBar />
      <HomeContent>
        <HomeCard 
          isActive={activeCard === 'first'} 
          toogleActive={()}
        />
        <HomeCard />
      </HomeContent>
    </Page>
  );
}


