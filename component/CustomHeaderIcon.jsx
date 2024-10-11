import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import globalStyles from "../styles/globalStyles";
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const CustomHeaderIcon = ({ nav }) => {
  return (
    <TouchableOpacity onPress={() => nav.navigate('CartS')}>
      <View style={styles.styleButtonHeader}>
        <MaterialIcons name="shopping-cart" size={24} color={globalStyles.white} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  styleButtonHeader: {
    marginHorizontal: 15
  }
});

export default CustomHeaderIcon