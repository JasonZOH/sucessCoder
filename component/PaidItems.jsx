import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useState } from 'react';
import globalStyles from '../styles/globalStyles';
import AntDesign from '@expo/vector-icons/AntDesign';
import CoursesOverview from './CoursesOverview';

const PaidItems = ({totalPrice, date, courseDetails}) => {

  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(prevState => !prevState);
  }

  return (
    <ScrollView style={styles.paidCoursesContainer}>
      <View style={styles.paidCourses}>
        <Text style={styles.totalPaid}>{Number(totalPrice).toFixed(2)} €</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <TouchableOpacity 
        onPress={ handleShow }
        style={styles.iconBtn}
      >
        <AntDesign 
          name={ isShow ? "minuscircleo" : "pluscircleo"} 
          size={24} 
          color={globalStyles.green}
        />
      </TouchableOpacity>

      {
        isShow && (
          <View style={styles.detailsPaid}>
            {
              courseDetails.courses.map(course => (
                <CoursesOverview 
                  key={course.id}
                  title={course.title}
                  price={course.price}
                />
              ))
            }
          </View>
        )
      }
    </ScrollView>
  )
}

export default PaidItems

const styles = StyleSheet.create({
  paidCoursesContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 10,
    margin: 20,
    padding: 15
  },
  paidCourses: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15
  },
  totalPaid: {
    fontSize: 18,
  },
  date: {
    fontSize: 16,
  },
  iconBtn: {
    alignSelf: 'flex-end'
  },
  detailsPaid: {
    marginTop: 20,
    borderTopColor: globalStyles.lightGrey,
    borderTopWidth: 1
  }
})