import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../screens/Landing';
import CourseInfos from '../screens/CourseInfos';
import globalStyles from '../styles/globalStyles';
import CustomHeaderIcon from '../component/CustomHeaderIcon';

const CoursesStackNavigator = createStackNavigator();

export function CoursesNavigator() {
  return (
    <CoursesStackNavigator.Navigator
      
    >
      <CoursesStackNavigator.Screen 
        name='Landing' 
        component={Landing} 
        options={{ headerShown: false}}
        />
      <CoursesStackNavigator.Screen 
        name='Details' 
        component={CourseInfos}
        options={({ route }) => ({title: route.params.title})} />
    </CoursesStackNavigator.Navigator>
  )
}