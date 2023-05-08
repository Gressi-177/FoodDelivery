import { StyleSheet } from 'react-native';
import color from '../../contains/color';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  item: {
    flexDirection: 'row',
    padding: 14,
    margin: 4,
    borderRadius: 16,
    backgroundColor: color.white,
    shadowColor: '#04060F',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    elevation: 4,
  },

  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 16,
  },
  infoWrap: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
    color: color['grey-scale-900'],
  },
  info: {
    flexDirection: 'row',
    height: 16,
    alignItems: 'center',
    columnGap: 6,
  },
  distance: {
    paddingRight: 6,
    borderRightWidth: 1,
    borderColor: color['grey-scale-700'],
    fontSize: 14,
  },
  point: {
    fontSize: 14,
  },
  sell: {
    fontSize: 14,
  },
  priceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 700,
    color: color.primary500,
  },
  priceShip: {
    flex: 1,
    marginLeft: 6,
    fontSize: 14,
    fontWeight: 500,
  },
});
export default styles;
