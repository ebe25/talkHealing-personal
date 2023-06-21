import { BaseModal } from './BaseModal';
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof BaseModal> = {
    title: 'Elements/BaseModal',
    component: BaseModal,
};

export default meta;
type Story = StoryObj<typeof BaseModal>;

export const baseModal: Story = {
  args: {
    title: 'Modal',
    ButtonText: 'Open centered Modal'
  },
};