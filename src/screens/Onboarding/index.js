import React from 'react';
import { Image } from 'react-native';
import { IntroScreen, IntroScreenRegularSlide } from '@farfarawaylabs/react-native-beautiful-screens';
import { finishOnboarding } from '~/services/onboarding';
import { useDispatch } from 'react-redux';
import { translate } from '~/i18n';

export default function App() {
  const demoBgImage = require('~/assets/image.png');
  const dispatch = useDispatch();

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
          <IntroScreen.Title title={translate('onboardingScreen.firstSlide.title')} />
          <IntroScreen.Subtitle subtitle={translate('onboardingScreen.firstSlide.subtitle')} />
        </IntroScreen.TitleSection>
      </IntroScreen.Slide>

      <IntroScreenRegularSlide
        image={demoBgImage}
        backgroundColor="#ffe2bc"
        title={translate('onboardingScreen.secondSlide.title')}
        subtitle={translate('onboardingScreen.secondSlide.subtitle')}
      ></IntroScreenRegularSlide>
    </IntroScreen.Screen>
  );
}
