import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import color from '../../../contains/color';
import DefaultButton from '../../../components/Button/DefaultButton';
import Divider from '../../../components/Divider';
import { Auth } from '../../../services';
import styles from './style';
import { setLoading } from '../../../redux/slices/loading';

function LoginScreen() {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const LoginFromSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email').required('An email is required'),
    password: Yup.string()
      .required('An password is required')
      .min(6, 'Your password has to have at least 6 character'),
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Ionicons
            onPress={() => navigation.goBack()}
            style={styles.arrowIcon}
            name="arrow-back-outline"
            size={28}
          />
          <View style={styles.contentContainer}>
            <Image style={styles.image} source={require('../../../assets/logo.png')} />
            <Text style={styles.title}>Login to Your Account</Text>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={async (values) => {
                await Auth.signIn(values.email, values.password);
              }}
              validationSchema={LoginFromSchema}
              validateOnMount
            >
              {({ handleChange, handleBlur, handleSubmit, values, isValid, errors, touched }) => (
                <View style={styles.form}>
                  <View style={styles.inputGroup}>
                    <Ionicons style={styles.iconInput} name="mail" size={16} />
                    <TextInput
                      style={styles.input}
                      placeholder="Email"
                      placeholderTextColor={color['grey-scale-500']}
                      autoCapitalize="none"
                      autoCorrect={false}
                      textContentType="emailAddress"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />
                    {errors.email && touched.email && (
                      <Text
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: 10,
                          color: color.red,
                          fontSize: 12,
                          fontWeight: 600,
                        }}
                      >
                        {errors.email}
                      </Text>
                    )}
                  </View>

                  <View style={styles.inputGroup}>
                    <Ionicons style={styles.iconInput} name="key-sharp" size={16} />
                    <TextInput
                      style={styles.input}
                      placeholder="Password"
                      placeholderTextColor={color['grey-scale-500']}
                      autoCapitalize="none"
                      autoCorrect={false}
                      secureTextEntry={!showPassword}
                      textContentType="password"
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />
                    {errors.password && touched.password && (
                      <Text
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: 10,
                          color: color.red,
                          fontSize: 12,
                          fontWeight: 600,
                        }}
                      >
                        {errors.password}
                      </Text>
                    )}
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                      <Ionicons
                        style={styles.iconInput}
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={16}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.remember}>
                    <CheckBox
                      disabled={false}
                      value={toggleCheckBox}
                      onValueChange={(newValue) => setToggleCheckBox(newValue)}
                      tintColors={{
                        true: color.primary500,
                        false: color.primary500,
                      }}
                    />
                    <Text style={styles.rememberText}>Remember me</Text>
                  </View>
                  <DefaultButton
                    title="Sign in"
                    rounded={100}
                    onPress={handleSubmit}
                    disabled={!isValid}
                  />
                </View>
              )}
            </Formik>

            <Divider style={styles.divider} text="or continue with" />
            <View style={styles.loginMore}>
              <TouchableOpacity style={styles.wrapImage}>
                <Image
                  style={styles.imageSocial}
                  source={require('../../../assets/icon/facebook-icon.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.wrapImage}>
                <Image
                  style={styles.imageSocial}
                  source={require('../../../assets/icon/apple-icon-dark.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.wrapImage}>
                <Image
                  style={styles.imageSocial}
                  source={require('../../../assets/icon/google-icon.png')}
                />
              </TouchableOpacity>
            </View>
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;
