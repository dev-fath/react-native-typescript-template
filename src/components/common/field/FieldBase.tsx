import React from 'react';

import { View } from 'react-native';

import { Typography } from 'components/common/typography/Typography';

import { ColorCodes } from 'constants/colors';
import { SPACE_SIZE } from 'constants/spaceSize';

interface IFieldProps {
  title: string;
  data: string;
}

export default function FieldBase(props: IFieldProps) {
  const { data, title } = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: SPACE_SIZE['8'],
        padding: SPACE_SIZE['12'],
        borderRadius: SPACE_SIZE['8'],
        backgroundColor: ColorCodes.temp,
      }}
    >
      <View>
        <Typography.TextRegular1 color={ColorCodes.gray2}>{title}</Typography.TextRegular1>
      </View>
      <View>
        <Typography.TextRegular1>{data}</Typography.TextRegular1>
      </View>
    </View>
  );
}
