import React, { useState } from 'react';
import Button from '~/components/button';
import Container from '~/components/container';
import Text from '~/components/text';
import { useDispatch, useSelector } from 'react-redux';
import { emailSignOut } from '~/services/auth';
import { translate } from '~/i18n';

const LogoutScreen = () => {
  
  const dispatch = useDispatch();
  const { userEmail, error, errorMessage } = useSelector((state) => state.auth);
  const handleLogout = async () => {
    dispatch(emailSignOut());
  };

  return (
    <Container>
      <Text title>{translate('logoutScreen.title')}</Text>
      {userEmail.length !== 0 && (
          <Button onPress={handleLogout} title={translate('logoutScreen.logoutButton')} />
      )}
      {userEmail.length === 0 && (<Text>{translate('logoutScreen.notLoggedMessage')}</Text>)}
    </Container>
  );
};

export default LogoutScreen;
