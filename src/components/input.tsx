import type { ReactNode } from 'react'
import { TextInput, View, type TextInputProps } from 'react-native'
import colors from 'tailwindcss/colors'

function Input({ children }: { children: ReactNode }) {
  return (
    <View className="h-14 w-full flex-row items-center rounded-xl border border-white px-5 py-0">
      {children}
    </View>
  )
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="flex-1 p-0 font-regular text-base text-white"
      placeholderTextColor={colors.zinc[400]}
      {...rest}
    />
  )
}

Input.Field = Field

export { Input }
