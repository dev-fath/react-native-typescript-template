import React from 'react';

import AccessTimeIcon from 'components/common/icons/AccessTime';
import AddIcon from 'components/common/icons/AddIcon';
import AddLargeIcon from 'components/common/icons/AddLargeIcon';
import AddingPhotoIcon from 'components/common/icons/AddingPhotoIcon';
import ArrowBackIcon from 'components/common/icons/ArrowBackIcon';
import BellIcon from 'components/common/icons/BellIcon';
import BluetoothSearchingIcon from 'components/common/icons/BluetoothSearchingIcon';
import CalendarIcon from 'components/common/icons/CalendarIcon';
import CameraIcon from 'components/common/icons/CameraIcon';
import ChargeFailIcon from 'components/common/icons/ChargeFailIcon';
import ChargeIcon from 'components/common/icons/ChargeIcon';
import CheckBoxFilled from 'components/common/icons/CheckBoxFilled';
import CheckBoxOutline from 'components/common/icons/CheckBoxOutline';
import CheckRectEmpty from 'components/common/icons/CheckRectEmpty';
import CheckRectFilled from 'components/common/icons/CheckRectFilled';
import CheckToastIcon from 'components/common/icons/CheckToastIcon';
import CloseIcon from 'components/common/icons/CloseIcon';
import DataLogIcon from 'components/common/icons/DataLogIcon';
import DownIcon from 'components/common/icons/DownIcon';
import EllipseIcon from 'components/common/icons/EllipseIcon';
import EmptyAnswerIcon from 'components/common/icons/EmptyAnswerIcon';
import EmptyListIcon from 'components/common/icons/EmptyListIcon';
import EmptyNotificationIcon from 'components/common/icons/EmptyNotificationIcon';
import EmptySearchIcon from 'components/common/icons/EmptySearchIcon';
import ErrorIcon from 'components/common/icons/ErrorIcon';
import EuroIcon from 'components/common/icons/EuroIcon';
import ExportIcon from 'components/common/icons/ExportIcon';
import EyeIcon from 'components/common/icons/EyeIcon';
import EyeIcon16 from 'components/common/icons/EyeIcon16';
import FilterResetIcon from 'components/common/icons/FilterResetIcon';
import GalleryIcon from 'components/common/icons/GalleryIcon';
import HomeIcon from 'components/common/icons/HomeIcon';
import InfoEmptyIcon from 'components/common/icons/InfoEmptyIcon';
import InfoIcon from 'components/common/icons/InfoIcon';
import InquiryIcon from 'components/common/icons/InquiryIcon';
import LeftIcon from 'components/common/icons/LeftIcon';
import LinkIcon from 'components/common/icons/LinkIcon';
import LoadBalanceOff from 'components/common/icons/LoadBalanceOff';
import LoadBalanceOn from 'components/common/icons/LoadBalanceOn';
import LocationIcon from 'components/common/icons/LocationIcon';
import MenuSchedule from 'components/common/icons/MenuSchedule';
import MenuScheduleBold from 'components/common/icons/MenuScheduleBold';
import NextIcon from 'components/common/icons/NextIcon';
import PersonIcon from 'components/common/icons/Person';
import PnCIcon from 'components/common/icons/PnCIcon';
import PoundIcon from 'components/common/icons/PoundIcon';
import RadioEmptyIcon from 'components/common/icons/RadioEmptyIcon';
import RadioFilledIcon from 'components/common/icons/RadioFilledIcon';
import Refresh16 from 'components/common/icons/Refresh16';
import Refresh32 from 'components/common/icons/Refresh32';
import Replay from 'components/common/icons/Replay';
import RightIcon from 'components/common/icons/RightIcon';
import ScheduleIcon from 'components/common/icons/ScheduleIcon';
import SearchIcon from 'components/common/icons/SearchIcon';
import SettingEmptyIcon from 'components/common/icons/SettingEmptyIcon';
import SettingFilledIcon from 'components/common/icons/SettingFilledIcon';
import ShareIcon from 'components/common/icons/ShareIcon';
import TrashEmptyIcon from 'components/common/icons/TrashEmptyIcon';
import TrashIcon from 'components/common/icons/TrashIcon';
import UpIcon from 'components/common/icons/UpIcon';
import WifiErrorIcon from 'components/common/icons/WifiErrorIcon';
import WifiIcon from 'components/common/icons/WifiIcon';
import ListIcon from 'components/common/icons/listIcon';

import { ColorCodes } from 'constants/colors';

export interface IIconBaseProps {
  icon: IconsType;
  height?: number;
  width?: number;
  color?: string;
}

