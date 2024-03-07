import { PokemonType } from '../../interfaces/pokemon-type'
import { Bug } from './Bug'
import { Dark } from './Dark'
import { Dragon } from './Dragon'
import { Electric } from './Electric'
import { Fairy } from './Fairy'
import { Fighting } from './Fighting'
import { Fire } from './Fire'
import { Flying } from './Flying'
import { Ghost } from './Ghost'
import { Grass } from './Grass'
import { Ground } from './Ground'
import { Ice } from './Ice'
import { Normal } from './Normal'
import { Poison } from './Poison'
import { Psychic } from './Psychic'
import { Rock } from './Rock'
import { Steel } from './Steel'
import { Water } from './Water'

interface Props {
  name: PokemonType
  color: string
}

const TypeIcons = {
  bug: Bug,
  dark: Dark,
  dragon: Dragon,
  electric: Electric,
  fairy: Fairy,
  fighting: Fighting,
  fire: Fire,
  flying: Flying,
  ghost: Ghost,
  grass: Grass,
  ground: Ground,
  ice: Ice,
  normal: Normal,
  poison: Poison,
  psychic: Psychic,
  rock: Rock,
  steel: Steel,
  water: Water
}

export function TypeIcon({ name, color }: Props) {
  const Component = TypeIcons[name]
  return <Component color={color} />
}