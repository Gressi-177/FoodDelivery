import { ScrollView, Text } from 'react-native';
import React from 'react';
import Header from '../../components/Home/Header';
import Search from '../../components/Home/Search';
import Offers from '../../components/Home/Offers';
import Categories from '../../components/Home/Categories';
import Discount from '../../components/Home/Discount';
import Recommended from '../../components/Home/Recommended';
import color from '../../contains/color';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} />
      <Search navigation={navigation} />
      <Offers />
      <Categories />
      <Discount />
      <Recommended navigation={navigation} />
    </ScrollView>
  );
};

export default HomeScreen;
