import { ActivityIndicator, StyleSheet, View } from 'react-native';

export function Loading() {
  return (
    <View>
      <ActivityIndicator color={'#e3e3e3'} />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  indicator: {}
})