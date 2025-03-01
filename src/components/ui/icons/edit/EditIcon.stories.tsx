import type { Meta, StoryObj } from '@storybook/react'
import { EditIcon } from '@/components/ui/icons/edit/EditIcon.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: EditIcon,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof EditIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Edit2: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
