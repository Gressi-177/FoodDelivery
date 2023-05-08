import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Auth } from '../../services';
import styles from './style';
import color from '../../contains/color';
import { useNavigation } from '@react-navigation/native';

function Header() {
  return (
    <View style={styles.header}>
      <Image source={require('../../assets/icon.png')} style={styles.headerImage} />
      <Text style={styles.headerTitle}>Profile</Text>
      <Ionicons name="ellipsis-horizontal-circle" size={28} />
    </View>
  );
}

function Information() {
  return (
    <View style={styles.informationContainer}>
      <Image
        source={{
          uri: 'https://th.bing.com/th/id/R.ce02ccb5f5464a1fa493e0c3abf0a475?rik=FbWz8gUF%2fXHiQQ&pid=ImgRaw&r=0',
        }}
        style={styles.informationImage}
      />
      <View style={styles.informationContent}>
        <Text style={styles.informationName}>Andrew Ainsley</Text>
        <Text style={styles.informationPhoneNumber}>+1 111 467 378 399</Text>
      </View>
      <FontAwesome name="pencil-square-o" size={20} color={color.primary} />
    </View>
  );
}

function Item({ icon, title, onPress, showArrow = true }) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Image style={styles.itemIcon} source={icon} />
      <Text style={styles.itemText}>{title}</Text>
      {showArrow && <AntDesign name="right" size={20} />}
    </TouchableOpacity>
  );
}

function Divider() {
  return <View style={styles.divider} />;
}

function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <Information />
      <ScrollView style={styles.containerContent} showsVerticalScrollIndicator={false}>
        <Divider />
        <Item
          icon={require('../../assets/icon/Calendar.png')}
          title="My Favorite Restaurants"
          onPress={() => navigation.navigate('Favorite')}
        />
        <Item icon={require('../../assets/icon/Discount.png')} title="Special Offers & Promo" />
        <Item icon={require('../../assets/icon/Wallet.png')} title="Payment Methods" />
        <Divider />
        <Item
          icon={require('../../assets/icon/Profile.png')}
          title="Profile"
          onPress={() => navigation.navigate('ProfileDetail')}
        />
        <Item icon={require('../../assets/icon/Location.png')} title="Address" />
        <Item icon={require('../../assets/icon/Notification.png')} title="Notification" />
        <Item icon={require('../../assets/icon/Shield_Done.png')} title="Security" />
        {/* <Item icon={require('../../assets/icon/More_Circle.png')} title="Language" /> */}
        {/* <Item icon={require('../../assets/icon/Show.png')} title="Dark Mode" /> */}
        <Item icon={require('../../assets/icon/Info_Square.png')} title="Help Center" />
        <Item icon={require('../../assets/icon/3_User.png')} title="Invite Friends" />
        <Item
          icon={require('../../assets/icon/Logout.png')}
          title="Logout"
          showArrow={false}
          onPress={() => Auth.signOut()}
        />
      </ScrollView>
    </View>
  );
}

export default ProfileScreen;
