import { ReactNode } from 'react';

import { ViewStyle } from 'react-native';

export interface IPopupBaseStyle {
  modalContainer: ViewStyle;
  closeButton: ViewStyle;
  modalViewContainer: ViewStyle;
}

export interface IPopupBaseProps {
  isModalVisible: boolean;
  onToggleModalIsVisible: () => void;
  onModalHide?: () => void;
  showCloseButton?: boolean;
  backdropDismiss?: boolean;
  children: ReactNode;
}
