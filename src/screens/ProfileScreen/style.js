import { StyleSheet } from 'react-native';
import color from '../../contains/color';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    width: 28,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: color['grey-scale-900'],
    marginLeft: 16,
    flex: 1,
  },
  informationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  informationImage: {
    width: 76,
    height: 76,
    borderRadius: 100,
  },
  informationContent: {
    flex: 1,
    marginLeft: 16,
    rowGap: 10,
  },
  informationName: {
    fontWeight: 700,
    color: color['grey-scale-900'],
    fontSize: 18,
  },
  informationPhoneNumber: {},
  containerContent: {
    marginTop: 16,
    flex: 1,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 600,
    color: color['grey-scale-900'],
    flex: 1,
    marginLeft: 16,
  },
  itemIcon: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
  },
  divider: {
    backgroundColor: color['grey-scale-200'],
    width: '100%',
    height: 1,
    marginVertical: 10,
  },
});

export default styles;
