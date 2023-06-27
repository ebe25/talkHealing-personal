import React from 'react';
import { TextInput, TextInputProps } from '@mantine/core';
import { createStyle } from './Input.style';
import { PolymorphicComponentProps } from '@mantine/utils';

interface BaseTextInputProps extends PolymorphicComponentProps<'TextInput', TextInputProps> {
  styleName?: 'inputText1' | 'inputText2';
}

export const Input = (props: BaseTextInputProps) => {
  const useStyles = createStyle('en');
  const { classes } = useStyles();
  let inputClass = props.styleName as never;

  return <TextInput {...props} className={classes[inputClass]} radius="xl" />;
};
