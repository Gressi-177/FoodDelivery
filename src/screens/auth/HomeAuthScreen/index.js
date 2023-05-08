import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import DefaultButton from '../../../components/Button/DefaultButton';
import SocialButton from '../../../components/Button/SocialButton';
import styles from './style';
import Divider from '../../../components/Divider';

function HomeAuthScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Ionicons
        onPress={() => console.log('Hello')}
        style={styles.arrowIcon}
        name="arrow-back-outline"
        size={28}
      />
      <View style={styles.containerContent}>
        <LottieView
          source={require('../../../assets/lottie/food-delivery.json')}
          autoPlay
          loop
          style={styles.image}
        />
        <Text style={styles.text}>Let's you in</Text>

        <View style={styles.buttonContainer}>
          <SocialButton
            action={() => {
              // onFacebookLogin();
            }}
            title="Continue with Facebook"
            image={require('../../../assets/icon/facebook-icon.png')}
          />
          <SocialButton
            action={() => {
              // onGoogleLogin();
            }}
            title="Continue with Google"
            image={require('../../../assets/icon/google-icon.png')}
          />
          <SocialButton
            onPress={() => {
              console.log('Hello');
            }}
            title="Continue with Apple"
            image={require('../../../assets/icon/apple-icon-dark.png')}
          />
        </View>
        <Divider text="or" style={{ marginVertical: 20 }} />
        <DefaultButton
          rounded={100}
          title="Sign in with email"
          onPress={() => navigation.push('Login')}
        />
        <View style={styles.signInDirect}>
          <View>
            <Text style={styles.subText}>Don’t have an account?</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.push('Register')}>
            <Text style={styles.linkText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default HomeAuthScreen;
