import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Link } from 'expo-router'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Login() {
  return (
    <View className="flex-1 items-center justify-center bg-trust-dark-blue p-10">
      <View className="flex-1 items-center justify-center gap-8">
        <Image
          source={require('@/assets/images/trust-logo.png')}
          className="w-52"
          resizeMode="contain"
        />

        <View className="px-2">
          <Text className="font-mont-bold text-3xl text-white">
            Welcome back
          </Text>
          <Text className="font-mont-regular text-white text-xl">
            Digite seu usuário e senha para fazer o login
          </Text>
        </View>

        <View className="gap-4">
          <Input>
            <Input.Field placeholder="Usuário" />
          </Input>

          <View>
            <Input>
              <Input.Field placeholder="Senha" />
            </Input>
            <Link href="forgot-password" className="ml-auto">
              <Text className="font-mont-medium text-white underline">
                Esqueceu a senha?
              </Text>
            </Link>
          </View>
        </View>
      </View>

      <View className="w-full gap-4">
        <View className="flex-row items-center justify-center gap-2">
          <Text className="font-mont-regular text-white">
            Não tem uma conta?
          </Text>
          <Link href="/register">
            <Text className="font-mont-medium text-white underline">
              Cadastre-se
            </Text>
          </Link>
        </View>
        <Button>
          <Button.Text>Entrar</Button.Text>
        </Button>
      </View>
    </View>
  )
}
