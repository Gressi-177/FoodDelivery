import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../components/Notification/Header';
import color from '../../contains/color';
import Item from '../../components/Notification/Item';

const NotificationScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.list}>
        <Item />
        <Item />
        <Item />
      </View>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  list: {
    marginTop: 24,
    rowGap: 24,
  },
});
