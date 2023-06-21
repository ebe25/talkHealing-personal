import React from 'react';
import { Box, Flex, Image} from '@mantine/core';
import { PolymorphicComponentProps } from '@mantine/utils';
import { BaseText } from '../BaseText/BaseText';
import { Images } from '../../../public/index';

interface RatingsProps  {
    img?:string;
    heading?:string;
  }

export const Ratings = (props: RatingsProps) => {
  return (
  <Flex gap={4}>
     <Image src={props.img ? props.img : Images.start_Icon} width={18} height={18} alt='Icon'/>
     <BaseText>{props.heading}</BaseText>
  </Flex>
  );
};