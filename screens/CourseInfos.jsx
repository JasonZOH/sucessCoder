import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const CourseInfos = ({ navigation, route }) => {

  const { courseId } = route.params;
  
  // const selectedCourse = useSelector(state => state.courses.existingCourses.find(course => course.id === courseId));

  // useEffect(() => {
  //   navigation.setOptions({
  //     title: selectedCourse.title
  //   })
  // }, [navigation]);

  return (
    <View>
      <Text>CourseInfos</Text>
    </View>
  )
}

export default CourseInfos

const styles = StyleSheet.create({})