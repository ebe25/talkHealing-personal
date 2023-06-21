import React from 'react';
import { BaseButton } from './BaseButton';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof BaseButton> = {
  title: 'Elements/Button',
  component: BaseButton,
  argTypes: {
    onClick: { action: 'Base Button' },
    size: {
      control: {
        type: 'select',
        labels: {
          first: 'xs',
          second: 'sm',
          third: 'md',
          fourth: 'lg',
          fifth: 'xl',
        },
      },
      options: ['first', 'second', 'third', 'fourth', 'fifth'],
      mapping: {
        first: 'xs',
        second: 'sm',
        third: 'md',
        fourth: 'lg',
        fifth: 'xl',
      },
    },
    radius: {
      control: {
        type: 'select',
        labels: {
          first: 'xs',
          second: 'sm',
          third: 'md',
          fourth: 'lg',
          fifth: 'xl',
        },
      },
      options: ['first', 'second', 'third', 'fourth', 'fifth'],
      mapping: {
        first: 'xs',
        second: 'sm',
        third: 'md',
        fourth: 'lg',
        fifth: 'xl',
      },
    },
    variant: {
      control: {
        type: 'select',
        labels: {
          first: 'Filled',
          second: 'Light',
          third: 'Outline',
          fourth: 'Default',
          fifth: 'Subtle',
        },
      },
      options: ['first', 'second', 'third', 'fourth', 'fifth'],
      mapping: {
        first: 'filled',
        second: 'light',
        third: 'outline',
        fourth: 'default',
        fifth: 'subtle',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BaseButton>;

export const baseButton: Story = {
  args: {
    size: 'xs',
    disabled: false,
    radius: 'xs',
    children: 'Button',
  },
};
