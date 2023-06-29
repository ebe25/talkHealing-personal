import { Login } from './Login';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Login> = {
  title: 'Page/Login',
  component: Login,
  argTypes: {
    img: { control: { type: 'file', accept: '.png' } },
  },
};

export default meta;
type Story = StoryObj<typeof Login>;

export const login: Story = {
  args: {},
};
