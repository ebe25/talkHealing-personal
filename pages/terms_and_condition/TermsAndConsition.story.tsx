import { TermsAndConditionAndPolicy } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TermsAndConditionAndPolicy> = {
    title: 'Page/TermsAndConditionAndPolicy',
    component: TermsAndConditionAndPolicy,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TermsAndConditionAndPolicy>;

export const termsAndConditionAndPolicy: Story = {
    args: {},
};