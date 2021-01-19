import { actions } from '~/store/onboarding';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ONBOARDING_STORAGE_KEY = '@RNTEMPLATE_ONBOARDING';

export const finishOnboarding = () => async (dispatch) => {
  try {
    await AsyncStorage.setItem(ONBOARDING_STORAGE_KEY, 'done');
    dispatch(actions.finishOnboarding());
  } catch (e) {
    return console.error(e.message);
  }
};

export const onboardingIsFinished = () => async (dispatch) => {
  try {
    const done = await AsyncStorage.getItem(ONBOARDING_STORAGE_KEY);
    const onboardingIsDone = done === 'done';
    if (onboardingIsDone) dispatch(actions.finishOnboarding());
  } catch (e) {
    return console.error(e.message);
  }
};
