import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import globalStyles from '../styles/globalStyles'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const CourseInCart = ({ title, price, onDelete}) => {
  return (
    <View style={styles.courseContainer}>
      <Text numberOfLines={1} style={styles.title}>{title}</Text>
      <Text style={styles.price}>{Number(price).toFixed(2)} €</Text>
      <TouchableOpacity onPress={onDelete}>
        <MaterialIcons name="delete" size={24} color={globalStyles.green} />
      </TouchableOpacity>
    </View>
  )
}

export default CourseInCart

const styles = StyleSheet.create({
  courseContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 9
  },
  title: {
    width: '60%'
  },
  price: {
    textAlign: 'right',
    paddingRight: 9,
    width: '30%'
  }
})