import { StyleSheet } from 'react-native';
import color from '../../contains/color';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: { flexDirection: 'row', alignItems: 'center' },
  titleHeader: {
    marginLeft: 16,
    flex: 1,
    fontSize: 22,
    fontWeight: 700,
    color: color['grey-scale-900'],
  },
  deliverContainer: {
    backgroundColor: color.white,
    padding: 20,
    borderRadius: 24,
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    borderRadius: 16,
    alignItems: 'center',
  },

  image: {
    width: 68,
    height: 68,
    resizeMode: 'contain',
    borderRadius: 16,
  },
  infoWrap: {
    flex: 1,
    justifyContent: 'space-around',
    paddingVertical: 10,
    rowGap: 10,
    marginHorizontal: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 700,
    color: color['grey-scale-900'],
  },
  price: {
    fontSize: 14,
    color: color.primary500,
    fontWeight: 700,
  },
  detaiOrder: {
    container: {
      padding: 24,
      backgroundColor: color.white,
      marginTop: 20,
      borderRadius: 24,
      marginBottom: 26,
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 14,
      fontWeight: 400,
      color: color['grey-scale-900'],
    },
    price: {
      fontSize: 16,
      fontWeight: 600,
      color: color['grey-scale-900'],
    },
  },
  btnOrderContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
    backgroundColor: color.white,
    borderColor: color['grey-scale-200'],
    borderWidth: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  btnOrder: {
    backgroundColor: color.primary500,
    paddingHorizontal: 14,
    paddingVertical: 16,
    borderRadius: 100,
  },
  textBtn: {
    color: color.white,
    fontWeight: 700,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default styles;
