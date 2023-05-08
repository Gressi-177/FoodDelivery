import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const createUserInDb = (uid, fullName, email) =>
  firestore().collection('users').doc(uid).set({
    uid,
    fullName,
    email,
  });

// signup handling
const signUp = (fullName, email, password) => {
  if (!fullName || !email || !password) {
    Alert.alert('Error', 'Please enter all fields');
  }

  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      const { uid } = cred.user;

      auth()
        .currentUser.updateProfile({
          displayName: fullName,
        })
        .then(() => {
          console.log('Update display name successfully');
        });

      return uid;
    })
    .then((uid) => createUserInDb(uid, fullName, email))
    .catch((err) => Alert.alert(err.code, err.message));
};

const signIn = (email, password) => {
  if (!email || !password) {
    Alert.alert('Error', 'Please enter all fields');
  }

  return auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {})
    .catch((err) => Alert.alert(err.code, err.message));
};

const signOut = () => auth().signOut();

const Auth = {
  signUp,
  signIn,
  signOut,
};

export default Auth;
