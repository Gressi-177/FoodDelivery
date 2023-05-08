import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 32,
  },
  icon: {marginRight: 12, width: 24, height: 24},
  title: {
    fontSize: 16,
    fontWeight: 600,
  },
});
