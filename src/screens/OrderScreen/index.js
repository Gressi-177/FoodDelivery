import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';
import styles from './style';
import color from '../../contains/color';

const handleOnCancelBtn = (id) => {
  firestore().collection('orders').doc(id).update({
    status: '3',
  });
};

function Header() {
  return (
    <View style={styles.header}>
      <Image source={require('../../assets/logo.png')} style={{ width: 28, height: 28 }} />
      <Text
        style={{
          flex: 1,
          marginLeft: 16,
          fontWeight: 700,
          color: color['grey-scale-900'],
          fontSize: 20,
        }}
      >
        Orders
      </Text>
      <Ionicons name="search-outline" size={28} />
    </View>
  );
}

function WrapperButton({ status }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingTop: 16,
        marginTop: 16,
        borderColor: color['grey-scale-200'],
        borderTopWidth: 2,
        columnGap: 12,
      }}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          borderColor: color.primary500,
          borderWidth: 2,
          borderRadius: 100,
          paddingVertical: 6,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: color.primary500, fontSize: 14, fontWeight: 600 }}>
          {status === '1' ? 'Cancel Order' : status === '2' ? 'Leave a Review' : ''}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: color.primary500,
          borderRadius: 100,
          paddingVertical: 8,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: color.white, fontSize: 14, fontWeight: 600 }}>
          {status === '1' ? 'Track Driver' : status === '2' ? 'Order Again' : ''}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function Item({ data, status }) {
  return (
    <View
      style={{
        backgroundColor: color.white,
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderRadius: 16,
        shadowColor: '#04060F',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        margin: 16,
      }}
    >
      <TouchableOpacity style={styles.item}>
        <Image
          source={{
            uri: data.restaurantImage,
          }}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.name} numberOfLines={1}>
            {data.restaurantName}
          </Text>
          <Text style={styles.detail}> {data.itemOrder.length} items | 1.5km</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.price}>
              ${data.itemOrder.reduce((acc, item) => acc + item.price * item.quantity, 0)}.00
            </Text>
            <View style={styles.badge}>
              <Text style={{ color: color.white, fontSize: 10, fontWeight: 600 }}>
                {status.find((i) => i.id === data.status).name}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <WrapperButton status={data.status} />
    </View>
  );
}

function Empty() {
  return (
    <View style={{ alignItems: 'center', marginTop: 70 }}>
      <Image
        style={{ width: 240, resizeMode: 'contain' }}
        source={require('../../assets/image/empty.png')}
      />
      <Text
        style={{ fontSize: 20, fontWeight: 700, color: color['grey-scale-900'], marginTop: 30 }}
      >
        Empty
      </Text>
      <Text
        style={{ fontSize: 14, fontWeight: 400, color: color['grey-scale-900'], marginTop: 10 }}
      >
        You do not have an active order at this time
      </Text>
    </View>
  );
}

function List({ status }) {
  const [active, setActive] = useState('1');
  const [listData, setListData] = useState([]);
  const handleOnClickTab = (id) => {
    setActive(id);
  };

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('orders')
      .where('status', '==', active)
      .onSnapshot((snapshot) => {
        const newListData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setListData(newListData);
      });
    // cleanup function
    return () => {
      unsubscribe();
    };
  }, [active]);

  return (
    <View>
      <View style={styles.tabList}>
        {status.map((item, index) => (
          <TouchableOpacity
            onPress={() => handleOnClickTab(item.id)}
            key={index}
            style={styles.tabItem(active === item.id)}
          >
            <Text style={styles.tabText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {listData.length > 0 ? (
        <ScrollView style={[styles.list, { marginBottom: 100 }]}>
          {listData.map((restaurant) => (
            <Item status={status} key={restaurant.id} data={restaurant} />
          ))}
        </ScrollView>
      ) : (
        <Empty />
      )}
    </View>
  );
}
function OrderScreen() {
  const status = [
    { id: '1', name: 'Paid' },
    { id: '2', name: 'Completed' },
    { id: '3', name: 'Canceled' },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <List status={status} />
    </View>
  );
}

export default OrderScreen;
