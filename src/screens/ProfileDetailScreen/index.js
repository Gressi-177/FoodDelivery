import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import color from '../../contains/color';

function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Ionicons name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      <Text
        style={{
          flex: 1,
          marginLeft: 16,
          fontWeight: 700,
          color: color['grey-scale-900'],
          fontSize: 20,
        }}
      >
        Profile
      </Text>
    </View>
  );
}

function Avatar() {
  return (
    <View style={styles.avatarContainer}>
      <TouchableOpacity
        onPress={() => {
          console.log('ok');
        }}
      >
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/R.ce02ccb5f5464a1fa493e0c3abf0a475?rik=FbWz8gUF%2fXHiQQ&pid=ImgRaw&r=0',
          }}
          style={styles.avatarImage}
        />
        <FontAwesome5
          name="pen-square"
          size={25}
          color={color.primary500}
          style={styles.avatarEdit}
        />
      </TouchableOpacity>
    </View>
  );
}

const ProfileDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Avatar />
    </View>
  );
};

export default ProfileDetailScreen;
