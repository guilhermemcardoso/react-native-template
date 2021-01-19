import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userEmail: '',
    error: false,
    errorMessage: ''
  },
  reducers: {
    SignInSuccess(state, action) {
      state.userEmail = action.payload;
      state.error = false;
      state.errorMessage = '';
    },
    SignInFail(state, action) {
      state.userEmail = '';
      state.error = true;
      state.errorMessage = action.payload.errorMessage;
    },
    SignUpSuccess(state, action) {
      state.userEmail = action.payload;
      state.error = false;
      state.errorMessage = '';
    },
    SignUpFail(state, action) {
      state.userEmail = '';
      state.error = true;
      state.errorMessage = action.payload.errorMessage;
    },
    SignOutSuccess(state, action) {
      state.userEmail = '';
      state.error = false;
      state.errorMessage = '';
    },
    SignOutFail(state, action) {
      state.userEmail = '';
      state.error = true;
      state.errorMessage = action.payload.errorMessage;
    },
    hideErrorMessage(state, action) {
      state.error = false;
      state.errorMessage = '';
    },
    showErrorMessage(state, action) {
      state.error = true;
      state.errorMessage = action.payload;
    },
  },
});

export const { actions } = authSlice;
export default authSlice.reducer;
