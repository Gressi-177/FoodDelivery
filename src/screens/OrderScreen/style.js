import { StyleSheet } from 'react-native';
import color from '../../contains/color';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  tabList: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 22,
  },

  tabItem: (isActive) => ({
    flex: 1,
    borderColor: isActive ? color.primary500 : color['grey-scale-200'],
    borderBottomWidth: isActive ? 4 : 2,
    paddingBottom: 8,
  }),
  tabText: {
    fontSize: 16,
    color: color['grey-scale-500'],
    fontWeight: 600,
    textAlign: 'center',
  },

  item: {
    flexDirection: 'row',
  },

  image: {
    width: 110,
    height: 110,
    borderRadius: 16,
    resizeMode: 'contain',
  },
  content: { marginLeft: 16, justifyContent: 'space-around' },
  name: {
    color: color['grey-scale-900'],
    fontWeight: 700,
    fontSize: 18,
    width: 160,
  },

  price: {
    color: color.primary,
    fontWeight: 700,
    fontSize: 16,
  },
  badge: {
    backgroundColor: color.primary500,
    marginLeft: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});
export default styles;
