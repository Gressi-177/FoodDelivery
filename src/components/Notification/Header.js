import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../../contains/color';

const Header = ({navigation}) => {
  return (
    <View style={styles.header}>
      <Ionicons
        name="arrow-back"
        size={28}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.title}>Notification</Text>
      <MaterialCommunityIcons name="dots-horizontal-circle-outline" size={22} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {flexDirection: 'row', alignItems: 'center'},
  title: {
    marginLeft: 16,
    flex: 1,
    fontSize: 22,
    fontWeight: 700,
    color: color['grey-scale-900'],
  },
});
