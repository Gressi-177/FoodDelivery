import {StyleSheet} from 'react-native';
import color from '../../contains/color';

export default styles = StyleSheet.create({
  dividerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: color['grey-scale-200'],
  },
  dividerText: {
    color: color['grey-scale-700'],
    fontSize: 16,
    marginHorizontal: 10,
  },
});
