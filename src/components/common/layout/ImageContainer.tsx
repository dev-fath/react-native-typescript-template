import React from 'react';

import { Image, ImagePropsBase, View } from 'react-native';

import { ColorCodes } from 'constants/colors';

export default function ImageContainer(props: ImagePropsBase) {
  return (
    <View style={{ height: 180, width: '100%' }}>
      <View
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          backgroundColor: ColorCodes.blueGray1,
          opacity: 0.89,
        }}
      />
      <View
        style={{
          alignSelf: 'center',
        }}
      >
        <Image style={{ flex: 1 }} {...props} />
      </View>
    </View>
  );
}
