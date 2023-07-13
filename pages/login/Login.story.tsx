import { Login } from '.';
import type { Meta, StoryObj } from '@storybook/react';
import LoginIcon from '../../public/image/LoginInear.png'

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
  args: {
    img : LoginIcon
  },
};
