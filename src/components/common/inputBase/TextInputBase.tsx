import React, { useRef, useState } from 'react';

import {
  NativeSyntheticEvent,
  Pressable,
  StyleProp,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextInputSubmitEditingEventData,
  View,
  ViewStyle,
} from 'react-native';
import { TextInput as TextInputPaper } from 'react-native-paper';

import IconBase from 'components/common/icons';
import { IconKindType } from 'components/common/icons/icon.interface';
import {
  iconButtonStyles,
  inputStyle,
} from 'components/common/inputBase/textInputBase.style';
import { Typography } from 'components/common/typography/Typography';

import { ColorCodes } from 'constants/colors';

interface ITextInputBaseProps extends Omit<TextInputProps, 'style'> {
  text: string;
  onChangeText: (text: string) => void;
  disabled?: boolean;
  textColor?: string;
  textInputType?: string;
  label?: string;
  errorMessage?: string;
  iconName?: IconKindType;
  iconSize?: number;
  iconStyle?: StyleProp<ViewStyle>;
  onPress?: () => void | Promise<void>;
  onSubmitEditing?: () => void | Promise<void>;
  onEnter?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void | Promise<void>;
  isError?: boolean;
  prefixExisted?: boolean;
  cursorColor?: string;
  borderRadius?: number;
  borderColorDisabled?: boolean;
  onPressLabelIcon?: () => void;
  labelIconName?: IconKindType;
  isChecked?: boolean;
  checkboxLabel?: string;
  onPressCheckbox?: () => void;
  clearTextDisabled?: boolean;
  isDarkMode?: boolean;
  customBorderColor?: string;
}

type IIconButtonProps = Pick<
  ITextInputBaseProps,
  'onPress' | 'iconName' | 'iconSize'
> & {
  iconColor?: string;
};

const TextInputBase = (props: ITextInputBaseProps) => {
  const {
    disabled,
    text,
    onChangeText,
    onSubmitEditing,
    onFocus,
    onBlur,
    selectionColor = ColorCodes.mintGreen,
    placeholder,
    placeholderTextColor = ColorCodes.blueGray1,
    isError,
    borderRadius,
    borderColorDisabled,
    label,
    errorMessage,
    textColor,
    textContentType,
    cursorColor = ColorCodes.mintGreen,
    clearTextDisabled,
    labelIconName,
    isDarkMode,
    customBorderColor,
    ...rest
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const ref = useRef<TextInput>(null);

  const onInputFocused = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };
  const onInputBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  const _textColor = isError
    ? ColorCodes.pink
    : !disabled
    ? textColor
    : ColorCodes.blueGray2;

  const inputStyleProps = {
    disabled,
    isFocused,
    isError,
    borderRadius,
    borderColorDisabled,
    isDarkMode,
    textColor: _textColor,
    customBorderColor,
  };
  const inputStyles = inputStyle(inputStyleProps);

  return (
    <>
      <View style={inputStyles.container}>
        <View style={inputStyles.wrapper}>
          <TextInputPaper
            style={inputStyles.input}
            ref={ref}
            value={text}
            onChangeText={onChangeText}
            onSubmitEditing={void onSubmitEditing}
            onFocus={onInputFocused}
            onBlur={onInputBlur}
            selectionColor={
              isError ? ColorCodes.pink : (selectionColor as string)
            }
            placeholder={placeholder}
            placeholderTextColor={
              !disabled ? placeholderTextColor : ColorCodes.gray1
            }
            label={
              <Typography.SubTitle4
                color={
                  isFocused
                    ? isError
                      ? ColorCodes.gray2
                      : isDarkMode
                      ? ColorCodes.gray1
                      : ColorCodes.mintGreen
                    : text
                    ? ColorCodes.gray1
                    : ColorCodes.blueGray1
                }
              >
                {label}
              </Typography.SubTitle4>
            }
            error={isError}
            textColor={_textColor}
            activeUnderlineColor={ColorCodes.gray1}
            disabled={disabled}
            underlineStyle={{ backgroundColor: 'transparent' }}
            secureTextEntry={
              textContentType?.toLowerCase().includes('password') &&
              !passwordVisible
            }
            cursorColor={cursorColor}
            autoCapitalize="none"
            {...rest}
          />

          <View style={inputStyles.actionIconsWrapper}>
            {((!!text && textContentType === 'password') ||
              textContentType === 'newPassword') && (
              <IconButton
                iconName={'eye16'}
                iconSize={16}
                iconColor={isError && ColorCodes.pink}
                onPress={() => {
                  setPasswordVisible((prevState) => !prevState);
                }}
              />
            )}
            {!clearTextDisabled && !!text && (
              <IconButton
                iconName={'close'}
                iconSize={16}
                iconColor={
                  isError
                    ? ColorCodes.pink
                    : isDarkMode
                    ? ColorCodes.white
                    : undefined
                }
                onPress={() => {
                  onChangeText('');
                }}
              />
            )}
            {labelIconName && (
              <IconButton
                iconName={labelIconName}
                iconSize={16}
                iconColor={isError && ColorCodes.pink}
                onPress={rest.onPressLabelIcon}
              />
            )}
          </View>
        </View>
      </View>
      {isError && !!errorMessage && (
        <View style={inputStyles.errorMessageWrapper}>
          <Typography.Caption color={ColorCodes.pink}>
            {errorMessage}
          </Typography.Caption>
        </View>
      )}
    </>
  );
};

const IconButton = (props: IIconButtonProps) => {
  const { onPress, iconName, iconSize, iconColor = ColorCodes.gray3 } = props;

  const IconName: IconKindType = iconName ?? '';

  return (
    <Pressable
      style={iconButtonStyles.actionIcon}
      onPress={() => void onPress()}
    >
      {
        <IconBase
          icon={IconName}
          width={iconSize}
          height={iconSize}
          color={iconColor}
        />
      }
    </Pressable>
  );
};

export default TextInputBase;
