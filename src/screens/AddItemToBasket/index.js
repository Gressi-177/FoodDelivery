import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import LottieView from 'lottie-react-native';
import color from '../../contains/color';
import DefaultButton from '../../components/Button/DefaultButton';
import styles from './style';
import { addToBasket, addToCart } from '../../redux/slices/cart';
import { setRestaurant } from '../../redux/slices/restaurant';
import Loading from '../../components/Loading';

function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <Ionicons
        name="arrow-back"
        size={28}
        onPress={() => navigation.goBack()}
        color={color.white}
        style={{ flex: 1 }}
      />

      <Ionicons name="heart-outline" size={28} color={color.white} />
      <Feather style={{ marginLeft: 20 }} name="send" size={28} color={color.white} />
    </View>
  );
}

function AddItemToBasket({ navigation }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const route = useRoute();
  const { idRes, idItem, nameRes, imageRes } = route.params;
  const [item, setItem] = useState({
    id: '',
    imageUrl: '',
    name: '',
    price: 0,
  });

  useEffect(() => {
    const fetchItem = async () => {
      await firestore()
        .collection('restaurant')
        .doc(idRes)
        .get()
        .then((documentSnapshot) => {
          const item = documentSnapshot.data().menu.find((item) => item.id === idItem);
          const data = {
            id: item.id,
            imageUrl: item.imageUrl,
            name: item.name,
            price: item.price,
          };
          setItem(data);
        });
    };

    fetchItem().catch((err) => console.log(err));
  }, [idRes, idItem]);

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    setQuantity(quantity === 1 ? 1 : quantity - 1);
  };

  const handleAddToBasket = () => {
    dispatch(
      addToCart({
        idRes,
        nameRes,
        imageRes,
        item: {
          ...item,
          quantity,
        },
      })
    );
    navigation.goBack();
  };

  return (
    item.imageUrl !== '' &&
    item.name !== '' &&
    item.price !== 0 &&
    item.id !== '' && (
      <View style={styles.container}>
        <Header navigation={navigation} />
        <Image style={styles.image} source={{ uri: item.imageUrl }} />
        <View style={styles.content}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.divider} />
          <Text style={styles.des}>
            This vegetable salad is a healthy and delicious summer salad made with fresh raw
            veggies, avocado, nuts, seeds, herbs and feta in a light ...
          </Text>
          <View style={styles.foodAmount}>
            <TouchableOpacity onPress={decrease} style={styles.button}>
              <AntDesign name="minus" size={24} />
            </TouchableOpacity>
            <Text style={styles.count}>{quantity}</Text>
            <TouchableOpacity onPress={increase} style={styles.button}>
              <AntDesign name="plus" size={24} />
            </TouchableOpacity>
          </View>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            placeholder="Note to Restaurant (optional)"
            style={styles.note}
          />
          <DefaultButton
            rounded={100}
            title={`Add to Basket - $${item.price * quantity}`}
            onPress={handleAddToBasket}
          />
        </View>
      </View>
    )
  );
}

export default AddItemToBasket;
