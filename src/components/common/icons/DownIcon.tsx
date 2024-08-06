import React from 'react';
import { ISvgIconProps } from 'components/common/icons/icon.interface';
import Svg, { Path } from 'react-native-svg';

export default function DownIcon({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M15.082 4.97659L14.9332 5.11025L15.082 4.97659C15.2214 5.13181 15.2086 5.37066 15.0534 5.51009L8.519 11.38C8.27405 11.6 7.90262 11.6 7.65767 11.38L1.12326 5.51008C0.968047 5.37066 0.955252 5.1318 1.09468 4.97659L1.45109 4.57983C1.45109 4.57983 1.45109 4.57983 1.45109 4.57983C1.59052 4.42462 1.82937 4.41183 1.98458 4.55125L8.08834 10.0343L14.1921 4.55125C14.3473 4.41183 14.5862 4.42462 14.7256 4.57983L15.082 4.97659Z"
        fill={color}
        stroke={color}
        strokeWidth="0.4"
      />
    </Svg>
  );
}
