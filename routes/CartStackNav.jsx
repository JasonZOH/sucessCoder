import { createStackNavigator } from '@react-navigation/stack';
import Cart from './../screens/Cart';
import globalStyles from '../styles/globalStyles';
import CustomHeaderIcon from '../component/CustomHeaderIcon';

const CartStackNavigator = createStackNavigator();

export function CartNavigator() {
  return (
    <CartStackNavigator.Navigator
    >
      <CartStackNavigator.Screen 
        name='Cart' 
        component={Cart} 
        options={{ title: 'Panier', headerShown: false}}
        />

    </CartStackNavigator.Navigator>
  )
}