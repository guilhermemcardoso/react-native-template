import React from 'react';
import { Button, StyleSheet, View, Text, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store/reducers/user';

const App = () => {
  const value = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  return (
    <View style={styles.view}>
      <StatusBar barStyle="dark-content" />
      <Button onPress={() => dispatch(actions.sub())} style={styles.btn} title="-" />
      <Text style={styles.msg}>{value}</Text>
      <Button onPress={() => dispatch(actions.sum())} style={styles.btn} title="+" />
    </View>
  );
};

const styles = StyleSheet.create({
  msg: {
    marginVertical: 20,
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  btn: {
    padding: 15,
  },
});

export default App;
