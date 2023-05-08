import { View, Text, StyleSheet, Image } from 'react-native';
import color from '../../contains/color';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
  },
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
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 300,
  },
  content: { padding: 24 },
  title: {
    fontSize: 28,
    fontWeight: 700,
    color: color['grey-scale-900'],
  },
  des: {
    fontSize: 14,
    fontWeight: 500,
    color: color['grey-scale-700'],
  },
  divider: {
    width: '100%',
    backgroundColor: color['grey-scale-200'],
    height: 1,
    marginVertical: 20,
  },
  foodAmount: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  button: {
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: color['grey-scale-300'],
  },
  count: {
    fontSize: 28,
    fontWeight: 600,
    color: color['grey-scale-900'],
    marginHorizontal: 20,
  },
  note: {
    backgroundColor: color['grey-scale-50'],
    marginVertical: 20,
    padding: 10,
  },
});
