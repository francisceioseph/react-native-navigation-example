import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type TRootStackParams = {
  Home: undefined;
  Details: undefined;
};

export const Stack = createNativeStackNavigator<TRootStackParams>();

export type TAppNavigationProps<T extends keyof TRootStackParams> =
  NativeStackScreenProps<TRootStackParams, T>;
