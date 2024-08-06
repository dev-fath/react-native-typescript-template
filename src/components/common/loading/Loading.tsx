import LottieView from 'lottie-react-native';

import React from 'react';

import { View } from 'react-native';

import { loading } from 'assets/animations';

export default function Loading({ size = 180 }: { size?: number }) {
  return (
    <View
      style={{
        zIndex: 1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <LottieView
        source={loading}
        loop
        autoPlay
        style={{ width: size, height: size }}
        resizeMode={'contain'}
        renderMode={'AUTOMATIC'}
        useNativeLooping
      />
    </View>
  );
}
