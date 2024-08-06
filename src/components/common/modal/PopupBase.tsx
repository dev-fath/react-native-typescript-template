import React from 'react';

import { Dimensions, Pressable, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';

import IconBase from 'components/common/icons';
import { IPopupBaseProps, IPopupBaseStyle } from 'components/common/modal/popupBase.interface';

import { ColorCodes } from 'constants/colors';
import { SPACE_SIZE } from 'constants/spaceSize';

export default function PopupBase(props: IPopupBaseProps) {
  const {
    onToggleModalIsVisible,
    onModalHide,
    isModalVisible,
    children,
    showCloseButton = true,
    backdropDismiss = true,
  } = props;

  const onBackdropPress = () => {
    if (backdropDismiss) {
      onToggleModalIsVisible();
    }
  };

  return (
    <Modal
      style={styles.modalContainer}
      onBackdropPress={onBackdropPress}
      onModalHide={onModalHide}
      isVisible={isModalVisible}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      backdropColor={ColorCodes.gray3}
      backdropOpacity={0.6}
      useNativeDriverForBackdrop={true}
    >
      {showCloseButton && (
        <Pressable style={styles.closeButton} onPress={onToggleModalIsVisible}>
          <IconBase icon={'close'} color={ColorCodes.white} width={24} height={24} />
        </Pressable>
      )}
      <View style={styles.modalViewContainer}>{children}</View>
    </Modal>
  );
}

const styles = StyleSheet.create<IPopupBaseStyle>({
  modalContainer: {
    flex: 1,
    paddingHorizontal: SPACE_SIZE['12'],
  },
  closeButton: {
    alignItems: 'flex-end',
    marginBottom: SPACE_SIZE['8'],
  },
  modalViewContainer: {
    backgroundColor: ColorCodes.white,
    borderRadius: 10,
    width: '100%',
    maxHeight: Dimensions.get('window').height - SPACE_SIZE['24'] * 2,
    minHeight: 100,
  },
});
