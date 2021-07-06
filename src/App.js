import React from 'react';
import { useSelector } from 'react-redux';

import Home from './components/Home/Home';
import Topic from './components/Topic/Topic';
//import { Counter } from './features/counter/Counter';
//import './App.css';

export default function App() {
  const page = useSelector(state => state.pages.current);

  const currentPage = page === 'home' ? <Home /> :
                  page === 'topic' ? <Topic /> : <Home />


  return currentPage;
}


