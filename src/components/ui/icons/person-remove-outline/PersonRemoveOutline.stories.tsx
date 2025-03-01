import type { Meta, StoryObj } from '@storybook/react'
import { PersonRemoveOutline } from '@/components/ui/icons/person-remove-outline/PersonRemoveOutline.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: PersonRemoveOutline,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof PersonRemoveOutline>

export default meta
type Story = StoryObj<typeof meta>

export const PersonRemove1: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
