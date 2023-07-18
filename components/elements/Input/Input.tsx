import React from 'react';
import { TextInput } from '@mantine/core';
import { createStyle } from './Input.style';
import { BaseTextInputProps } from './Input.style';
import { useStores } from '@/models';


export const Input = (props: BaseTextInputProps) => {
  const { i18nStore } = useStores();
  const useStyles = createStyle(i18nStore.getCurrentLanguage() as any, props);
  const { classes } = useStyles();

  return (
    <TextInput
      {...props}
      className={classes[props.style_variant]}
      placeholder={props.placeholder}
    />
  );
};
