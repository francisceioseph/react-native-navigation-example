import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type TPageProps = {
  children: React.ReactNode;
};

const Page = ({children}: TPageProps) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.body}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    height: '100%',
  },
});

export default Page;
