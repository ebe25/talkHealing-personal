import React from 'react';
import { Button, ButtonProps } from '@mantine/core';
// import useStyles from './BaseButton.styles';
import { PolymorphicComponentProps } from '@mantine/utils';

interface BaseButtonProps extends PolymorphicComponentProps<'button', ButtonProps> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'filled' | 'light' | 'outline' | 'default' | 'subtle';
}

export const BaseButton = (props: BaseButtonProps) => {
  // const { classes } = useStyles();
  return (
    <Button
      {...props}
      // className={classes.filled}
      size={props.size}
      radius={props.radius}
      variant={props.variant}
      style={{ textAlign: 'center', borderRadius: `radius` }}
    >
      {props.children}
    </Button>
  );
};
