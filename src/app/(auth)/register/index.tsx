import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Link } from 'expo-router'
import { Image, View, Text, ScrollView } from 'react-native'

export default function Register() {
  return (
    <View className="flex-1 items-center justify-center bg-trust-dark-blue p-10">
      <View className="flex-1 items-center justify-center gap-8">
        <View className="px-2">
          <Text className="font-mont-bold text-3xl text-white">
            Nice to meet you!
          </Text>
          <Text className="font-mont-regular text-white text-xl">
            Preencha o formulário para criar a sua conta
          </Text>
        </View>

        <View className="gap-4">
          <Input>
            <Input.Field placeholder="Nome" />
          </Input>

          <Input>
            <Input.Field placeholder="E-mail" />
          </Input>

          <Input>
            <Input.Field placeholder="Telefone" />
          </Input>

          <Input>
            <Input.Field placeholder="Nascimento" />
          </Input>

          <Input>
            <Input.Field placeholder="Senha" />
          </Input>

          <Input>
            <Input.Field placeholder="Confirmar senha" />
          </Input>
        </View>
      </View>

      <View className="w-full gap-4">
        <View className="flex-row items-center justify-center gap-2">
          <Text className="font-mont-regular text-white">
            Já tem uma conta?
          </Text>
          <Link href="/login">
            <Text className="font-mont-medium text-white underline">
              Faça login
            </Text>
          </Link>
        </View>
        <Button>
          <Button.Text>Cadastrar</Button.Text>
        </Button>
      </View>
    </View>
  )
}
