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
import React, {useEffect, useState} from 'react';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import color from '../../../contains/color';
import DefaultButton from '../../../components/Button/DefaultButton';
import Divider from '../../../components/Divider';
import {useSelector, useDispatch} from 'react-redux';
import {setLoading} from '../../../redux/slices/loading';
import Loading from '../../../components/Loading';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Auth} from '../../../services';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const {loading} = useSelector(state => state.loading);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (userData.uid) {
      setDoc(doc(db, 'users', userData.uid), userData)
        .then(() => console.log('Add successfully'))
        .catch(err => console.error(err));
    }
  }, [userData]);

  const SignupFromSchema = Yup.object().shape({
    fullName: Yup.string().required('An full name is required'),
    email: Yup.string()
      .email('Email must be a valid email')
      .required('An email is required'),
    password: Yup.string()
      .required('An password is required')
      .min(6, 'Your password has to have at least 6 character'),
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Ionicons
            onPress={() => navigation.goBack()}
            style={styles.arrowIcon}
            name="arrow-back-outline"
            size={28}
          />
          <View style={styles.contentContainer}>
            <Image
              style={styles.image}
              source={require('../../../assets/logo.png')}
            />
            <Text style={styles.title}>Create New Account</Text>
            <Formik
              initialValues={{fullName: '', email: '', password: ''}}
              onSubmit={async values => {
                dispatch(setLoading(true));
                Auth.signUp(values.fullName, values.email, values.password);
                dispatch(setLoading(false));
              }}
              validationSchema={SignupFromSchema}
              validateOnMount={true}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                isValid,
                errors,
                touched,
              }) => (
                <View style={styles.form}>
                  <View style={styles.inputGroup}>
                    <FontAwesome
                      style={styles.iconInput}
                      name="user"
                      size={20}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Full name"
                      placeholderTextColor={color['grey-scale-500']}
                      autoCapitalize="none"
                      autoCorrect={false}
                      textContentType="name"
                      onChangeText={handleChange('fullName')}
                      onBlur={handleBlur('fullName')}
                      value={values.fullName}
                    />
                    {errors.fullName && touched.fullName && (
                      <Text
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: 10,
                          color: color.red,
                          fontSize: 12,
                          fontWeight: 600,
                        }}>
                        {errors.fullName}
                      </Text>
                    )}
                  </View>
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
                        }}>
                        {errors.email}
                      </Text>
                    )}
                  </View>
                  <View style={styles.inputGroup}>
                    <Ionicons
                      style={styles.iconInput}
                      name="key-sharp"
                      size={16}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Password"
                      placeholderTextColor={color['grey-scale-500']}
                      autoCapitalize="none"
                      autoCorrect={false}
                      secureTextEntry={showPassword ? false : true}
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
                        }}>
                        {errors.password}
                      </Text>
                    )}
                    <TouchableOpacity
                      onPress={() => setShowPassword(!showPassword)}>
                      <Ionicons
                        style={styles.iconInput}
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={16}
                      />
                    </TouchableOpacity>
                  </View>

                  <DefaultButton
                    title="Sign up"
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
                <Text style={styles.subText}>Already have an account?</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.linkText}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {loading && <Loading />}
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
