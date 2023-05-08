import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import color from '../../contains/color';

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

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});
