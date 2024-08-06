import { flexStyles, layoutStyles } from 'styles/layout.styles';

import React, { useState } from 'react';

import { Pressable, ScrollView, View } from 'react-native';

import IconBase, { IIconBaseProps } from 'components/common/icons';
import { IconKindType } from 'components/common/icons/icon.interface';
import ModalBase from 'components/common/modal/ModalBase';
import { Typography } from 'components/common/typography/Typography';

import { ColorCodes } from 'constants/colors';
import { SPACE_SIZE } from 'constants/spaceSize';

export interface ISelectOptionItem<TValue = any> {
  id: number | string;
  name: string;
  icon?: IIconBaseProps;
  value: TValue;
}

type TSelectOptionType = 'CHECK_BOX' | 'BASIC_BOX' | 'RIGHT_ARROW_BOX' | 'RADIO_BOX';

interface ISelectOptionModalProps<TValue = any> {
  defaultValue?: ISelectOptionItem<TValue>;
  options: ISelectOptionItem<TValue>[];
  title: string;
  placeholder?: string;
  headerCaption?: string;
  onSelectOption: (selectedItem: ISelectOptionItem<TValue>) => void;
  backdropDismiss?: boolean;
  optionType?: TSelectOptionType;
  showValue?: boolean;
  textColor?: ITextColor;
}
export default function SelectBase<TValue>(props: ISelectOptionModalProps<TValue>) {
  const {
    options,
    onSelectOption: _onSelectOption,
    title,
    placeholder,
    defaultValue,
    backdropDismiss = true,
    optionType = 'CHECK_BOX',
    headerCaption,
    showValue = true,
    textColor,
  } = props;
  const [selectedOption, setSelectedOption] = useState<ISelectOptionItem<TValue>>(defaultValue);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onToggleModal = () => {
    setIsModalVisible((prevState) => !prevState);
  };

  const onSelectOption = (option: ISelectOptionItem<TValue>) => {
    setSelectedOption(option);
    _onSelectOption(option);
    onToggleModal();
  };

  const SelectBaseModalProps: ISelectBaseModal<TValue> = {
    options: options,
    title: title,
    onSelectOption: onSelectOption,
    onToggleModal: onToggleModal,
    backdropDismiss: backdropDismiss,
    isModalVisible: isModalVisible,
    selectedOption: selectedOption,
    optionType: optionType,
    showValue: showValue,
    textColor: textColor,
  };

  return (
    <>
      <Pressable
        style={{ backgroundColor: ColorCodes.white, padding: 16, borderRadius: 12, gap: 4 }}
        onPress={onToggleModal}
      >
        {headerCaption ? (
          <>
            <View style={flexStyles.rowBetweenCenter}>
              <View>
                <Typography.Caption>{headerCaption}</Typography.Caption>
              </View>
              <IconBase icon={'down'} width={16} height={16} />
            </View>
            <View>
              <Typography.SubTitle2
                color={selectedOption ? ColorCodes.gray3 : ColorCodes.blueGray2}
              >
                {selectedOption ? selectedOption.name : placeholder ? placeholder : title}
              </Typography.SubTitle2>
            </View>
          </>
        ) : (
          <>
            <View style={[flexStyles.rowBetweenCenter, { height: 36 }]}>
              <View>
                <Typography.SubTitle2
                  color={selectedOption ? ColorCodes.gray3 : ColorCodes.blueGray2}
                >
                  {selectedOption ? selectedOption.name : placeholder ? placeholder : title}
                </Typography.SubTitle2>
              </View>
              <IconBase icon={'down'} width={16} height={16} />
            </View>
          </>
        )}
      </Pressable>
      <SelectBaseModal {...SelectBaseModalProps} />
    </>
  );
}

export interface ITextColor {
  valueTextColor: keyof typeof ColorCodes;
  nameTextColor: keyof typeof ColorCodes;
}

export interface ISelectBaseModal<TValue> {
  options: ISelectOptionItem<TValue>[];
  title: string;
  onSelectOption?: (selectedItem: ISelectOptionItem<TValue>) => void;
  onToggleModal: () => void;
  backdropDismiss?: boolean;
  isModalVisible: boolean;
  selectedOption: ISelectOptionItem<TValue>;
  headerIconName?: IconKindType;
  onPressHeaderIconName?: () => void;
  optionType: TSelectOptionType;

