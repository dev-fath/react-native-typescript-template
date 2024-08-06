import React from 'react';
import { Pressable } from 'react-native';
import { IModalBackdropProps } from 'components/common/modal/modalBase.interface';

export default function ModalBackdrop(props: IModalBackdropProps) {
  return (
    <Pressable
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#00000088',
      }}
      onPress={props.onPress}
    />
  );
}
