import { actions } from '~/store/theme';

export const switchTheme = (theme) => async (dispatch) => {
  try {
    //TODO: async storage here
    console.log('SWITCH THEME THUNK');
    dispatch(actions.switchTheme(theme));
  } catch (e) {
    return console.error(e.message);
  }
};
