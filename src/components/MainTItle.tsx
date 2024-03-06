import { StyleSheet, Text } from 'react-native'

interface Props {
  text: string
  color?: string
}

export function MainTitle({ text, color = '#17171B'}: Props) {
  return (
    <Text style={[styles.title, {color}]}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '700',
    fontSize: 32,
  }
})