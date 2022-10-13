import { Slot } from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react'

export interface ITextInputRootProps {
  children: ReactNode
}

const TextInputRoot = ({ children }: ITextInputRootProps) => {
  return (
    <div className="flex items-center py-4 px-3 h-12 text-gray-100 rounded bg-gray-800 text-xs placeholder:text-gray-400 w-full focus-within:ring-2 ring-cyan-300 outline-none gap-3">
      {children}
    </div>
  )
}

export interface ITextInputHTMLInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputHTMLInput = (props: ITextInputHTMLInputProps) => {
  return (
    <input
      className="flex-1 text-gray-100 text-xs placeholder:text-gray-400 w-full outline-none bg-transparent"
      {...props}
    />
  )
}

export interface ITextInputIconProps {
  children: ReactNode
}

const TextInputIcon = ({ children }: ITextInputIconProps) => {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>
}

TextInputRoot.displayName = 'TextInput.Root'
TextInputHTMLInput.displayName = 'TextInput.Input'
TextInputIcon.displayName = 'TextInput.Icon'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputHTMLInput,
  Icon: TextInputIcon
}
