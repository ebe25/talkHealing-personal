import React from 'react';
import { Box, Flex, Image} from '@mantine/core';
import { PolymorphicComponentProps } from '@mantine/utils';
import { BaseText } from '../BaseText/BaseText';
import { Images } from '../../../public/index';
import useStyles from './Ratings.style';

interface RatingsProps  {
    img?:string;
    heading?:string;
  }

export const Ratings = (props: RatingsProps) => {

  const {classes} = useStyles();
  return (
  <Flex gap={4} {...props}>
     <Image src={props.img ? props.img : Images.start_Icon} width={18} height={18} alt='Icon'/>
     <BaseText className={classes.text}>{props.heading}</BaseText>
  </Flex>
  );
};