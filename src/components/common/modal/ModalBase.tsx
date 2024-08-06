import React, { useCallback, useMemo } from 'react';

import { KeyboardAvoidingView, SafeAreaView, StyleSheet, View, ViewStyle } from 'react-native';
import Modal from 'react-native-modal';

import { IModalProps } from 'components/common/modal/modalBase.interface';

import { heightCalculator } from 'utils/heightCalculator';

import { ColorCodes } from 'constants/colors';

export default function ModalBase(props: IModalProps) {
  const {
    backgroundColor = ColorCodes.white,
    backdropDismiss = false,
    onToggleModalIsVisible,
    isModalVisible,
    children,
    isAwareKeyboard = false,
    paddingTop,
    isSafeView = true,
    onModalHide,
  } = props;

  const modalClose = useCallback(() => {
    if (!backdropDismiss) {
      return;
    }

    onToggleModalIsVisible();
  }, [backdropDismiss, onToggleModalIsVisible]);

  const modalStyles = useMemo(() => styles(paddingTop), [paddingTop]);

  const RootView = isSafeView ? SafeAreaView : View;

  return (
    <RootView style={{ zIndex: 100 }}>
      {isAwareKeyboard ? (
        <KeyboardAvoidingView>
          <Modal
            onBackdropPress={modalClose}
            onModalHide={onModalHide}
            isVisible={isModalVisible}
            animationIn={'slideInUp'}
            animationOut={'slideOutDown'}
            hideModalContentWhileAnimating={true}
            useNativeDriverForBackdrop={true}
            style={{ margin: 0 }}
            backdropOpacity={0.6}
            avoidKeyboard={true}
          >
            <View style={(modalStyles.modalViewContainer, { backgroundColor })}>{children}</View>
          </Modal>
        </KeyboardAvoidingView>
      ) : (
        <Modal
          onBackdropPress={modalClose}
          onModalHide={onModalHide}
          isVisible={isModalVisible}
          animationIn={'slideInUp'}
          animationOut={'slideOutDown'}
          hideModalContentWhileAnimating={true}
          useNativeDriverForBackdrop={true}
          style={{ margin: 0 }}
          backdropOpacity={0.6}
          avoidKeyboard={true}
        >
          <View style={[modalStyles.modalViewContainer, { backgroundColor }]}>{children}</View>
        </Modal>
      )}
    </RootView>
  );
}

interface IStyles {
  modalContainer: ViewStyle;
  modalViewContainer: ViewStyle;
}

const styles = (paddingTop?: number) =>
  StyleSheet.create<IStyles>({
    modalContainer: {
      height: '100%',
    },
    modalViewContainer: {
      paddingTop: paddingTop ?? 16,
      borderTopRightRadius: 16,
      borderTopLeftRadius: 16,
      position: 'absolute',
      bottom: 0,
      maxHeight: heightCalculator(717),
      minHeight: 168,
      width: '100%',
      backgroundColor: ColorCodes.white,
    },
  });
