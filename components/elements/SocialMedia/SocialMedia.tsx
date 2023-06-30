import React from 'react';
import { Box, Image } from '@mantine/core';
import { Images } from '../../../public/index';
import { createStyle } from './SocialMedia.style';

interface BaseSocialMeadia {
  Icon?: string;
}

export const SocialMedia = (props: BaseSocialMeadia) => {
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
