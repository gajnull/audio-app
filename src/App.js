import React from 'react';
import { useSelector } from 'react-redux';

import Home from './Home/Home';
import Run from './Run/Run';
//import { Counter } from './features/counter/Counter';
//import './App.css';

function App() {
  const page = useSelector(state => state.pages.current);

  const current = page === 'home' ? <Home /> :
                  page === 'run' ? <Run /> : <Home />


  return current;
}

export default App;
