import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import color from '../../contains/color';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const dataTerms = [
  {
    title: 'Recent Searches',
    listData: ['Italian Pizza', 'Burger King', 'Salad', 'Vegetarian', 'Dessert', 'Pancakes'],
  },
  {
    title: 'Popular Cuisines',
    listData: [
      'Breakfast',
      'Snack',
      'Fast Food',
      'Beverages',
      'Chicken',
      'Noodles',
      'Rice',
      'Seafood',
      'International',
    ],
  },
  {
    title: 'All Cuisines',
    listData: ['Bakery & Cake', 'Dessert', 'Pizza'],
  },
];

const Tabs = [
  {
    icon: 'filter',
    name: 'Filter',
  },
  {
    icon: 'sort',
    name: 'Sort',
  },
  {
    icon: '',
    name: 'Promo',
  },
  {
    icon: '',
    name: 'Self Pick-up',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.text}>{title}</Text>
  </View>
);
const ContentLayout = ({ item }) => {
  return (
    <View style={styles.contentLayout}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.list}>
        {item.listData.map((item, index) => (
          <Item title={item} />
        ))}
      </View>
    </View>
  );
};

const Tab = ({ item }) => {
  return (
    <TouchableOpacity style={styles.tab}>
      {item.icon.length > 0 && (
        <FontAwesome
          name={item.icon}
          size={16}
          color={color.primary500}
          style={{ marginRight: 8 }}
        />
      )}
      <Text style={styles.tabText}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const ListTab = () => {
  return (
    <View style={styles.listTab}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {Tabs.map((item, index) => (
          <Tab key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const NotFound = () => (
  <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
    <Image
      source={require('../../assets/image/not_found.png')}
      style={{ width: 300, resizeMode: 'contain' }}
    />
    <View style={{ marginTop: 40, alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 700, color: color['grey-scale-900'] }}>
        Not Found
      </Text>
      <Text
        style={{
          marginTop: 12,
          fontSize: 16,
          fontWeight: 400,
          color: color['grey-scale-800'],
          textAlign: 'center',
        }}
      >
        Sorry, the keyword you entered cannot be found, please check again or search with another
        keyword.
      </Text>
    </View>
  </View>
);

const SearchScreen = () => {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChangeText = (value) => {
    setSearchText(value);
  };

  const handleResetTextInput = () => {
    setSearchText('');
  };

  const handleSubmit = () => {
    console.log(searchText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <View style={[styles.searchInputContainer, isFocused && styles.textInputFocused]}>
          <Ionicons name="search-outline" size={20} color={color.primary500} />
          <TextInput
            style={styles.textInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={searchText}
            onChangeText={(value) => handleChangeText(value)}
            onSubmitEditing={handleSubmit}
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={handleResetTextInput}>
              <FontAwesome name="remove" size={16} color={color['grey-scale-900']} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {searchText.length > 0 ? (
        <>
          <ListTab />
          <NotFound />
        </>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          {dataTerms.map((item, index) => (
            <ContentLayout key={index} item={item} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default SearchScreen;
