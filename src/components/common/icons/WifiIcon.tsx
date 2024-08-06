import React from 'react';
import { ISvgIconProps } from 'components/common/icons/icon.interface';
import Svg, { Circle, ClipPath, Defs, G, Mask, Path, Rect } from 'react-native-svg';

export default function WifiIcon({ color, width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_381_17411)">
        <Circle cx="12" cy="16" r="2" fill={color} />
        <Mask
          id="mask0_381_17411"
          // style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="-1"
          y="4"
          width="26"
          height="26"
        >
          <Circle cx="12" cy="17" r="12" stroke="white" strokeWidth="2" strokeLinejoin="round" />
        </Mask>
        <G mask="url(#mask0_381_17411)">
          <Path
            d="M-0.563139 5.36783L12.6386 19.6594L25.436 5.57836L12.8027 -0.603105L-0.563139 5.36783Z"
            fill={color}
          />
        </G>
        <Mask
          id="mask1_381_17411"
          // style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="4"
          y="9"
          width="16"
          height="16"
        >
          <Circle cx="12" cy="17" r="7" stroke="white" strokeWidth="2" />
        </Mask>
        <G mask="url(#mask1_381_17411)">
          <Path
            d="M-0.268896 5.82201L12.0104 18.663L23.7311 5.84695L12.0295 0.336992L-0.268896 5.82201Z"
            fill={color}
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_381_17411">
          <Rect width={width} height={height} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
