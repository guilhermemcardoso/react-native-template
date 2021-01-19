import React, { useState } from 'react';
import Button from '~/components/button';
import Container from '~/components/container';
import Text from '~/components/text';
import TextInput from '~/components/textInput';
import { useDispatch, useSelector } from 'react-redux';
import { emailSignUp, showErrorMessage } from '~/services/auth';
import { validateEmail, validatePassword, confirmPassword } from '~/utils/validation';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const dispatch = useDispatch();
  const { userEmail } = useSelector((state) => state.auth);

  const handleRegister = async () => {
    if (!validateEmail(email)) {
      dispatch(showErrorMessage('Email is invalid'));
      return;
    }

    if (!validatePassword(password)) {
      dispatch(showErrorMessage('Password is invalid'));
      return;
    }

    if (!confirmPassword(password, passwordConfirmation)) {
      dispatch(showErrorMessage('Password and confirmation are different'));
      return;
    }

    dispatch(emailSignUp(email, password));
  };

  return (
    <Container>
      <Text title>Register</Text>
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
          <TextInput
            autoCapitalize="none"
            value={passwordConfirmation}
            onChangeText={setPasswordConfirmation}
            placeholder="Confirm Password"
          />
          <Button onPress={handleRegister} title="Register" />
        </>
      )}
      {userEmail.length !== 0 && <Text>{userEmail}, you are already logged in.</Text>}
    </Container>
  );
};

export default RegisterScreen;
