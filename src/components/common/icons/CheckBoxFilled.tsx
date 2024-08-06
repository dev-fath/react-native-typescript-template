import React from 'react';
import { ISvgIconProps } from 'components/common/icons/icon.interface';
import Svg, { Path } from 'react-native-svg';

export default function CheckBoxFilled({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22.96C18.0751 22.96 23 18.0351 23 11.96C23 5.88483 18.0751 0.959961 12 0.959961C5.92487 0.959961 1 5.88483 1 11.96C1 18.0351 5.92487 22.96 12 22.96Z"
        fill={color}
      />
      <Path
        d="M16.5677 7.81566L10.3304 16.0562L6.33979 11.7956C6.21047 11.6576 5.99397 11.6507 5.85622 11.7803L5.10796 12.4844C4.97021 12.614 4.96337 12.831 5.09269 12.969L9.77632 17.9695C9.94868 18.1535 10.1932 18.252 10.4447 18.2388C10.6962 18.2256 10.929 18.102 11.0812 17.9009L17.9304 8.85184C18.0446 8.70097 18.0152 8.48588 17.8646 8.37143L17.047 7.74972C16.8965 7.63527 16.6819 7.66479 16.5677 7.81566Z"
        fill="white"
      />
    </Svg>
  );
}
