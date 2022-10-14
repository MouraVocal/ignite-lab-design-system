import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export const Checkbox = (props: CheckboxPrimitive.CheckboxProps) => {
  return (
    <CheckboxPrimitive.Root
      className="h-6 w-6 p-[2px] bg-gray-800 rounded"
      {...props}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check className="text-cyan-500 h-5 w-5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
