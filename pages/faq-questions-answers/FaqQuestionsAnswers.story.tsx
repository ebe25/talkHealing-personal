import { FaqQuestionsAnswers } from '.';
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof FaqQuestionsAnswers> = {
  title: 'Page/FaqQuestionsAnswers',
  component: FaqQuestionsAnswers,
  argTypes: {
    style_variant: {},
  }
};

export default meta;
type Story = StoryObj<typeof FaqQuestionsAnswers>;

export const faqQuestionsAnswers: Story = {
  args: {},
};