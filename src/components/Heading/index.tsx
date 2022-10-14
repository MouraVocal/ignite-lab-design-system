import { ReactNode } from 'react'
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export interface IHeadingProps {
  size: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
  className?: string
}

export const Heading = ({
  size = 'md',
  children,
  asChild,
  className
}: IHeadingProps) => {
  const Tag = asChild ? Slot : 'h2'
  return (
    <Tag
      className={clsx(
        (className && className?.includes('text')) || asChild
          ? ''
          : 'text-gray-100',
        'font-sans font-bold',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg'
        },
        className
      )}
    >
      {children}
    </Tag>
  )
}
