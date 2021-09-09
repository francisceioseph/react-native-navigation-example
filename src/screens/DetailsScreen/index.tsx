import React, {useCallback} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import Page from '../../components/Page';
import {TAppNavigationProps, TDetailsScreenParams} from '../../navigator';

const DetailsScreen = ({navigation, route}: TAppNavigationProps<'Details'>) => {
  const {params} = route;

  const handleOnPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderItemSection = (item?: TDetailsScreenParams) => {
    if (item) {
      return (
        <View style={styles.item}>
          <Text>Id: {item.id}</Text>
          <Text>Title: {item.title}</Text>
          <Text>Description: {item.description}</Text>
        </View>
      );
    }

    return null;
  };

  return (
    <Page>
      {renderItemSection(params)}
      <Text>Welcome to the Details Screen</Text>
      <Button title="Go back to Home" onPress={handleOnPress} />
    </Page>
  );
};

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderColor: '#282828',
    borderRadius: 16,
    margin: 16,
    padding: 24,
  },
});

export default DetailsScreen;
