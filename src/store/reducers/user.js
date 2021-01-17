import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: 0,
  },
  reducers: {
    sum(state, action) {
      state.value += 1;
    },
    sub(state, action) {
      state.value -= 1;
    },
  },
});

export const { actions } = userSlice;
export default userSlice.reducer;
