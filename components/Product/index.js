import { 
    View,
    Text, 
    TouchableOpacity, 
    StyleSheet 
} from 'react-native';

export const Product = () => {
    return (
        <View style={styles.listProducts}>
            <Text style={styles.productName}>Laranja</Text>
            <TouchableOpacity style={styles.listButton}>
                <Text style={styles.listTextButton}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    listProducts: {
    backgroundColor: '#E1E1E6',
    marginTop: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  productName: {
    fontSize: 18,
    marginLeft: 16,
    flex: 1
  },
  listButton: {
    backgroundColor: '#FF5733',
    height: 56,
    width: 56,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listTextButton: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  }
})
