import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'

export interface ITextProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
  className?: string
}

export const Text = ({
  size = 'md',
  children,
  asChild,
  className
}: ITextProps) => {
  const Tag = asChild ? Slot : 'span'
  return (
    <Tag
      className={clsx(
        (className && className?.includes('text')) || asChild
          ? ''
          : 'text-gray-100',
        'font-sans',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg'
        },
        className
      )}
    >
      {children}
    </Tag>
  )
}
