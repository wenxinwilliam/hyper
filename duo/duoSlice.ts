import {createSlice} from '@reduxjs/toolkit';

export const duoSlice = createSlice({
  name: 'duo',
  initialState: {
    isOpen: false
  },
  reducers: {
    togglePanel: (state) => {
      state.isOpen = !state.isOpen;
    }
  }
});

export const {togglePanel} = duoSlice.actions;

export type DuoState = ReturnType<typeof duoSlice.getInitialState>;

export default duoSlice.reducer;
