import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';

export default function App() {
  const [isLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold, Roboto_500Medium })
  if(isLoaded) return <Loading />
  return <Home />
}