import { SocialMedia } from './SocialMedia';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SocialMedia> = {
  title: 'Elements/SocialMedia',
  component: SocialMedia,
  argTypes: {
    Icon: { control: { type: 'file', accept: '.png' } },
  },
};

export default meta;
type Story = StoryObj<typeof SocialMedia>;

export const socialMedia: Story = {
  args: {},
};