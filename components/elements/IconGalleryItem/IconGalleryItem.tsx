import React from 'react';
import { Box, Image} from '@mantine/core';
import { PolymorphicComponentProps } from '@mantine/utils';
import { BaseText } from '../BaseText/BaseText';
import { Images } from '../../../public/index';

interface IconGalleryItemProps  {
    img?:string;
    heading?:string;
  }

export const IconGalleryItem = (props: IconGalleryItemProps) => {
  return (
  <Box style={{width:"170px",height:"100px" ,display:"grid", justifyContent:"center"}} {...props}>
     <Image src={props.img ? props.img : Images.gallery_item} width={66} height={66} alt='Icon'/>
     <BaseText>{props.heading}</BaseText>
  </Box>
  );
};