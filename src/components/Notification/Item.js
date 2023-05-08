import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../../contains/color';

const Item = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            padding: 16,
            backgroundColor: 'rgba(247, 85, 85, 0.08)',
            borderRadius: 100,
          }}>
          <MaterialCommunityIcons name="close-box" size={28} color="#FF4D67" />
        </View>
        <View style={{flex: 1, marginLeft: 16}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: color['grey-scale-900'],
            }}>
            Orders Cancelled!
          </Text>
          <View style={{flexDirection: 'row', marginTop: 6}}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: color['grey-scale-700'],
              }}>
              19 Dec, 2022
            </Text>
            <View
              style={{
                height: 20,
                width: 1,
                backgroundColor: color['grey-scale-700'],
                marginHorizontal: 8,
              }}></View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: color['grey-scale-700'],
              }}>
              20:50 PM
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 6,
            backgroundColor: color.primary500,
            borderRadius: 6,
            height: 24,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: color.white, fontSize: 10, fontWeight: 700}}>
            New
          </Text>
        </View>
      </View>
      <View style={{marginTop: 16}}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 400,
            color: color['grey-scale-700'],
            lineHeight: 24,
          }}>
          You have canceled an order at Burger Hut. We apologize for your
          inconvenience. We will try to improve our service next time 😥
        </Text>
      </View>
    </View>
  );
};

export default Item;
