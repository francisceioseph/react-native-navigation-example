import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type TDetailsScreenParams = {
  id: string;
  title: string;
  description: string;
};

export type TRootStackParams = {
  Home: undefined;
  Details?: TDetailsScreenParams;
};

export const Stack = createNativeStackNavigator<TRootStackParams>();

export type TAppNavigationProps<T extends keyof TRootStackParams> =
  NativeStackScreenProps<TRootStackParams, T>;
