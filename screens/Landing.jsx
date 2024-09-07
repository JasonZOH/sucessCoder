import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import React from 'react'
import CourseItem from '../component/CourseItem';
import NoDataFound from '../component/NoDataFound';

const Landing = () => {

  const existingCourses = useSelector(state => state.courses.existingCourses);

  if (existingCourses.length){
    return (
      <View>
        <FlatList
          data={existingCourses}
          keyExtractor={ (item) => item.id}
          renderItem={({item}) => (
            <CourseItem 
              image={item.image}
              title={item.title}
              price={item.price}
              viewDetails={() => alert("Détails")}
              onAddToCart={() => alert("Panier")}
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