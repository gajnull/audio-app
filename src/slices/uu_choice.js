import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialStates/choice';

import { gotoPage } from './pages';
import { setListDrill } from './drill';
import { moveToHistory, markStudiedWords } from './words';

import {  changeRangeChoice, addFamiliarToHistory, 
  markStudiedAllWords, defineListChoice } from 'api';

export const choiceSlice = createSlice({
  name: 'choice',
  initialState,
  reducers: {
   // создание листа выбора, потом здесь можно сделать умолчания для разных source
    setListChoice: (state, action) => {
      const { source, list } = action.payload;
      state.list = list;
      state.source = source;
    },
    toogleWordChoice: (state, action) => {
      state.list = state.list.map(item => (
        (item.word === action.payload) ? {...item, picked: !item.picked} : item
      )); // payload = word
    },
    toogleRangeChoice: (state, action) => {
      const { filter, item } = action.payload;
      const { word, picked } = item;
      state.list = changeRangeChoice({
        list: state.list, filter, word, picked
      });  
    }, 
    difineWordChoice: (state, action) => { 
      const { word, picked } = action.payload;
      state.list = state.list.map(item => (
        (item.word === word) ? {...item, picked} : item
      ));
    },     
    cleareListChoice: state => {
      state.list = [];
      state.source = '';
    }  
  }
})

export const { 
  setListChoice, toogleWordChoice, toogleRangeChoice, 
  difineWordChoice, cleareListChoice
} = choiceSlice.actions;

export default choiceSlice.reducer;




export const gotoPageChoice = (source) => ( 
  (dispatch, getState) => { 
    const words = getState().words[source];
    const list = defineListChoice(words, source);
    if(list.length === 0) return;
    dispatch(setListChoice({ list, source }));
    dispatch(gotoPage('choice'));
  }
);


// при выходе из списка слов выбранные слова идут в обучение и список выбранных слов очищается
// возможно withDrill = false не будет
export const exitChoice = (withDrill) => ( 
  (dispatch, getState) => {
    const listDrill = withDrill ? 
      getState().choice.list.filter(item => (item.picked)) : [];
    const isDrill = (listDrill.length !== 0);
    if(isDrill) {
      dispatch(setListDrill(listDrill)) // picked остается, но оно потом не используется
    } 
    dispatch(cleareListChoice()); 
    dispatch(gotoPage('home'));
  }
);


export const setFamiliar = () => (
  (dispatch, getState) => {   
    let listChoice = getState().choice.list;
    let listFamiliar = listChoice.filter(item => (item.picked));
    if(listFamiliar.length === 0) return;
    let { history, dics, sets} = getState().words;
    history = addFamiliarToHistory(listFamiliar, history.list);
    dispatch(moveToHistory(history));
    let { dicsList, setsList } = markStudiedAllWords(dics, sets, listFamiliar);
    dispatch(markStudiedWords({ dicsList, setsList })); 
    listChoice = listChoice.map(item => (
      item.picked ?
      {...item, picked: false, studied: true} : item      
    ));  
    dispatch(setListChoice({ 
      list: listChoice, source: getState().choice.source 
    })); 
  }
);
