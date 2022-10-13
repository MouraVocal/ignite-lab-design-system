import { Meta, StoryObj } from '@storybook/react'
import { ButtonHTMLAttributes } from 'react'
import { Button } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Click me (or not)'
  },
  argTypes: {}
} as Meta<ButtonHTMLAttributes<HTMLButtonElement>>

export const Default: StoryObj<ButtonHTMLAttributes<HTMLButtonElement>> = {}
