import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import Home from './screens/Home';
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
      <Home />
    </ThemeProvider>
  );
};

export default AppWrapper;
