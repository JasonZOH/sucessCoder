import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../screens/Landing';
import CourseInfos from '../screens/CourseInfos';
import Cart from '../screens/Cart';
import globalStyles from '../styles/globalStyles';
import CustomHeaderIcon from '../component/CustomHeaderIcon';

const CoursesStackNavigator = createStackNavigator();

export function CoursesNavigator() {
  return (
    <CoursesStackNavigator.Navigator
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
      <CoursesStackNavigator.Screen 
        name='Landing' 
        component={Landing} />
      <CoursesStackNavigator.Screen 
        name='Details' 
        component={CourseInfos}
        options={({ route }) => ({title: route.params.title})} />
      <CoursesStackNavigator.Screen name='Cart' component={Cart} />
    </CoursesStackNavigator.Navigator>
  )
}