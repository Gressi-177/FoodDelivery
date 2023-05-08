import {StyleSheet} from 'react-native';
import color from '../../../contains/color';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: color.white,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginTop: 16,
  },
  title: {
    marginTop: 14,
    fontSize: 28,
    fontWeight: 700,
    color: color['grey-scale-900'],
  },
  form: {
    marginTop: 32,
    width: '100%',
    rowGap: 20,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color['grey-scale-50'],
    borderRadius: 16,
    paddingHorizontal: 20,
  },
  iconInput: {},
  input: {
    flex: 1,
    fontSize: 14,
    color: color['grey-scale-900'],
    fontWeight: '600',
    paddingHorizontal: 14,
  },
  remember: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rememberText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    color: color['grey-scale-900'],
  },
  divider: {
    marginVertical: 16,
  },
  loginMore: {
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 20,
    marginTop: 12,
  },
  wrapImage: {
    width: 80,
    height: 60,
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: color['grey-scale-200'],
    borderStyle: 'solid',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageSocial: {
    width: 30,
    height: 30,
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
