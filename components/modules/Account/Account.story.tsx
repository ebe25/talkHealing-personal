import {Account} from './Account';
import type { Meta, StoryObj } from '@storybook/react';
// import LoginIcon from '../../public/image/LoginInear.png'

const meta: Meta<typeof Account> = {
  title: 'Page/Account',
  component: Account,
  argTypes: {
    img: { control: { type: 'file', accept: '.png' } },
  },
};

export default meta;
type Story = StoryObj<typeof Account>;

export const account: Story = {
  args: {
    img : ""
  },
};