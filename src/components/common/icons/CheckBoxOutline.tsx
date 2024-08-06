import React from 'react';
import { ISvgIconProps } from 'components/common/icons/icon.interface';
import Svg, { Path } from 'react-native-svg';

export default function CheckBoxOutline({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M22 11.96C22 17.4828 17.5229 21.96 12 21.96C6.47715 21.96 2 17.4828 2 11.96C2 6.43711 6.47715 1.95996 12 1.95996C17.5229 1.95996 22 6.43711 22 11.96Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <Path
        d="M16.6778 8.75102L10.9204 15.4933L7.23673 12.0073C7.11736 11.8944 6.91751 11.8888 6.79035 11.9948L6.09965 12.5709C5.9725 12.6769 5.96619 12.8545 6.08556 12.9674L10.4089 17.0587C10.568 17.2093 10.7937 17.2899 11.0259 17.2791C11.258 17.2682 11.473 17.1671 11.6135 17.0025L17.9358 9.5988C18.0412 9.47536 18.014 9.29938 17.8751 9.20574L17.1203 8.69707C16.9813 8.60342 16.7833 8.62758 16.6778 8.75102Z"
        fill={color}
      />
    </Svg>
  );
}
