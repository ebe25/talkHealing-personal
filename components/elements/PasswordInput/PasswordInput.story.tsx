import { BasePasswordInput } from './PasswordInput';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BasePasswordInput> = {
  title: 'Elements/BasePasswordInput',
  component: BasePasswordInput,
};

export default meta;
type Story = StoryObj<typeof BasePasswordInput>;

export const passwordInput: Story = {
  args: {},
};
