import { createDrawerNavigator } from "@react-navigation/drawer";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { CartNavigator } from "./CartStackNav";
import { CoursesNavigator } from "./CoursesStackNav";
import { PaymentNavigator } from "./PaymentStackNav";
import globalStyles from "../styles/globalStyles";
import CustomHeaderIcon from "../component/CustomHeaderIcon";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => (
        {
          headerStyle: { backgroundColor: globalStyles.green},
          headerTitleStyle: { fontWeight: 'bold', fontSize: 17},
          headerTintColor: globalStyles.white,
          headerRight: () => (
            <CustomHeaderIcon nav={navigation}/>
          )
        })
      }
    >
      <Drawer.Screen 
        name="Home"
        component={CoursesNavigator}
        options={{title: "Catalogue", drawerIcon: () => <MaterialIcons name="menu-book" size={24} color="black" />}}
      />
      <Drawer.Screen 
        name="CartS"
        component={CartNavigator}
        options={{title: "Panier", drawerIcon: () => <MaterialIcons name="shopping-cart" size={24} color="black" />}}
      />
      <Drawer.Screen 
        name="PaymentS"
        component={PaymentNavigator}
        options={{title: "Achats", drawerIcon: () => <MaterialIcons name="credit-card" size={24} color="black" />}}
      />
    </Drawer.Navigator>
  )
} 