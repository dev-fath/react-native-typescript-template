import React from 'react';

import { Pressable, SafeAreaView } from 'react-native';

import { NavigationProp, useNavigation } from '@react-navigation/native';

import IconBase from 'components/common/icons';

const goBack = (navigation: NavigationProp<any>) => {
  return navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Home');
};

export default function BackButton(props: { color: string; onPressBackCustomEvent?: () => void }) {
  const { color, onPressBackCustomEvent } = props;
  const navigation = useNavigation();

  const onPressBack = () => {
    goBack(navigation);
  };

  return (
    <SafeAreaView>
      <Pressable
        onPress={onPressBackCustomEvent ? onPressBackCustomEvent : onPressBack}
        hitSlop={16}
      >
        <IconBase icon={'arrowBack'} color={color} />
      </Pressable>
    </SafeAreaView>
  );
}
