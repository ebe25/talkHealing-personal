import React from 'react';
import { Button } from '@mantine/core';
import { createStyle } from './BaseButton.styles';
import { BaseButtonProps } from './BaseButton.styles';

export const BaseButton = (props: BaseButtonProps) => {
  const useStyles = createStyle('en', props);
  const { classes } = useStyles();

  return (
    <Button
      {...props}
      className={classes[props.style_variant]}
      style={{ textAlign: 'center' }}
    >
      {props.children}
    </Button>
  );
};
