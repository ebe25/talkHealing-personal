import { ForgotPassword } from './ForgotPassword';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ForgotPassword> = {
  title: 'Page/ForgotPassword',
  component: ForgotPassword,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ForgotPassword>;

export const forgotPassword: Story = {
  args: {},
};
