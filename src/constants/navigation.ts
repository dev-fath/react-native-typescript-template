import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

export const NativeStackScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
  gestureEnabled: false,
} as const;

export const TabScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarStyle: {
    height: 80,
  },
  tabBarLabelStyle: {
    paddingTop: 0,
    marginBottom: 16,
  },
  tabBarIconStyle: { marginTop: 16 },
};
