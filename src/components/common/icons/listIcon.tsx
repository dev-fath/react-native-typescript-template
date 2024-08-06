import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { ISvgIconProps } from 'components/common/icons/icon.interface';

export default function ListIcon({ width, height }: ISvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 40 46" fill="none">
      <Path
        d="M20.3434 25.1739C21.2601 25.1739 22.0101 24.3479 22.0101 23.3384C22.0101 22.3289 21.2601 21.503 20.3434 21.503C19.4268 21.503 18.6768 22.3289 18.6768 23.3384C18.6768 24.3479 19.4268 25.1739 20.3434 25.1739ZM20.3434 32.5158C21.2601 32.5158 22.0101 31.6898 22.0101 30.6803C22.0101 29.6708 21.2601 28.8448 20.3434 28.8448C19.4268 28.8448 18.6768 29.6708 18.6768 30.6803C18.6768 31.6898 19.4268 32.5158 20.3434 32.5158ZM20.3434 17.8321C21.2601 17.8321 22.0101 17.0061 22.0101 15.9966C22.0101 14.9871 21.2601 14.1611 20.3434 14.1611C19.4268 14.1611 18.6768 14.9871 18.6768 15.9966C18.6768 17.0061 19.4268 17.8321 20.3434 17.8321ZM20.3434 25.1739C21.2601 25.1739 22.0101 24.3479 22.0101 23.3384C22.0101 22.3289 21.2601 21.503 20.3434 21.503C19.4268 21.503 18.6768 22.3289 18.6768 23.3384C18.6768 24.3479 19.4268 25.1739 20.3434 25.1739ZM20.3434 32.5158C21.2601 32.5158 22.0101 31.6898 22.0101 30.6803C22.0101 29.6708 21.2601 28.8448 20.3434 28.8448C19.4268 28.8448 18.6768 29.6708 18.6768 30.6803C18.6768 31.6898 19.4268 32.5158 20.3434 32.5158ZM20.3434 17.8321C21.2601 17.8321 22.0101 17.0061 22.0101 15.9966C22.0101 14.9871 21.2601 14.1611 20.3434 14.1611C19.4268 14.1611 18.6768 14.9871 18.6768 15.9966C18.6768 17.0061 19.4268 17.8321 20.3434 17.8321Z"
        fill="black"
      />
    </Svg>
  );
}