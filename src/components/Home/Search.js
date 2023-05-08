import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../../contains/color';

const Search = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Ionicons style={styles.icon} name="md-search-outline" size={20} />
      <TextInput
        style={styles.input}
        placeholder="What are you craving?"
        placeholderTextColor={color['grey-scale-500']}
        onFocus={() => navigation.navigate('Search')}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color['grey-scale-200'],
    borderRadius: 16,
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 12,
  },
  input: {
    color: color['dark-2'],
    fontWeight: '500',
    flex: 1,
  },
});
