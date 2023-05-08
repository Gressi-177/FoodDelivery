import {StyleSheet} from 'react-native';
import color from '../../../contains/color';

export default styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: color.white,
    flex: 1,
  },
  containerContent: {
    alignItems: 'center',
    flex: 1,
  },
  arrowIcon: {
    marginBottom: 30,
  },
  image: {
    width: 240,
    marginBottom: 16,
  },
  text: {
    color: color['grey-scale-900'],
    fontSize: 32,
    fontWeight: 700,
  },
  buttonContainer: {
    flexDirection: 'column',
    rowGap: 16,
    marginTop: 24,
    width: '100%',
  },

  signInDirect: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subText: {
    color: color['grey-scale-500'],
    fontSize: 14,
    fontWeight: 400,
    marginRight: 4,
  },
  linkText: {
    color: color.primary500,
  },
});
