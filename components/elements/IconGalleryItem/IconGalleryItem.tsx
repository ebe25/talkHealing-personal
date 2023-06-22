import React from 'react';
import { Box, Image} from '@mantine/core';
import { PolymorphicComponentProps } from '@mantine/utils';
import { BaseText } from '../BaseText/BaseText';
import { Images } from '../../../public/index';
import useStyles from "./IconGalleryItem.style"

interface IconGalleryItemProps  {
    img?:string;
    heading?:string;
    // style?: any;
  }

export const IconGalleryItem = (props: IconGalleryItemProps) => {
  const { classes } = useStyles();
  // let buttonClass = props.style as never;
  return (
  <Box 
  className={classes.mainBox}
  {...props}>
     <Image src={props.img ? props.img : Images.gallery_item} width={66} height={66} alt='Icon'/>
     <BaseText className={classes.text}>{props.heading}</BaseText>
  </Box>
  );
};