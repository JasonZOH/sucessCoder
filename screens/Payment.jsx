import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import NoDataFound from '../component/NoDataFound';
import PaidItems from '../component/PaidItems';

const Payment = () => {

  const payments = useSelector(state => state.payments.payments);

  if (payments.length > 0){
    return (
      <FlatList
        data={payments}
        keyExtractor={ item => item.id}
        renderItem = {({ item}) => (
          <PaidItems
            totalPrice = {item.total}
            date={item.date}
            courseDetails={item}
          />
        )}
      />
    )
  }
  return <NoDataFound text="Pas d'achats réaliser"/>
}

export default Payment

const styles = StyleSheet.create({})