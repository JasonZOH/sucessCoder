import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import globalStyles from '../styles/globalStyles'

const CourseItem = ({ image, title, price, viewDetails, onAddToCart}) => {
  return (
    <TouchableHighlight
     onPress={viewDetails}
     underlayColor={globalStyles.green}
    >
      <View style={styles.courseContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: image}}
            style={styles.image}
          />
        </View>
        <View style={styles.CourseContainerDetails}>
          <Text style={styles.courseTitle}>{title}</Text>
          <Text style={styles.coursePrice}>{Number(price).toFixed(2)} €</Text>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={viewDetails}>
            <MaterialIcons name="remove-red-eye" size={35} color={globalStyles.green} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onAddToCart}>
            <MaterialIcons name="shopping-basket" size={35} color={globalStyles.green} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default CourseItem

const styles = StyleSheet.create({
  courseContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 10,
    height: 300,
    margin: 25,
    borderColor: globalStyles.lightGrey,
    borderWidth: 1,
    overflow:'hidden'
  },
  imageContainer: {
    width: '100%',
    height: '60%'
  },
  image: {
    width: '100%',
    height: '100%',
  },
  CourseContainerDetails: {
    alignItems: 'center',
    height: '20%',
    padding: 10
  },
  courseTitle: {
    fontSize: 18,
    marginVertical: 4,
    color: globalStyles.green,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  coursePrice: {
    color: globalStyles.darkGrey,
    fontSize: 16
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '20%',
    paddingHorizontal: 30
  }
})