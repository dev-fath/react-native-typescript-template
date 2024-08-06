import React, { useState } from 'react';

import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

import { Typography } from 'components/common/typography/Typography';

import { ColorCodes } from 'constants/colors';
import FontFamily from 'constants/fontFamily';

interface ITextareaBaseProps
  extends Pick<TextInputProps, 'placeholder' | 'placeholderTextColor' | 'maxLength'> {
  onChangeText: (text: string) => void;
  text: string;
  errorMessage?: string;
  size?: ContainerSizeType;
  onFocusAction?: () => void;
  onBlurAction?: () => void;
}

interface IStyleProps {
  text?: string;
  maxLength?: number;
  containerSize?: ContainerSizeType;
  isFocused?: boolean;
}

type ContainerSizeType = 'sm' | 'lg';

const getIsError = (length: number, maxLength: number) => {
  return length > maxLength;
};

export default function TextareaBase(props: ITextareaBaseProps) {
  const {
    text,
    onChangeText,
    errorMessage,
    maxLength = 100,
    placeholder,
    placeholderTextColor = ColorCodes.gray2,
    size,
    onFocusAction,
    onBlurAction,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const defaultSize = maxLength > 100 ? 'lg' : 'sm';
  const containerSize: ContainerSizeType = size ?? defaultSize;

  const styleProps: IStyleProps = { text, maxLength, containerSize, isFocused };

  const isError = getIsError(text.length, maxLength);

  const onFocus = () => {
    setIsFocused(true);
    if (onFocusAction) {
      onFocusAction();
    }
  };

  const onBlur = () => {
    setIsFocused(false);
    if (onBlurAction) {
      onBlurAction();
    }
  };

  return (
    <>
      <View style={styles(styleProps).container}>
        <TextInput
          style={styles({}).input}
          value={text}
          onChangeText={onChangeText}
          multiline={true}
          textAlign={'left'}
          textAlignVertical={'top'}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          onFocus={onFocus}
          onBlur={onBlur}
          maxLength={maxLength}
        />
        <View style={styles({}).lengthIndicator}>
          <Typography.Caption color={ColorCodes.gray2}>
            {text.length}/{maxLength}
          </Typography.Caption>
        </View>
      </View>
      <View>
        {isError ? (
          <Typography.Caption color={ColorCodes.pink}>{errorMessage ?? ''}</Typography.Caption>
        ) : (
          <></>
        )}
      </View>
    </>
  );
}

const styles = (props: IStyleProps) => {
  const { text = '', containerSize = 'sm', maxLength = 100, isFocused = false } = props;
  const isError = getIsError(text.length, maxLength);

  const getHeight = () => {
    return containerSize === 'sm' ? 112 : 244;
  };

  const getBorderColor = () => {
    return isError ? ColorCodes.pink : isFocused ? ColorCodes.mintGreen : ColorCodes.blueGray2;
  };

  return StyleSheet.create({
    container: {
      height: getHeight(),
      borderWidth: 1,
      borderColor: getBorderColor(),
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 32,
      backgroundColor: ColorCodes.white,
    },
    input: {
      flex: 1,
      fontFamily: FontFamily.poppins.regular,
      fontSize: 14,
      color: ColorCodes.gray3,
      backgroundColor: ColorCodes.white,
    },
    lengthIndicator: { position: 'absolute', right: 16, bottom: 16 },
  });
};
