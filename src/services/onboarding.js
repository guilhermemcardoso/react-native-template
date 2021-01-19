import { actions } from '~/store/onboarding';

export const finishOnboarding = () => async (dispatch) => {
  try {
    //TODO: async storage here
    dispatch(actions.finishOnboarding());
  } catch (e) {
    return console.error(e.message);
  }
};

export const onboardingIsFinished = () => async (dispatch) => {
  try {
    //TODO: async storage here
    dispatch(actions.finishOnboarding());
  } catch (e) {
    return console.error(e.message);
  }
};
