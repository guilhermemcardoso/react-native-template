import React, { useState } from 'react';
import Button from '~/components/button';
import Container from '~/components/container';
import Text from '~/components/text';
import { useDispatch, useSelector } from 'react-redux';
import { emailSignOut } from '~/services/auth';

const LogoutScreen = () => {
  
  const dispatch = useDispatch();
  const { userEmail, error, errorMessage } = useSelector((state) => state.auth);
  const handleLogout = async () => {
    dispatch(emailSignOut());
  };

  return (
    <Container>
      <Text title>Logout</Text>
      {userEmail.length !== 0 && (
          <Button onPress={handleLogout} title="Logout" />
      )}
      {userEmail.length === 0 && (<Text>There is no user logged in at this moment.</Text>)}
    </Container>
  );
};

export default LogoutScreen;
