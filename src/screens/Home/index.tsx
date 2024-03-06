import { StyleSheet, Text, TextInput, View } from 'react-native';
import { MainTitle } from '../../components/MainTItle';
import Icon from 'react-native-vector-icons/Feather'

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MainTitle text='Pokédex' />
        <Text style={styles.headerText}>Search for pokemon by name or using the National Pokédex number.</Text>
      </View> <View>
        <Icon name='search' size={35} />
        <TextInput placeholder='What Pokémon are you looking for?' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    marginTop: 40, // isso vai sair daqui
  },
  header: {
    gap: 10
  },
  headerText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19.09,
    color: '#747476'
  }
})