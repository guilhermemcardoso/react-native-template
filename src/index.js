import React, { useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import Router from './router';
import store from './store';
import { hideErrorMessage } from '~/services/auth';
import { onboardingIsFinished } from '~/services/onboarding';
import { getCurrentTheme } from '~/services/theme';
import {
  Billboard,
  NOTIFICATIONS_POSITION,
  showErrorNotification,
} from '@farfarawaylabs/react-native-beautiful-notifications';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const { error, errorMessage } = useSelector((state) => state.auth);
  const { done } = useSelector((state) => state.onboarding);
  const currentTheme = useSelector((state) => state.theme.current);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onboardingIsFinished());
    dispatch(getCurrentTheme());
  }, []);

  useEffect(() => {
    if (error) {
      showErrorNotification({
        text: errorMessage,
        backgroundColor: currentTheme.ERROR_MESSAGE_BACKGROUND_COLOR,
        color: currentTheme.ERROR_MESSAGE_TEXT_COLOR,
        autoDisappearTime: 2000,
      });

      setTimeout(() => dispatch(hideErrorMessage()), 1500);
    }
  }, [error]);

  return (
    <ThemeProvider theme={currentTheme}>
      <Router hasOnboarding={!done} />
      <Billboard position={NOTIFICATIONS_POSITION.TOP} />
    </ThemeProvider>
  );
};

export default AppWrapper;
