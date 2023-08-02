import Profile from '.';
import type { Meta, StoryObj } from '@storybook/react';
// import LoginIcon from '../../public/image/LoginInear.png'

const meta: Meta<typeof Profile> = {
  title: 'Page/Profile',
  component: Profile,
  argTypes: {
    img: { control: { type: 'file', accept: '.png' } },
  },
};

export default meta;
type Story = StoryObj<typeof Profile>;

export const profile: Story = {
  args: {
    img : ""
  },
};