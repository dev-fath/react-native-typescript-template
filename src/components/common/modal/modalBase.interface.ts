import { ReactNode } from 'react';

import { ModalProps } from 'react-native';

export interface IModalProps extends Omit<ModalProps, 'style'> {
  backgroundColor?: string;
  backdropDismiss?: boolean;
  isModalVisible: boolean;
  onToggleModalIsVisible: () => void;
  onModalHide?: () => void;

  children: ReactNode;
  isAwareKeyboard?: boolean;
  paddingTop?: number;
  isSafeView?: boolean;
}

export interface IModalBackdropProps {
  onPress: () => void;
}
