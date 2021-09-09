import React, {useCallback} from 'react';
import {Button, Text} from 'react-native';

import Page from '../../components/Page';
import {TAppNavigationProps} from '../../navigator';

const DetailsScreen = ({navigation}: TAppNavigationProps<'Details'>) => {
  const handleOnPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Page>
      <Text>Welcome to the Details Screen</Text>
      <Button title="Go back to Home" onPress={handleOnPress} />
    </Page>
  );
};

export default DetailsScreen;
