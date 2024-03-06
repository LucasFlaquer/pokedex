import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { MainTitle } from '../../components/MainTItle';
import Icon from 'react-native-vector-icons/Feather'
import { useState } from 'react';

interface Pokemon {
  name: string

}

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([{name: 'bulbasaur'}])
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MainTitle text='Pokédex' />
        <Text style={styles.headerText}>Search for pokemon by name or using the National Pokédex number.</Text>
      </View>
      <View style={styles.searchInput}>
        <Icon name='search' size={20} color={'#747476'} />
        <TextInput placeholder='What Pokémon are you looking for?' placeholderTextColor={'#747476'} />
      </View>
      <FlatList data={pokemons} renderItem={({item}) => <Text>{item.name}</Text>} />
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
  },
  searchInput: {
    marginTop: 25,
    flexDirection: 'row',
    marginBottom: 25,
    padding: 16,
    gap: 10,
    borderRadius: 10,
    backgroundColor: '#F2F2F2'
  }
})