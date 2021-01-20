import auth from '@react-native-firebase/auth';
import { actions } from '~/store/auth';
import { translate } from '~/i18n';

export const showErrorMessage = (errorMessage) => async (dispatch) => {
  dispatch(actions.showErrorMessage(errorMessage));
}

export const hideErrorMessage = () => async (dispatch) => {
  dispatch(actions.hideErrorMessage());
}

export const emailSignIn = (email, password) => async (dispatch) => {
  new Promise((resolve, reject) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  })
    .then((response) => {
      dispatch(actions.SignInSuccess(response?.user?.email));
    })
    .catch((error) => {
      switch (error.code) {
        case 'auth/email-already-in-use':
          dispatch(actions.SignInFail(translate('error.emailInUse')));
          break;
        case 'auth/invalid-email':
          dispatch(actions.SignInFail(translate('error.invalidEmail')));
          break;
        default:
          dispatch(actions.SignInFail(translate('error.unexpected')));
          break;
      }
    });
};

export const emailSignUp = (email, password) => async (dispatch) => {
  new Promise((resolve, reject) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  })
    .then((response) => {
      dispatch(actions.SignUpSuccess(response?.user?.email));
    })
    .catch((error) => {
      switch (error.code) {
        case 'auth/email-already-in-use':
          dispatch(actions.SignUpFail(translate('error.emailInUse')));
          break;
        case 'auth/invalid-email':
          dispatch(actions.SignUpFail(translate('error.invalidEmail')));
          break;
        default:
          dispatch(actions.SignUpFail(translate('error.unexpected')));
          break;
      }
    });
};

export const emailSignOut = () => async (dispatch) => {
  new Promise((resolve, reject) => {
    auth()
      .signOut()
      .then(() => resolve())
      .catch((error) => {
        reject(error);
      });
  })
    .then(() => {
      dispatch(actions.SignOutSuccess());
    })
    .catch((error) => {
      dispatch(actions.SignUpFail(translate('error.unexpected')));
    });
};
