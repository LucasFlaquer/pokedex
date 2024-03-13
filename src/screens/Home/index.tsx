import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { MainTitle } from '../../components/MainTItle';
import Icon from 'react-native-vector-icons/Feather'
import { useEffect, useState } from 'react';
import { api } from '../../api';
import axios from 'axios';
import { PokemonItem } from './Pokemon';
import { PokemonType } from '../../interfaces/pokemon-type';

type IndexPokemonResponse = {
  count: number
  next: string
  results: {
    name: string
    url: string
  }[]
}
type DetailPokemonResponse = {
  id: number
  name: string
  types: { slot: number, type: { name: PokemonType } }[]
  sprites: {
    other: {
      "official-artwork": {
        front_default: string
      }
    }
  }
}

export interface Pokemon {
  id: number
  name: string
  url: string
  types: PokemonType[]
  sprite: string
}

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [nextUrl, setNextUrl] = useState('')
  const [pokemonName, setPokemonName] = useState('')

  async function fetchPokemons(url: string) {
    const { data } = await api.get<IndexPokemonResponse>(url)
    setNextUrl(data.next)
    const promises = data.results.map(({ url }) => {
      return axios.get<DetailPokemonResponse>(url)
    })
    const responses = await Promise.all(promises)
    const pokemons = responses.map(response => {
      const types = response.data.types.map(item => item.type.name)
      return {
        name: response.data.name,
        id: response.data.id,
        url: `${response.config.url}`,
        types,
        sprite: response.data.sprites.other['official-artwork'].front_default
      }
    })
    return pokemons
  }
  async function fetchInitialData() {
    const pokemons = await fetchPokemons('/pokemon')
    setPokemons(pokemons)
  }

  async function fetchMore() {
    const morePokemons = await fetchPokemons(nextUrl)
    console.log(morePokemons)
    setPokemons(state => [...state, ...morePokemons])
  }

  useEffect(() => {
    fetchInitialData()
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MainTitle text='Pokédex' />
        <Text style={styles.headerText}>Search for pokemon by name or using the National Pokédex number.</Text>
      </View>
      <View style={styles.searchInput}>
        <Icon name='search' size={20} color={'#747476'} />
        <TextInput
          placeholder='What Pokémon are you looking for?'
          placeholderTextColor={'#747476'} />
      </View>
      <FlatList
        style={styles.list}
        data={pokemons}
        renderItem={({ item }) => <PokemonItem pokemon={item} />}
        onEndReached={fetchMore}
      />
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
  },
  list: {
    paddingTop: 10,
    marginBottom: 15,
    height: '80%'
  }
})