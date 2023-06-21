import { IconGalleryItem } from './IconGalleryItem';
import type { Meta, StoryObj } from '@storybook/react';
import { Images } from '../../../public/index';

const meta: Meta<typeof IconGalleryItem> = {
    title: 'Elements/IconGalleryItem',
    component: IconGalleryItem,
    argTypes: {
      img: { control: { type: 'file', accept: '.png' } },
    }
};

export default meta;
type Story = StoryObj<typeof IconGalleryItem>;

export const iconGalleryItem: Story = {
  args: {
    heading: 'card',
    // img: 'https://media.istockphoto.com/id/1281240685/photo/portrait-of-a-crawling-baby.jpg?s=1024x1024&w=is&k=20&c=xujC1CSOMgWVJKAev6un9rNEoYOfEryxf0KM9bQ0Efo='
  },
};