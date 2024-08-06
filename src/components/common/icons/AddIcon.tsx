import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function AddIcon({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 25" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.4999 13.1499C17.8589 13.1499 18.1499 12.8589 18.1499 12.4999C18.1499 12.141 17.8589 11.8499 17.4999 11.8499L12.6499 11.8499L12.6499 6.99998C12.6499 6.64099 12.3589 6.34998 11.9999 6.34998C11.641 6.34998 11.3499 6.64099 11.3499 6.99998L11.3499 11.8499L6.49991 11.8499C6.14092 11.8499 5.84991 12.1409 5.84991 12.4999C5.84991 12.8589 6.14092 13.1499 6.49991 13.1499L11.3499 13.1499L11.3499 18C11.3499 18.359 11.6409 18.65 11.9999 18.65C12.3589 18.65 12.6499 18.359 12.6499 18L12.6499 13.1499L17.4999 13.1499Z"
        fill={color}
      />
    </Svg>
  );
}
