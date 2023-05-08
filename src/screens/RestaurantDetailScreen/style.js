import { StyleSheet } from 'react-native';
import color from '../../contains/color';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    color: color['grey-scale-900'],
  },
  shipInfo: {
    flexDirection: 'row',
  },
  divider: {
    width: '100%',
    backgroundColor: color['grey-scale-200'],
    height: 1,
    marginVertical: 12,
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
  menuContainer: { marginVertical: 16 },
  menuTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: color['grey-scale-900'],
  },
  menuList: {
    marginTop: 20,
    rowGap: 20,
  },
  menuItem: {
    flexDirection: 'row',
    padding: 14,
    marginHorizontal: 4,
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

  menuImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 16,
  },
  menuInfoWrap: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  menuName: {
    fontSize: 20,
    fontWeight: 600,
    color: color['grey-scale-900'],
  },
  menuPrice: {
    fontSize: 18,
    color: color.primary500,
    fontWeight: 700,
  },
  tag: {
    backgroundColor: color.primary500,
    borderRadius: 6,
    paddingVertical: 4,
    width: 40,
  },
  tagText: {
    fontSize: 10,
    color: color.white,
    fontWeight: 700,
    textAlign: 'center',
  },
});
export default styles;
