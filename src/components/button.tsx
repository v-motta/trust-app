import type { ReactNode } from 'react'
import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native'

type ButtonProps = TouchableOpacityProps & {
  children: ReactNode
  isLoading?: boolean
}

type ButtonTextProps = {
  children: ReactNode
}

type ButtonIconProps = {
  children: ReactNode
}

function Button({ children, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className="h-14 w-full items-center justify-center rounded-xl bg-trust-red"
      disabled={isLoading}
      activeOpacity={0.8}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  )
}

function ButtonText({ children }: ButtonTextProps) {
  return (
    <Text className="font-mont-semiBold text-lg text-white">{children}</Text>
  )
}

function ButtonIcon({ children }: ButtonIconProps) {
  return children
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export { Button }
