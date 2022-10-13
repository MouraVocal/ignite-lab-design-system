import { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '.'
import { Text } from '../Text'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    Story => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text>I am the night</Text>
        </div>
      )
    }
  ]
} as Meta

export const Default: StoryObj = {}
