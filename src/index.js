import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import Router from './router';
import store from './store';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {

  const currentTheme = useSelector((state) => state.theme.current); 

  return (
    <ThemeProvider theme={currentTheme}>
      <Router theme={currentTheme} />
    </ThemeProvider>
  );
};

export default AppWrapper;
