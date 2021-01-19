import { actions } from '~/store/theme';

export const switchTheme = (theme) => async (dispatch) => {
  try {
    dispatch(actions.switchTheme(theme));
  } catch (e) {
    return console.error(e.message);
  }
};
