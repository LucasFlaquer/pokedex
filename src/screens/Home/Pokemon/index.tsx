import { Image, StyleSheet, Text, View } from 'react-native';
import { Pokemon } from '..';
import { TypeIcon } from '../../../components/TypeIcon';
import { constants } from '../../../constants';
import { captalize } from '../../../utils/captalize';

interface Props {
  pokemon: Pokemon
}

export function PokemonItem({ pokemon }: Props) {
  const formattedID = `# ${pokemon.id.toString().padStart(3, '0')}`
  const formattedName = captalize(pokemon.name)
  const bgColor = constants.pokemonTypes[pokemon.types[0]].background
  return (
    <View style={{...styles.container, backgroundColor: bgColor  }}>
      <View>
        <Text style={styles.id}>{formattedID}</Text>
        <Text style={styles.name}>{formattedName}</Text>
        <View style={styles.types}>
          {pokemon.types.map(type => (
            <View
              key={type}
              style={{ ...styles.type, backgroundColor: constants.pokemonTypes[type].color }}
            >
              <TypeIcon name={type} color='#fff' />
              <Text style={styles.typeName}>{type}</Text>
            </View>
          ))}
        </View>
      </View>
      <Image style={styles.sprite} height={130} width={130} source={{uri: pokemon.sprite}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,
    paddingLeft: 20,
    marginBottom: 20,
    height: 115
  },
  id: {
    fontSize: 12,
    color: '#17171B99'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 31.93,
    marginBottom: 5,
    color: '#fff'
  },
  types: {
    flexDirection: 'row',
    gap: 5
  },
  type: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5, 
    gap: 5
  },
  typeName: {
    color: '#fff',
    fontSize: 12,

  },
  sprite: {
    marginTop: -25
  }
})