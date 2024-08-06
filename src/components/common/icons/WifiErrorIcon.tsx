import React from 'react';

import Svg, { Circle, ClipPath, Defs, G, Mask, Path, Rect } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function WifiErrorIcon({ width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_741_59711)">
        <Circle cx="12.0008" cy="15.9002" r="2.2" fill="#D2D4DB" />
        <Mask id="mask0_741_59711" maskUnits="userSpaceOnUse" x="0" y="5" width="24" height="24">
          <Circle cx="12" cy="17" r="11" stroke="white" strokeWidth="2" strokeLinejoin="round" />
        </Mask>
        <G mask="url(#mask0_741_59711)">
          <Path
            d="M0.484176 6.33685L12.5858 19.4375L24.3167 6.52983L12.7362 0.863495L0.484176 6.33685Z"
            fill="#D2D4DB"
          />
        </G>
        <Mask id="mask1_741_59711" maskUnits="userSpaceOnUse" x="4" y="9" width="16" height="16">
          <Circle cx="12.0004" cy="17.0004" r="6.6" stroke="white" strokeWidth="2" />
        </Mask>
        <G mask="url(#mask1_741_59711)">
          <Path
            d="M0.432114 6.46098L12.0098 18.5682L23.0607 6.48449L12.0277 1.28939L0.432114 6.46098Z"
            fill="#D2D4DB"
          />
        </G>
        <Path
          d="M24 10.5C24 12.9853 21.9853 15 19.5 15C17.0147 15 15 12.9853 15 10.5C15 8.01472 17.0147 6 19.5 6C21.9853 6 24 8.01472 24 10.5Z"
          fill="#DB0A5B"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 10.5C25 13.5376 22.5376 16 19.5 16C16.4624 16 14 13.5376 14 10.5C14 7.46243 16.4624 5 19.5 5C22.5376 5 25 7.46243 25 10.5ZM19.5 14.3077C21.6029 14.3077 23.3077 12.6029 23.3077 10.5C23.3077 8.39707 21.6029 6.69231 19.5 6.69231C17.3971 6.69231 15.6923 8.39707 15.6923 10.5C15.6923 12.6029 17.3971 14.3077 19.5 14.3077Z"
          fill="#F0F1F5"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.9009 10.5003L17.5078 11.8934L18.1061 12.4917L19.4993 11.0986L20.8924 12.4918L21.4907 11.8934L20.0976 10.5003L21.4907 9.10711L20.8924 8.50879L19.4993 9.90195L18.1061 8.50882L17.5078 9.10714L18.9009 10.5003Z"
          fill="#F0F1F5"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_741_59711">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
