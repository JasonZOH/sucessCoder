import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
import CourseItem from '../component/CourseItem';
import NoDataFound from '../component/NoDataFound';
import { addToCart } from '../redux/actions/actionAddToCart';

const Landing = ({ navigation }) => {

  const existingCourses = useSelector(state => state.courses.existingCourses);
  const courseToDisplay = existingCourses.filter(course => course.selected === false);
  const dispatch = useDispatch();

  const handleAddToCart = (course) => {
    dispatch(addToCart(course));
    alert('Formation ajouter au panier');
  }


  if (courseToDisplay.length){
    return (
      <View>
        <FlatList
          data={courseToDisplay}
          keyExtractor={ item => item.id}
          renderItem={({item}) => (
            <CourseItem 
              image={item.image}
              title={item.title}
              price={item.price}
              viewDetails={() => navigation.navigate('Details', { courseId: item.id, title: item.title})}
              onAddToCart={() => handleAddToCart(item)}
            />
          )}
        />
      </View>
    )
  }
  return (
    <NoDataFound text={'Pas de Cours à afficher'}/>
  )
}

export default Landing

const styles = StyleSheet.create({})