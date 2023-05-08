import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import color from '../../contains/color';

function Item({ title, imageUrl }) {
  return (
    <TouchableOpacity style={styles.item}>
      <Image source={imageUrl} style={styles.image} />
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('categories')
      .onSnapshot((snapshot) => {
        const newCategories = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategories(newCategories);
      });
    // cleanup function
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <View style={styles.container}>
      {categories.map((item) => (
        <Item key={item.id} imageUrl={{ uri: item.icon }} title={item.category} />
      ))}
      <Item
        imageUrl={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/food-delivery-9c90e.appspot.com/o/images%2Fcategories%2Fmore.png?alt=media&token=f340a671-a6a5-4676-a4de-1ae4f6005e0b',
        }}
        title="More"
      />
    </View>
  );
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginVertical: 20,
  },
  item: {
    width: '23%',
    alignItems: 'center',
  },
  image: {
    width: 48,
    height: 48,
    resizeMode: 'cover',
  },
  title: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: 700,
    color: color['grey-scale-900'],
  },
});
