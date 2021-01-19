import React, { useState } from 'react';
import Button from '~/components/button';
import Container from '~/components/container';
import Text from '~/components/text';
import TextInput from '~/components/textInput';
import { useDispatch, useSelector } from 'react-redux';
import { emailSignIn, showErrorMessage } from '~/services/auth';
import { validateEmail, validatePassword } from '~/utils/validation';

const LoginScreen = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const { userEmail } = useSelector((state) => state.auth);
  const handleLogin = async () => {
    if (!validateEmail(email)) {
      dispatch(showErrorMessage('Email is invalid'));
      return;
    }

    if (!validatePassword(password)) {
      dispatch(showErrorMessage('Password is invalid'));
      return;
    }
    dispatch(emailSignIn(email, password));
  };

  return (
    <Container>
      <Text title>Login</Text>
      {userEmail.length === 0 && (
        <>
          <TextInput
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
          />
          <TextInput autoCapitalize="none" value={password} onChangeText={setPassword} placeholder="Password" />
          <Button onPress={handleLogin} title="Login" />
        </>
      )}
      {userEmail.length !== 0 && <Text>{userEmail}, you are already logged in.</Text>}
    </Container>
  );
};

export default LoginScreen;
