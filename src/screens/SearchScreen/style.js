import { StyleSheet } from 'react-native';
import color from '../../contains/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInputContainer: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: color.transparentGreen,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 100,
    marginLeft: 16,
  },
  textInput: {
    flex: 1,
    marginHorizontal: 8,
  },
  textInputFocused: {
    borderColor: color.primary500,
    borderWidth: 1,
  },
  contentLayout: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: color['grey-scale-900'],
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
    columnGap: 10,
    rowGap: 14,
  },
  item: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 100,
    borderColor: color.primary500,
    borderWidth: 1,
  },
  text: {
    fontSize: 14,
    color: color.primary500,
    fontWeight: 600,
  },
  listTab: {
    flexWrap: 'nowrap',
    marginTop: 20,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 100,
    borderColor: color.primary500,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  tabText: {
    fontSize: 14,
    fontWeight: 600,
    color: color.primary500,
  },
});

export default styles;
