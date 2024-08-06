import React from 'react';

import { View } from 'react-native';

import { Typography } from 'components/common/typography/Typography';

import { ColorCodes } from 'constants/colors';
import { SPACE_SIZE } from 'constants/spaceSize';

type BadgeColorType = 'dark' | 'primary' | 'info' | 'warning' | 'success' | 'error' | 'disabled';
interface IBadgeProps {
  title: string;
  color: BadgeColorType;
}

const getBadgeColor: { [key in BadgeColorType]: string } = {
  dark: ColorCodes.gray3,
  error: ColorCodes.pink,
  info: ColorCodes.temp,
  success: ColorCodes.temp,
  primary: ColorCodes.mintGreen,
  warning: ColorCodes.temp,
  disabled: ColorCodes.blueGray2,
};

export default function Badge(props: IBadgeProps) {
  const { color, title } = props;
  const textColor = color === 'dark' ? ColorCodes.white : ColorCodes.gray3;

  return (
    <View
      style={{
        alignItems: 'flex-start',
      }}
    >
      <View
        style={{
          paddingHorizontal: SPACE_SIZE['12'],
          height: 28,
          borderRadius: 100,
          backgroundColor: getBadgeColor[color],
          justifyContent: 'center',
        }}
      >
        <Typography.Caption textAlign={'center'} color={textColor}>
          {title}
        </Typography.Caption>
      </View>
    </View>
  );
}
