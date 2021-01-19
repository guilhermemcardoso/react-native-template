import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import { Center } from '@farfarawaylabs/react-native-layout';
import { IntroScreen, IntroScreenRegularSlide } from '@farfarawaylabs/react-native-beautiful-screens';
import { finishOnboarding } from '~/services/onboarding';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const demoBgImage = require('~/assets/image.png');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleDone = () => {
    dispatch(finishOnboarding());
  };

  return (
    <IntroScreen.Screen dotColor="#ffb367" activeDotColor="#58b4ae" onDone={handleDone}>
      <IntroScreen.Slide>
        <IntroScreen.ImageSection>
          <Image source={demoBgImage} style={{ width: '80%', height: '100%' }} />
        </IntroScreen.ImageSection>
        <IntroScreen.TitleSection>
          <IntroScreen.Title title="Welcome to the amazing app" />
          <IntroScreen.Subtitle subtitle="You won't believe how cool this app and how much you will love it" />
        </IntroScreen.TitleSection>
      </IntroScreen.Slide>

      <IntroScreenRegularSlide
        image={demoBgImage}
        backgroundColor="#ffe2bc"
        title="Welcome to the amazing app"
        subtitle="You won't believe how cool this app and how much you will love it"
      ></IntroScreenRegularSlide>
    </IntroScreen.Screen>
  );
}
