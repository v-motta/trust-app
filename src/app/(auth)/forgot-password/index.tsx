import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Link } from 'expo-router'
import { Text, View, Image } from 'react-native'

export default function ForgotPassword() {
  return (
    <View className="flex-1 items-center justify-center bg-trust-dark-blue p-10">
      <View className="flex-1 items-center justify-center gap-8">
        <Image
          source={require('@/assets/images/trust-logo.png')}
          className="w-56"
          resizeMode="contain"
        />

        <View className="px-2">
          <Text className="font-mont-bold text-3xl text-white">
            Missing something?
          </Text>
          <Text className="font-mont-regular text-white text-xl">
            Digite seu e-mail para recuperar sua senha
          </Text>
        </View>

        <View className="gap-4">
          <Input>
            <Input.Field placeholder="E-mail" />
          </Input>
        </View>
      </View>

      <View className="w-full gap-4">
        <View className="flex-row items-center justify-center gap-2">
          <Text className="font-mont-regular text-white">
            Lembrou da senha?
          </Text>
          <Link href="/login">
            <Text className="font-mont-medium text-white underline">
              Faça login
            </Text>
          </Link>
        </View>
        <Button>
          <Button.Text>Enviar e-mail</Button.Text>
        </Button>
      </View>
    </View>
  )
}
