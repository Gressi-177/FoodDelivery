import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import color from '../../contains/color';

function Avatar({ image }) {
  return (
    <View style={styles.avatar}>
      <Image
        style={styles.image}
        source={image ? { uri: image } : require('../../assets/logo.png')}
      />
    </View>
  );
}

function Name({ displayName }) {
  return (
    <View style={styles.wrapName}>
      <Text style={styles.subTitle}>Deliver to</Text>
      <Text style={styles.name}>{displayName}</Text>
    </View>
  );
}

function Header({ navigation }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  return (
    <View style={styles.container}>
      <Avatar image={user.imageUrl} />
      <Name displayName={user.displayName} />
      <View style={styles.icons}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate('Notification')}
        >
          <Feather name="bell" size={20} />
          <View style={styles.dot} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Cart')}>
          <Feather name="shopping-bag" size={20} />
          <View style={styles.dot} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
  },
  wrapName: {
    flexDirection: 'column',
    marginLeft: 12,
    flex: 1,
  },
  subTitle: { color: color['grey-scale-500'], fontSize: 14 },
  name: {
    color: color['grey-scale-900'],
    fontSize: 16,
    fontWeight: 700,
  },
  icons: {
    flexDirection: 'row',
    columnGap: 16,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderWidth: 1,
    borderColor: color['grey-scale-200'],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 44 / 2,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#F75555',
    position: 'absolute',
    top: 10,
    left: 28,
  },
});
