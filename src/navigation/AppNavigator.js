import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import NotificationScreen from '../screens/NotificationScreen';
import BottomNavigation from './BottomNavigation';
import CartScreen from '../screens/CartScreen';
import RestaurantDetailScreen from '../screens/RestaurantDetailScreen';
import AddItemToBasket from '../screens/AddItemToBasket';
import CheckoutScreen from '../screens/CheckoutScreen';
import FavoriteRestaurantScreen from '../screens/FavoriteRestaurantScreen';
import ProfileDetailScreen from '../screens/ProfileDetailScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
  headerShown: false,
};

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={TransitionScreenOptions}>
      <Stack.Screen name="Bottom" component={BottomNavigation} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
      <Stack.Screen name="AddItem" component={AddItemToBasket} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="Favorite" component={FavoriteRestaurantScreen} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      {/* Profile */}
    </Stack.Navigator>
  );
}
export default AppNavigator;
