import React from 'react';
import { Button, ButtonProps } from '@mantine/core';
import useStyles from './BaseButton.styles';
import { PolymorphicComponentProps } from '@mantine/utils';
import { ClassNamesProps } from '@emotion/react';

interface BaseButtonProps extends PolymorphicComponentProps<'button', ButtonProps> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'filled' | 'light' | 'outline' | 'default' | 'subtle';
  colorvariant?: 'filled_blue' | 'filled_red' | 'outline' | 'disabled' | 'subtle' ;
}

export const BaseButton = (props: BaseButtonProps) => {
  const { classes } = useStyles();
  let buttonClass = props.colorvariant as never;

  return (
    <Button
      {...props}
      className={classes[buttonClass]}
      size={props.size}
      variant={props.variant}
      style={{ textAlign: 'center' }}
    >
      {props.children}
    </Button>
  );
};
