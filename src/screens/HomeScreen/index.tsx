import React, {useCallback} from 'react';
import {Button, Text} from 'react-native';

import Page from '../../components/Page';
import {TAppNavigationProps} from '../../navigator';

const HomeScreen = ({navigation}: TAppNavigationProps<'Home'>) => {
  const handleOnPress = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  const handleNavigateWithParams = useCallback(() => {
    navigation.navigate('Details', {
      id: 'PF-D3F567',
      title: 'Hi I am a title',
      description: 'This is a description',
    });
  }, [navigation]);

  return (
    <Page>
      <Text>Welcome to the Home Screen</Text>
      <Button title="Go to Details" onPress={handleOnPress} />
      <Button title="Navigate with Params" onPress={handleNavigateWithParams} />
    </Page>
  );
};

export default HomeScreen;
