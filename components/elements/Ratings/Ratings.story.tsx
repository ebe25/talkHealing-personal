import { Ratings } from './Ratings';
import type { Meta, StoryObj } from '@storybook/react';
import { Images } from '../../../public/index';
import StartImage from '../../../public/image/Start.png'

const meta: Meta<typeof Ratings> = {
    title: 'Elements/Ratings',
    component: Ratings,
    argTypes: {
      img: { control: { type: 'file', accept: '.png' } },
    }
};

export default meta;
type Story = StoryObj<typeof Ratings>;

export const ratings: Story = {
  args: {
    heading: 'Ratings',
    img: StartImage
    // img: 'https://media.istockphoto.com/id/1281240685/photo/portrait-of-a-crawling-baby.jpg?s=1024x1024&w=is&k=20&c=xujC1CSOMgWVJKAev6un9rNEoYOfEryxf0KM9bQ0Efo='
  },
};