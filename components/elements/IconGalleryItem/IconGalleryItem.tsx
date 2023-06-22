import React from 'react';
import { Box, Flex, Image } from '@mantine/core';
import { PolymorphicComponentProps } from '@mantine/utils';
import { BaseText } from '../BaseText/BaseText';
import { Images } from '../../../public/index';
import useStyles from './IconGalleryItem.style';
import { useStores } from '@/models';
import { TxKeyPath } from '@/i18n';

interface IconGalleryItemProps {
  img?: string;
  heading?: TxKeyPath;
  // style?: any;
}

export const IconGalleryItem = (props: IconGalleryItemProps) => {
  const { classes } = useStyles();
  // let buttonClass = props.style as never;
  return (
    <Flex direction={'column'} className={classes.mainBox} {...props}>
      <Image
        style={{ margin: 'auto' }}
        src={props.img ? props.img : Images.gallery_item}
        width={66}
        height={66}
        alt="Icon"
      />
      <BaseText className={classes.text} txtkey={props.heading} />
    </Flex>
  );
};
