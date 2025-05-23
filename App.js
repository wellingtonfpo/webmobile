import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Product } from './components/Product';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>
      <Text style={styles.data}>sexta-feira, 16 de maio 2025</Text>
      
      <View style={styles.form}>
        <TextInput
          style={styles.input} 
          placeholder='Nome do produto'
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <Product /> 
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    padding: 24
  },
  titulo: {
    color: '#000',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop:48
  },
  data: {
    color: '#000',
    fontSize: 18
  },
  input: {
    backgroundColor: '#E1E1E6',
    height: 56,
    padding: 16,
    fontSize: 18,
    borderRadius: 5,
    flex: 1,
    marginRight: 5
  },
  form: {
    flexDirection: 'row',
    marginTop: 24,
  },
  button: {
    height: 56,
    width: 56,
    backgroundColor: '#00882c',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  }
})
