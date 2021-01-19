import { createSlice } from '@reduxjs/toolkit';
import { lightTheme } from '~/styles/themes';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    current: lightTheme
  },
  reducers: {
    switchTheme(state, action) {
      state.current = action.payload;
    },
  },
});

export const { actions } = themeSlice;
export default themeSlice.reducer;
