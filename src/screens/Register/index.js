import React, { useState } from 'react';
import Button from '~/components/button';
import Container from '~/components/container';
import Text from '~/components/text';
import TextInput from '~/components/textInput';
import { useDispatch, useSelector } from 'react-redux';
import { emailSignUp, showErrorMessage } from '~/services/auth';
import { validateEmail, validatePassword, confirmPassword } from '~/utils/validation';
import { translate } from '~/i18n';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const dispatch = useDispatch();
  const { userEmail } = useSelector((state) => state.auth);

  const handleRegister = async () => {
    if (!validateEmail(email)) {
      dispatch(showErrorMessage(translate('error.invalidEmail')));
      return;
    }

    if (!validatePassword(password)) {
      dispatch(showErrorMessage(translate('error.invalidPassword')));
      return;
    }

    if (!confirmPassword(password, passwordConfirmation)) {
      dispatch(showErrorMessage(translate('error.passwordConfirmation')));
      return;
    }

    dispatch(emailSignUp(email, password));
  };

  return (
    <Container>
      <Text title>{translate('registerScreen.title')}</Text>
      {userEmail.length === 0 && (
        <>
          <TextInput
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            placeholder={translate('placeholder.email')}
          />
          <TextInput password autoCapitalize="none" value={password} onChangeText={setPassword} placeholder={translate('placeholder.password')} />
          <TextInput
            password
            autoCapitalize="none"
            value={passwordConfirmation}
            onChangeText={setPasswordConfirmation}
            placeholder={translate('placeholder.passwordConfirmation')}
          />
          <Button onPress={handleRegister} title={translate('registerScreen.registerButton')} />
        </>
      )}
      {userEmail.length !== 0 && <Text>{userEmail}, {translate('registerScreen.loggedMessage')}</Text>}
    </Container>
  );
};

export default RegisterScreen;