  showValue?: boolean;
  textColor?: ITextColor;
  footerDescription?: string;
}
export function SelectBaseModal<TValue>({
  options,
  title,
  onSelectOption,
  onToggleModal,
  backdropDismiss,
  isModalVisible,
  selectedOption,
  headerIconName,
  onPressHeaderIconName,
  optionType,
  showValue,
  textColor,
  footerDescription,
}: ISelectBaseModal<TValue>) {
  return (
    <ModalBase
      backdropDismiss={backdropDismiss}
      isModalVisible={isModalVisible}
      onToggleModalIsVisible={onToggleModal}
      backgroundColor={ColorCodes.black}
      paddingTop={0}
    >
      <ScrollView
        contentContainerStyle={[flexStyles.flexGrow, { marginBottom: 40, padding: SPACE_SIZE[24] }]}
        stickyHeaderIndices={[0]}
      >
        <View
          style={{
            paddingBottom: SPACE_SIZE['24'],
            backgroundColor: ColorCodes.black,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View>
              <Typography.PopupTitle color={ColorCodes.white}>{title}</Typography.PopupTitle>
            </View>
            {headerIconName && onPressHeaderIconName && (
              <Pressable onPress={onPressHeaderIconName}>
                <IconBase icon={headerIconName} color={ColorCodes.white} width={24} height={24} />
              </Pressable>
            )}
          </View>
        </View>
        <View style={[layoutStyles.popupContentWrapper]}>
          {options.map((option) => {
            return optionType === 'CHECK_BOX' || optionType === 'RADIO_BOX' ? (
              <CheckOptionItem
                key={option.id}
                onSelectOption={onSelectOption}
                option={option}
                isSelected={selectedOption?.value === option.value}
                optionType={optionType}
              />
            ) : (
              <BasicBoxOptionItem
                key={option.id}
                onSelectOption={onSelectOption}
                option={option}
                optionType={optionType}
                showValue={showValue}
                textColor={textColor}
              />
            );
          })}
        </View>
        {footerDescription && (
          <View style={{ flexDirection: 'row', gap: 4, marginTop: 10 }}>
            <View style={{ marginTop: 4 }}>
              <IconBase icon="info" width={12} height={12} color={ColorCodes.gray2} />
            </View>
            <View style={{ flexShrink: 1 }}>
              <Typography.Caption color={ColorCodes.gray2}>{footerDescription}</Typography.Caption>
            </View>
          </View>
        )}
      </ScrollView>
    </ModalBase>
  );
}
const CheckOptionItem = (props: {
  onSelectOption: (selectedOption: ISelectOptionItem) => void;
  option: ISelectOptionItem;
  isSelected: boolean;
  optionType?: 'CHECK_BOX' | 'RADIO_BOX';
}) => {
  const { onSelectOption, option, isSelected, optionType = 'CHECK_BOX' } = props;

  const textColor = isSelected ? ColorCodes.gray3 : ColorCodes.blueGray2;

  return (
    <Pressable
      style={[
        flexStyles.rowBetweenCenter,
        {
          backgroundColor: isSelected ? ColorCodes.white : ColorCodes.gray3,
          borderRadius: 12,
          padding: SPACE_SIZE['16'],
        },
      ]}
      onPress={() => onSelectOption(option)}
    >
      <View>
        <Typography.ButtonText color={textColor}>{option.name}</Typography.ButtonText>
      </View>
      <IconBase
        icon={
          isSelected
            ? optionType === 'CHECK_BOX'
              ? 'checkboxFilled'
              : 'radioFilled'
            : optionType === 'CHECK_BOX'
            ? 'checkboxOutline'
            : 'radioEmpty'
        }
        width={24}
        height={24}
        color={optionType === 'RADIO_BOX' && isSelected ? ColorCodes.mintGreen : textColor}
      />
    </Pressable>
  );
};

const BasicBoxOptionItem = (props: {
  onSelectOption: (selectedOption: ISelectOptionItem) => void;
  option: ISelectOptionItem;
  optionType: TSelectOptionType;
  showValue?: boolean;
  textColor?: ITextColor;
}) => {
  const { onSelectOption, option, optionType, showValue = true, textColor } = props;

  return (
    <Pressable
      style={[
        flexStyles.rowBetweenCenter,
        {
          backgroundColor: ColorCodes.white,
          borderRadius: 16,
          padding: SPACE_SIZE['16'],
        },
      ]}
      onPress={() => {
        if (onSelectOption) {
          onSelectOption(option);
        }
      }}
    >
      <View>
        {showValue && (
          <Typography.ButtonText
            color={textColor ? ColorCodes[textColor.valueTextColor] : ColorCodes.gray3}
          >
            {option.value}
          </Typography.ButtonText>
        )}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {option?.icon && (
            <View style={{ marginRight: 7 }}>
              <IconBase
                icon={option.icon.icon}
                width={option.icon.width}
                height={option.icon.height}
                color={option.icon.color}
              />
            </View>
          )}
          <Typography.ButtonText
            color={textColor ? ColorCodes[textColor.nameTextColor] : ColorCodes.mintGreen}
          >
            {option.name}
          </Typography.ButtonText>
        </View>
      </View>
      {optionType === 'RIGHT_ARROW_BOX' && (
        <IconBase icon={'right'} width={16} height={16} color={ColorCodes.gray3} />
      )}
    </Pressable>
  );
};
