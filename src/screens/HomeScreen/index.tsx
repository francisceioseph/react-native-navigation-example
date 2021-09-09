import React, {useCallback} from 'react';
import {Button, Text} from 'react-native';

import Page from '../../components/Page';
import {TAppNavigationProps} from '../../navigator';

const HomeScreen = ({navigation}: TAppNavigationProps<'Home'>) => {
  const handleOnPress = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  return (
    <Page>
      <Text>Welcome to the Home Screen</Text>
      <Button title="Go to Details" onPress={handleOnPress} />
    </Page>
  );
};

export default HomeScreen;
