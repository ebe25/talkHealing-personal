import { BaseRadioButton } from './RadioButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BaseRadioButton> = {
  title: 'Elements/BaseRadioButton',
  component: BaseRadioButton,
};

export default meta;
type Story = StoryObj<typeof BaseRadioButton>;

export const input: Story = {
  args: {
  },
};