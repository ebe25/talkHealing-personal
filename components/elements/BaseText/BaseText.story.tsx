import React from 'react';
import { BaseText } from './BaseText';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof BaseText> = {
  title: 'Elements/Text',
  component: BaseText,
  argTypes: {
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
    fontWeight: {
      control: {
        type: 'select',
        labels: {
          first: 400,
          second: 500,
          third: 600,
          fourth: 700,
        },
      },
      options: ['first', 'second', 'third', 'fourth'],
      mapping: {
        first: 400,
        second: 500,
        third: 600,
        fourth: 700,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BaseText>;

export const baseText: Story = {
  args: {
    size: 'xs',
    color: 'black',
    fontWeight: '500',
    children: 'Text',
  },
};
