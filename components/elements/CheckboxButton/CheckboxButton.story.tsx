import { BaseCheckbox } from './CheckboxButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BaseCheckbox> = {
  title: 'Elements/BaseCheckbox',
  component: BaseCheckbox,
};

export default meta;
type Story = StoryObj<typeof BaseCheckbox>;

export const input: Story = {
  args: {
    label:"Name"
  },
};