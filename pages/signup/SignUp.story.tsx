import { SignUp } from '.';
import type { Meta, StoryObj } from '@storybook/react';
import LoginIcon from '../../public/image/LoginInear.png'

const meta: Meta<typeof SignUp> = {
  title: 'Page/SignUp',
  component: SignUp,
  argTypes: {
    img: { control: { type: 'file', accept: '.png' } },
  },
};

export default meta;
type Story = StoryObj<typeof SignUp>;

export const signUp: Story = {
  args: {
    img : LoginIcon
  },
};