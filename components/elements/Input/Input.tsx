import React from 'react';
import { TextInput } from '@mantine/core';
import { createStyle } from './Input.style';
import { BaseTextInputProps } from './Input.style';
import { useStores } from '@/models';

export const Input = (props: BaseTextInputProps) => {
  const useStyles = createStyle('en',props);
  const {i18nStore} = useStores()
  const { classes } = useStyles();

  return (
   <TextInput
    {...props}
    className={classes[props.style_variant]}
    placeholder={props.placeholder}
    radius="xl" 
   />
  );
};
