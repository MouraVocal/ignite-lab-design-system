import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { SignIn } from './SignIn'
import { rest } from 'msw'

export default {
  title: 'Pages/SignIn',
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/login', (req, res, ctx) => {
          return res(
            ctx.json({
              message: 'Login realizado!'
            })
          )
        })
      ]
    }
  }
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(
      canvas.getByPlaceholderText('johndoe@example.com'),
      'diego.moura3@gmail.com'
    )
    userEvent.type(canvas.getByPlaceholderText('*************'), '1234568478')
    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      return expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
    })
  }
}
