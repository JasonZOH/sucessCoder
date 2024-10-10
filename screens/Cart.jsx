import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import globalStyles from '../styles/globalStyles';
import CourseInCart from '../component/CourseInCart';
import NoDataFound from '../component/NoDataFound';
import { removeCourseCart } from '../redux/actions/actionRemoveCourseCart';
import { addPayment } from '../redux/actions/actionPayment';

const Cart = () => {

  const cartCourses = useSelector(state => state.cart.cartCourses);
  const total = useSelector(state => state.cart.total);
  const dispatch = useDispatch();

  const handlePayment = (cartCourses, total) => {
    dispatch(addPayment(cartCourses, total));
    alert('Paiement effectué');
  }

  return (
    <View style={styles.cartContainer}>
      {
        cartCourses.length > 0 ? (
          <View>
            <FlatList
              data={cartCourses}
              keyExtractor={ item => item.id}
              renderItem={({item, index}) => (
                <CourseInCart
                  title={item.title}
                  price={item.price}
                  onDelete={() => dispatch(removeCourseCart(item.id))}
                />
              )}
            />

            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>
                Total:
                <Text style={styles.totalPrice}> {Number(total).toFixed(2)} €</Text>
              </Text>

              <TouchableOpacity onPress={() => handlePayment(cartCourses, total)}>
                <View style={styles.btnAddPayment}>
                  <Text style={styles.btnAddPaymentText}>Payer</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )
        :
        (
          <NoDataFound text={'Panier Vide'} />
        )
      }
    </View>
  )
}

export default Cart;

const styles = StyleSheet.create({
  cartContainer: {
    margin: 20
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 19
  },
  totalText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  totalPrice: {
    color: globalStyles.green
  },
  btnAddPayment: {
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 25,
    backgroundColor: globalStyles.orange
  },
  btnAddPaymentText: {
    fontSize: 19
  }

})