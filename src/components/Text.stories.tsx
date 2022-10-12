import { Meta, StoryObj } from '@storybook/react'
import { ITextProps, Text } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'What is a man?',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<ITextProps>

export const Default: StoryObj<ITextProps> = {}

export const Small: StoryObj<ITextProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<ITextProps> = {
  args: {
    size: 'lg'
  }
}

export const Custom: StoryObj<ITextProps> = {
  args: {
    asChild: true,
    children: <p>This is a paragraph</p>
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}
