import { flexStyles } from 'styles/layout.styles';

import React from 'react';

import { View } from 'react-native';

interface IDotProps {
  containerSize: number;
  dotSize: number;
  dotColor: string;
}
export default function Dot(props: IDotProps) {
  return (
    <View
      style={[
        flexStyles.rowCenterCenter,
        { width: props.containerSize, height: props.containerSize },
      ]}
    >
      <View
        style={{
          width: props.dotSize,
          height: props.dotSize,
          borderRadius: props.dotSize,
          backgroundColor: props.dotColor,
        }}
      />
    </View>
  );
}
