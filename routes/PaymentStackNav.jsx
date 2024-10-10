import { createStackNavigator } from '@react-navigation/stack';
import Payment from './../screens/Payment';
import globalStyles from '../styles/globalStyles';
import CustomHeaderIcon from '../component/CustomHeaderIcon';

const PaymentStackNavigator = createStackNavigator();

export function PaymentNavigator() {
  return (
    <PaymentStackNavigator.Navigator>
      <PaymentStackNavigator.Screen 
        name='Payment' 
        component={Payment} 
        options={{ title: 'Mes achats', headerShown: false}}
        />

    </PaymentStackNavigator.Navigator>
  )
}