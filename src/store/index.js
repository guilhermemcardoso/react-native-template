import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './theme';
import onboardingReducer from './onboarding';
import authReducer from './auth';

const store = configureStore({
  reducer: {
      theme: themeReducer,
      onboarding: onboardingReducer,
      auth: authReducer
  }
});

export default store;
