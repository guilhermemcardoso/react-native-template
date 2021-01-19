import { createSlice } from '@reduxjs/toolkit';

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState: {
    done: false
  },
  reducers: {
    finishOnboarding(state, action) {
      console.log('ACTION HERE');
      state.done = true;
    },
  },
});

export const { actions } = onboardingSlice;
export default onboardingSlice.reducer;
