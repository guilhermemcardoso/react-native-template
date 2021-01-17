import React from 'react';
import Button from '../../components/button';
import Container from '../../components/container';
import Text from '../../components/text';
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from '../../store/thunks/theme';
import { darkTheme, lightTheme } from '../../styles/themes';

const HomeScreen = () => {
  const value = useSelector((state) => state.theme.current);
  const dispatch = useDispatch();

  return (
    <Container>
      <Button onPress={() => dispatch(switchTheme(darkTheme))} title="Dark Theme" />
      <Text>{value.mode}</Text>
      <Button onPress={() => dispatch(switchTheme(lightTheme))} title="Light Theme" />
    </Container>
  );
};

export default HomeScreen;
