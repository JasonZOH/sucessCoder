import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import React from 'react'
import CourseItem from '../component/CourseItem';

const Landing = () => {

  const existingCourses = useSelector(state => state.courses.existingCourses);

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
          />
        )}
      />
    </View>
    
  )
}

export default Landing

const styles = StyleSheet.create({})