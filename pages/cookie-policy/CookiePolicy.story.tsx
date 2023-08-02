import { CookiePolicy } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CookiePolicy> = {
    title: 'Page/CookiePolicy',
    component: CookiePolicy,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CookiePolicy>;

export const cookiePolicy: Story = {
    args: {},
};