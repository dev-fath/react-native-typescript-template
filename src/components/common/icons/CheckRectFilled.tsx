import React from 'react';
import { ISvgIconProps } from 'components/common/icons/icon.interface';
import Svg, { Path, Rect } from 'react-native-svg';

export default function CheckRectFilled({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Rect width={width} height={height} rx="6" fill={color}/>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6533 7.22595C17.4151 7.06446 17.0744 7.09593 16.8772 7.32607L10.4525 14.8238L6.29093 10.8992C6.07512 10.6957 5.73403 10.6888 5.50933 10.8773L5.07192 11.2442C4.82168 11.4542 4.80605 11.8288 5.04735 12.0564L9.90016 16.6328C10.0799 16.8023 10.324 16.8851 10.5657 16.8738C10.8075 16.8625 11.0434 16.7571 11.2052 16.5684L18.2437 8.35434C18.4649 8.09629 18.3939 7.72802 18.1315 7.55011L17.6533 7.22595Z"
        fill={'white'}/>
    </Svg>
  );
}
