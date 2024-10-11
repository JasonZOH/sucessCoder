import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../styles/globalStyles'

const CoursesOverview = ( props ) => {
  return (
    <View style={styles.courseContainer}>
      <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
      <Text style={styles.price}>{props.price} €</Text>
    </View>
  )
}

export default CoursesOverview

const styles = StyleSheet.create({
  courseContainer: {
    backgroundColor: globalStyles.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 9
  },
  title: {
    width: "70%"
  },
  price: {
    color: globalStyles.dimGray
  }
})