export const getIcons = (styleOptionsInput: Omit<IIconBaseProps, 'icon'>) => {
  const iconStyleOption = {
    width: 24,
    height: 24,
    color: ColorCodes.gray3,
    ...styleOptionsInput,
  };

  return {
    accessTime: <AccessTimeIcon {...iconStyleOption} />,
    add: <AddIcon {...iconStyleOption} />,
    addingPhoto: <AddingPhotoIcon {...iconStyleOption} />,
    addLarge: <AddLargeIcon {...iconStyleOption} />,
    arrowBack: <ArrowBackIcon {...iconStyleOption} />,
    bell: <BellIcon {...iconStyleOption} />,
    bluetoothSearching: <BluetoothSearchingIcon {...iconStyleOption} />,
    calendar: <CalendarIcon {...iconStyleOption} />,
    camera: <CameraIcon {...iconStyleOption} />,
    charge: <ChargeIcon {...iconStyleOption} />,
    chargeFail: <ChargeFailIcon {...iconStyleOption} />,
    checkboxFilled: <CheckBoxFilled {...iconStyleOption} />,
    checkboxOutline: <CheckBoxOutline {...iconStyleOption} />,
    checkrectEmpty: <CheckRectEmpty {...iconStyleOption} />,
    checkrectFilled: <CheckRectFilled {...iconStyleOption} />,
    checkToast: <CheckToastIcon {...iconStyleOption} />,
    close: <CloseIcon {...iconStyleOption} />,
    dataLog: <DataLogIcon {...iconStyleOption} />,
    down: <DownIcon {...iconStyleOption} />,
    ellipse: <EllipseIcon {...iconStyleOption} />,
    emptyAnswer: <EmptyAnswerIcon {...iconStyleOption} />,
    emptyList: <EmptyListIcon {...iconStyleOption} />,
    emptyNotification: <EmptyNotificationIcon {...iconStyleOption} />,
    emptySearch: <EmptySearchIcon {...iconStyleOption} />,
    ErrorIcon: <ErrorIcon {...iconStyleOption} />,
    euro: <EuroIcon {...iconStyleOption} />,
    export: <ExportIcon {...iconStyleOption} />,
    eye: <EyeIcon {...iconStyleOption} />,
    eye16: <EyeIcon16 {...iconStyleOption} />,
    filterReset: <FilterResetIcon {...iconStyleOption} />,
    gallery: <GalleryIcon {...iconStyleOption} />,
    home: <HomeIcon {...iconStyleOption} />,
    info: <InfoIcon {...iconStyleOption} />,
    infoEmpty: <InfoEmptyIcon {...iconStyleOption} />,
    inquiry: <InquiryIcon {...iconStyleOption} />,
    left: <LeftIcon {...iconStyleOption} />,
    link: <LinkIcon {...iconStyleOption} />,
    list: <ListIcon {...iconStyleOption} />,
    loadBalanceOff: <LoadBalanceOff {...iconStyleOption} />,
    loadBalanceOn: <LoadBalanceOn {...iconStyleOption} />,
    location: <LocationIcon {...iconStyleOption} />,
    menuSchedule: <MenuSchedule {...iconStyleOption} />,
    menuScheduleBold: <MenuScheduleBold {...iconStyleOption} />,
    next: <NextIcon {...iconStyleOption} />,
    person: <PersonIcon {...iconStyleOption} />,
    pnc: <PnCIcon {...iconStyleOption} />,
    pound: <PoundIcon {...iconStyleOption} />,
    radioEmpty: <RadioEmptyIcon {...iconStyleOption} />,
    radioFilled: <RadioFilledIcon {...iconStyleOption} />,
    refresh16: <Refresh16 {...iconStyleOption} />,
    refresh32: <Refresh32 {...iconStyleOption} />,
    replay: <Replay {...iconStyleOption} />,
    right: <RightIcon {...iconStyleOption} />,
    schedule: <ScheduleIcon {...iconStyleOption} />,
    search: <SearchIcon {...iconStyleOption} />,
    settingEmpty: <SettingEmptyIcon {...iconStyleOption} />,
    settingFilled: <SettingFilledIcon {...iconStyleOption} />,
    share: <ShareIcon {...iconStyleOption} />,
    trash: <TrashIcon {...iconStyleOption} />,
    trashEmpty: <TrashEmptyIcon {...iconStyleOption} />,
    up: <UpIcon {...iconStyleOption} />,
    wifi: <WifiIcon {...iconStyleOption} />,
    wifiError: <WifiErrorIcon {...iconStyleOption} />,
    '': <></>,
  };
};

const defaultStyleIcons = getIcons({});
export type IconsType = keyof typeof defaultStyleIcons;

export default function IconBase(iconOptions: IIconBaseProps) {
  const { icon: iconName, ...styleOptions } = iconOptions;

  const icons = getIcons(styleOptions);

  return icons[iconName];
}
