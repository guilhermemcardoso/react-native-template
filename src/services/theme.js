import { actions } from '~/store/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const THEME_STORAGE_KEY = '@RNTEMPLATE_THEME';

export const switchTheme = (theme) => async (dispatch) => {
  try {
    await AsyncStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(theme));
    dispatch(actions.switchTheme(theme));
  } catch (e) {
    return console.error(e.message);
  }
};

export const getCurrentTheme = () => async (dispatch) => {
  try {
    const themeString = await AsyncStorage.getItem(THEME_STORAGE_KEY);
    const theme = JSON.parse(themeString);
    if (theme) dispatch(actions.switchTheme(theme));
  } catch (e) {
    return console.error(e.message);
  }
};
