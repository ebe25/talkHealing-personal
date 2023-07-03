import React from 'react';
import { Box, Image } from '@mantine/core';
import { Images } from '../../../public/index';
import { createStyle } from './CircularIcon.style';

interface BaseCircularIcon {
  Icon?: string;
}

export const CircularIcon = (props: BaseCircularIcon) => {
  const useStyles = createStyle('en');
  const { classes } = useStyles();

  return (
    <>
      <Box className={classes.Container} {...props}>
        <Image
          src={props.Icon ? props.Icon : Images.facebook_Icon}
          width={20}
          height={20}
          alt="Icon"
        />
      </Box>
    </>
  );
};
