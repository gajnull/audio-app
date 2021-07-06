import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialStates/pages';

export const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    gotoPage: (state, action) => {
      state.current = action.payload;
    },
    toogleStateSound: state => {
      state.autoSound = (state.autoSound === 'onDemand') ? 
                          'auto' : 'onDemand';    }
  }
})

export const { gotoPage, toogleStateSound } = pagesSlice.actions;

export default pagesSlice.reducer;