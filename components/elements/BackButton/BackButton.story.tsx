import { BackButton } from './BackButton';
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof BackButton> = {
    title: 'Elements/BackButton',
    component: BackButton,
};

export default meta;
type Story = StoryObj<typeof BackButton>;

export const backButton: Story = {
  args: {
    heading: 'Checkout',
  },
};
