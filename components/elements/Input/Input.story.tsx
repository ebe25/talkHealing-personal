import { Input } from './Input';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Elements/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const input: Story = {
  args: {},
};
