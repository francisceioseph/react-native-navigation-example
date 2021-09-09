import React from 'react';
import {StyleSheet, View} from 'react-native';

type TPageProps = {
  children: React.ReactNode;
};

const Page = ({children}: TPageProps) => {
  return <View style={styles.body}>{children}</View>;
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Page;
