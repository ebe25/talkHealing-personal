import React from 'react';
import { Box, Flex, Image } from '@mantine/core';
import { PolymorphicComponentProps } from '@mantine/utils';
import { BaseText } from '../BaseText/BaseText';
import { Images } from '../../../public/index';
import { createStyle } from './Ratings.style';
import { useStores } from '@/models';
import { TxKeyPath } from '@/i18n';

interface RatingsProps {
  img?: string;
  heading?: TxKeyPath;
}

export const Ratings = (props: RatingsProps) => {
  const useStyles = createStyle('en');
  const { classes } = useStyles();
  const { i18nStore } = useStores();
  return (
    <Flex direction={i18nStore.isRTL ? 'row-reverse' : 'row'} gap={4} {...props}>
      <Image src={props.img ? props.img : Images.start_Icon} width={18} height={18} alt="Icon" />
      <BaseText className={classes.text} style={{ textAlign: 'center' }} txtkey={props.heading} />
    </Flex>
  );
};
