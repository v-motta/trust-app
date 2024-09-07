import { Slot } from 'expo-router'
import '@/styles/global.css'
import { StatusBar } from 'expo-status-bar'

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
} from '@expo-google-fonts/montserrat'
import { Loading } from '@/components/loading'
import { SafeAreaView } from 'react-native'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <SafeAreaView className="flex-1 bg-trust-dark-blue">
      <StatusBar style="light" />
      <Slot />
    </SafeAreaView>
  )
}
