import React, { PropsWithChildren, useMemo } from 'react';

import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';

import {
  IButtonBaseProps,
  IButtonBaseStyleProps,
  IButtonColorObject,
} from 'components/common/buttonBase/buttonBase.interface';
import IconBase from 'components/common/icons';
import { Typography } from 'components/common/typography/Typography';

import { ColorCodes } from 'constants/colors';
import { SPACE_SIZE } from 'constants/spaceSize';

const getColorCode = (props: IButtonBaseProps) => {
  const { fill: _fill, disabled } = props;
  const fill = _fill ?? 'default';
  const colorObject: IButtonColorObject = {
    textColor: ColorCodes.white,
    borderColor: ColorCodes.mintGreen,
    backgroundColor: ColorCodes.mintGreen,
  };

  if (disabled) {
    colorObject.textColor = ColorCodes.white;
    colorObject.borderColor = ColorCodes.blueGray2;
    colorObject.backgroundColor = ColorCodes.blueGray2;

    if (fill === 'default') {
      colorObject.textColor = ColorCodes.white;
    } else if (fill === 'line') {
      colorObject.backgroundColor = 'transparent';
    } else if (fill === 'clear') {
      colorObject.textColor = ColorCodes.blueGray2;
      colorObject.backgroundColor = 'transparent';
      colorObject.borderColor = 'transparent';
    }

    return colorObject;
  }

  if (fill === 'default') {
    colorObject.textColor = ColorCodes.white;
    colorObject.borderColor = ColorCodes.mintGreen;
    colorObject.backgroundColor = ColorCodes.mintGreen;
  }

  if (fill === 'color') {
    colorObject.textColor = ColorCodes.white;
    colorObject.borderColor = ColorCodes.darkGreen;
    colorObject.backgroundColor = ColorCodes.darkGreen;
  }

  if (fill === 'line') {
    colorObject.textColor = ColorCodes.mintGreen;
    colorObject.borderColor = ColorCodes.mintGreen;
    colorObject.backgroundColor = 'transparent';
  }

  if (fill === 'grayscale-outline') {
    colorObject.textColor = ColorCodes.gray2;
    colorObject.borderColor = ColorCodes.gray2;
    colorObject.backgroundColor = 'transparent';
  }

  if (fill === 'clear') {
    colorObject.textColor = disabled ? ColorCodes.blueGray2 : ColorCodes.gray1;
    colorObject.borderColor = 'transparent';
    colorObject.backgroundColor = 'transparent';
  }

  if (fill === 'disabled') {
    colorObject.textColor = ColorCodes.white;
    colorObject.borderColor = ColorCodes.blueGray2;
    colorObject.backgroundColor = ColorCodes.blueGray2;
  }

  return colorObject;
};

export default function ButtonBase(props: IButtonBaseProps & PropsWithChildren) {
  const { disabled, onPress: _onPress, size: _size } = props;
  const size = _size ?? 'large';
  const onPress = !disabled ? _onPress : () => {};
  const { borderColor, textColor, backgroundColor } = getColorCode(props);

  const { children, iconName, iconWidth, iconHeight, contentsWrapperViewStyles, buttonTextWidth } =
    props;

  const buttonStyle =
    size === 'large'
      ? buttonBaseStyles({ borderColor, backgroundColor }).buttonBaseStyle
      : buttonBaseStyles({ borderColor, backgroundColor }).smallButtonBaseStyle;

  const defaultIconSize = useMemo(() => (size === 'large' ? 24 : 14), [size]);

  return (
    <Pressable {...props} onPress={onPress} style={buttonStyle}>
      <View
        style={{
          ...buttonText.buttonTextContainer,
          ...contentsWrapperViewStyles,
        }}
      >
        {iconName ? (
          <View style={{ marginRight: size === 'large' ? 8 : 4 }}>
            <IconBase
              icon={iconName}
              color={textColor}
              width={iconWidth ?? defaultIconSize}
              height={iconHeight ?? defaultIconSize}
            />
          </View>
        ) : null}
        {size === 'small' ? (
          <View>
            <Typography.ButtonText
              textAlign={'center'}
              color={textColor}
              numberOfLines={1}
              ellipsizeMode="tail"
              width={buttonTextWidth ?? '100%'}
            >
              {children}
            </Typography.ButtonText>
          </View>
        ) : (
          <Typography.ButtonText
            textAlign={'center'}
            color={textColor}
            numberOfLines={1}
            ellipsizeMode="tail"
            width={buttonTextWidth ?? '100%'}
            hasUnderline={props.hasTextUnderline}
          >
            {children}
          </Typography.ButtonText>
        )}
      </View>
    </Pressable>
  );
}

const buttonText = StyleSheet.create({
  buttonTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

const buttonBaseStyles = (styleProps: IButtonBaseStyleProps) => {
  const { borderColor, backgroundColor } = styleProps;

  const styleObject: ViewStyle = {
    borderRadius: 50,
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    borderStyle: 'solid',
    borderWidth: 1,
  };

  return StyleSheet.create({
    buttonBaseStyle: {
      ...styleObject,
      height: 50,
      paddingTop: 8,
      paddingBottom: 8,
    },
    smallButtonBaseStyle: {
      ...styleObject,
      height: 56,
      borderRadius: 45,
      alignSelf: 'flex-start',
      justifyContent: 'center',
      paddingVertical: SPACE_SIZE['8'],
      paddingHorizontal: SPACE_SIZE['24'],
    },
  });
};
