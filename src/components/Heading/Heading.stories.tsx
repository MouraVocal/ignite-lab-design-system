import { Meta, StoryObj } from '@storybook/react'
import { Heading, IHeadingProps } from '.'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'A title for some long and boring text',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg']
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
} as Meta<IHeadingProps>

export const Default: StoryObj<IHeadingProps> = {
  args: {
    size: 'md'
  }
}

export const Small: StoryObj<IHeadingProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<IHeadingProps> = {
  args: {
    size: 'lg'
  }
}

export const Custom: StoryObj<IHeadingProps> = {
  args: {
    size: 'md',
    asChild: true,
    children: <h1>This is a custom "h1" Heading</h1>
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}
