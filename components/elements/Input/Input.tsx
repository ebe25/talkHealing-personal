import React from 'react';
import { TextInput, TextInputProps } from '@mantine/core';
import { createStyle } from './Input.style';
import { BaseTextInputProps } from './Input.style';

export const Input = (props: BaseTextInputProps) => {
  const useStyles = createStyle('en',props);
  const { classes } = useStyles();

  return <TextInput {...props} className={classes[props.style_variant]} radius="xl" />;
};
