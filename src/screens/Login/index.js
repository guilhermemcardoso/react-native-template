import React, { useState } from 'react';
import Button from '~/components/button';
import Container from '~/components/container';
import Text from '~/components/text';
import TextInput from '~/components/textInput';
import { useDispatch, useSelector } from 'react-redux';
import { emailSignIn, showErrorMessage } from '~/services/auth';
import { validateEmail, validatePassword } from '~/utils/validation';
import { translate } from '~/i18n';

const LoginScreen = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const { userEmail } = useSelector((state) => state.auth);
  const handleLogin = async () => {
    if (!validateEmail(email)) {
      dispatch(showErrorMessage(translate('error.invalidEmail')));
      return;
    }

    if (!validatePassword(password)) {
      dispatch(showErrorMessage(translate('error.invalidPassword')));
      return;
    }
    dispatch(emailSignIn(email, password));
  };

  return (
    <Container>
      <Text title>{translate('loginScreen.title')}</Text>
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
          <TextInput autoCapitalize="none" value={password} onChangeText={setPassword} placeholder={translate('placeholder.password')} />
          <Button onPress={handleLogin} title={translate('loginScreen.loginButton')} />
        </>
      )}
      {userEmail.length !== 0 && <Text>{userEmail}, {translate('loginScreen.loggedMessage')}</Text>}
    </Container>
  );
};

export default LoginScreen;
