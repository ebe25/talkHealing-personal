import { PrivacyPolicy } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PrivacyPolicy> = {
    title: 'Page/PrivacyPolicy',
    component: PrivacyPolicy,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PrivacyPolicy>;

export const privacyPolicy: Story = {
    args: {},
};