import React from 'react';

import {
  DimensionValue,
  TextStyle,
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import { StyleSheet, Text, TextProps } from 'react-native';

import { ColorCodes } from 'constants/colors';
import FontFamily from 'constants/fontFamily';

function Title1(props: ITypographyProps) {
  const { color, width, textAlign, children, hasUnderline, ...restProps } =
    props;

  return (
    <Text
      style={textStyle({ color, width, textAlign, hasUnderline }).title1}
      {...restProps}
    >
      {children}
    </Text>
  );
}
function Title2(props: ITypographyProps) {
  const { color, width, textAlign, children, hasUnderline, ...restProps } =
    props;

  return (
    <Text
      style={textStyle({ color, width, textAlign, hasUnderline }).title2}
      {...restProps}
    >
      {children}
    </Text>
  );
}

function SubTitle1(props: ITypographyProps) {
  const { color, width, textAlign, children, hasUnderline, ...restProps } =
    props;

  return (
    <Text
      style={textStyle({ color, width, textAlign, hasUnderline }).subtitle1}
      {...restProps}
    >
      {children}
    </Text>
  );
}
function SubTitle2(props: ITypographyProps) {
  const { color, width, textAlign, children, hasUnderline, ...restProps } =
    props;

  return (
    <Text
      style={textStyle({ color, width, textAlign, hasUnderline }).subtitle2}
      {...restProps}
    >
      {children}
    </Text>
  );
}
function SubTitle3(props: ITypographyProps) {
  const { color, width, textAlign, children, hasUnderline, ...restProps } =
    props;

  return (
    <Text
      style={textStyle({ color, width, textAlign, hasUnderline }).subtitle3}
      {...restProps}
    >
      {children}
    </Text>
  );
}

function SubTitle4(props: ITypographyProps) {
  const { color, width, textAlign, children, hasUnderline, ...restProps } =
    props;

  return (
    <Text
      style={textStyle({ color, width, textAlign, hasUnderline }).subtitle4}
      {...restProps}
    >
      {children}
    </Text>
  );
}

/**
 * Main Text
 */
function TextRegular1(props: ITypographyProps) {
  const { color, width, textAlign, children, hasUnderline, ...restProps } =
    props;

  return (
    <Text
      style={textStyle({ color, width, textAlign, hasUnderline }).text1}
      {...restProps}
    >
      {children}
    </Text>
  );
}
function TextRegular2(props: ITypographyProps) {
  const { color, width, textAlign, children, hasUnderline, ...restProps } =
    props;

  return (
    <Text
      style={textStyle({ color, width, textAlign, hasUnderline }).text2}
      {...restProps}
    >
      {children}
    </Text>
  );
}

function Caption(props: ITypographyProps) {
  const { color, width, textAlign, children, hasUnderline, ...restProps } =
    props;

  return (
    <Text
      style={textStyle({ color, width, textAlign, hasUnderline }).caption}
      {...restProps}
    >
      {children}
    </Text>
  );
}

function ButtonText(props: ITypographyProps) {
  const { color, width, textAlign, children, hasUnderline, ...restProps } =
    props;

  return (
    <Text
      style={textStyle({ color, width, textAlign, hasUnderline }).buttonText}
      {...restProps}
    >
      {children}
    </Text>
  );
}

function PopupTitle(props: ITypographyProps) {
  const { color, width, textAlign, children, hasUnderline, ...restProps } =
    props;

  return (
    <Text
      style={textStyle({ color, width, textAlign, hasUnderline }).popupTitle}
      {...restProps}
    >
      {children}
    </Text>
  );
}

function PopupSubText(props: ITypographyProps) {
  const { color, width, textAlign, children, hasUnderline, ...restProps } =
    props;

  return (
    <Text
      style={textStyle({ color, width, textAlign, hasUnderline }).popupSubText}
      {...restProps}
    >
      {children}
    </Text>
  );
}

type textAlignType =
  | 'auto'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | undefined;

export interface ITypographyProps extends Omit<TextProps, 'style'> {
  textAlign?: textAlignType;
  hasUnderline?: boolean;
  width?: DimensionValue;
  color?: string;
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  textDecorationColor?: string;
}

type ITypographyStyleProps = Pick<
  ITypographyProps,
  'textAlign' | 'width' | 'color' | 'hasUnderline'
>;

const LINE_HEIGHT_SCALE = 1.5;

const textStyle = (styleProp: ITypographyStyleProps) => {
  const {
    hasUnderline,
    width: _width,
    color: _color,
    textAlign: _inset,
  } = styleProp;

  const width = _width;
  const color = _color || ColorCodes.gray3;
  const textAlign = _inset || 'auto';
  const underLine: {
    textDecorationStyle: 'solid' | 'double' | 'dotted' | 'dashed';
    textDecorationColor: string;
    textDecorationLine:
      | 'none'
      | 'underline'
      | 'line-through'
      | 'underline line-through';
  } = {
    textDecorationStyle: hasUnderline ? 'solid' : undefined,
    textDecorationColor: hasUnderline ? color : undefined,
    textDecorationLine: hasUnderline ? 'underline' : undefined,
  };

  return StyleSheet.create<{ [key: string]: TextStyle }>({
    title1: {
      color: color,
      width: width,
      textAlign: textAlign,
      verticalAlign: 'middle',
      fontFamily: FontFamily.poppins.semiBold,
      fontSize: 36,
      lineHeight: 36 * LINE_HEIGHT_SCALE,
      textDecorationStyle: underLine.textDecorationStyle,
      textDecorationColor: underLine.textDecorationStyle,
      textDecorationLine: underLine.textDecorationStyle,
      ...underLine,
    },
    title2: {
      color: color,
      width: width,
      textAlign: textAlign,
      verticalAlign: 'middle',
      fontFamily: FontFamily.poppins.semiBold,
      fontSize: 26,
      lineHeight: 26 * LINE_HEIGHT_SCALE,
      ...underLine,
    },
    subtitle1: {
      color: color,
      width: width,
      textAlign: textAlign,
      verticalAlign: 'middle',
      fontFamily: FontFamily.poppins.semiBold,
      fontSize: 20,
      lineHeight: 20 * LINE_HEIGHT_SCALE,
      ...underLine,
    },
    subtitle2: {
      color: color,
      width: width,
      textAlign: textAlign,
      verticalAlign: 'middle',
      fontFamily: FontFamily.poppins.semiBold,
      fontSize: 18,
      lineHeight: 18 * LINE_HEIGHT_SCALE,
      ...underLine,
    },
    subtitle3: {
      color: color,
      width: width,
      textAlign: textAlign,
      verticalAlign: 'middle',
      fontFamily: FontFamily.poppins.regular,
      fontSize: 18,
      lineHeight: 18 * LINE_HEIGHT_SCALE,
      ...underLine,
    },
    subtitle4: {
      color: color,
      width: width,
      textAlign: textAlign,
      verticalAlign: 'middle',
      fontFamily: FontFamily.poppins.semiBold,
      fontSize: 14,
      lineHeight: 14 * LINE_HEIGHT_SCALE,
      ...underLine,
    },
    text1: {
      color: color,
      width: width,
      textAlign: textAlign,
      verticalAlign: 'middle',
      fontFamily: FontFamily.poppins.regular,
      fontSize: 16,
      lineHeight: 16 * LINE_HEIGHT_SCALE,
      ...underLine,
    },
    text2: {
      color: color,
      width: width,
      textAlign: textAlign,
      verticalAlign: 'middle',
      fontFamily: FontFamily.poppins.regular,
      fontSize: 14,
      lineHeight: 14 * LINE_HEIGHT_SCALE,
      ...underLine,
    },
    caption: {
      color: color,
      width: width,
      textAlign: textAlign,
      verticalAlign: 'middle',
      fontFamily: FontFamily.poppins.regular,
      fontSize: 12,
      lineHeight: 12 * LINE_HEIGHT_SCALE,
      ...underLine,
    },
    buttonText: {
      color: color,
      width: width,
      textAlign: textAlign,
      verticalAlign: 'middle',
      fontFamily: FontFamily.poppins.semiBold,
      fontSize: 16,
      lineHeight: 16 * LINE_HEIGHT_SCALE,
      ...underLine,
    },
    popupTitle: {
      color: color,
      width: width,
      textAlign: textAlign,
      verticalAlign: 'middle',
      fontFamily: FontFamily.poppins.semiBold,
      fontSize: 20,
      lineHeight: 20 * LINE_HEIGHT_SCALE,
      ...underLine,
    },
    popupSubText: {
      color: color,
      width: width,
      textAlign: textAlign,
      verticalAlign: 'middle',
      fontFamily: FontFamily.poppins.regular,
      fontSize: 14,
      lineHeight: 14 * LINE_HEIGHT_SCALE,
      ...underLine,
    },
  });
};

export const Typography = {
  Title1,
  Title2,
  TextRegular1,
  TextRegular2,
  SubTitle1,
  SubTitle2,
  SubTitle3,
  SubTitle4,
  ButtonText,
  Caption,
  PopupTitle,
  PopupSubText,
};
