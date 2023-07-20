import React, { SetStateAction } from 'react';
import { PasswordInput, PasswordInputProps } from '@mantine/core';
import { PolymorphicComponentProps } from '@mantine/utils';
import { createStyle } from './PasswordInput.style'

interface BaseSearchInput extends PolymorphicComponentProps<'input', PasswordInputProps> {
  placeholder?: string;
  onChange?: any
}

export const BasePasswordInput = (
  props: BaseSearchInput
) => {
  const useStyles = createStyle('en');
  const { classes } = useStyles();

  return (
    <PasswordInput
      {...props}
      className={classes.PasswordInput}
      placeholder={props.placeholder}
      radius="xl"
    />
  );
};
