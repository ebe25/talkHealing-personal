import React, { SetStateAction } from 'react';
import { PasswordInput, PasswordInputProps } from '@mantine/core';
import { PolymorphicComponentProps } from '@mantine/utils';
import {createStyle} from './PasswordInput.style'
import { useStores } from '@/models';

interface BaseSearchInput extends PolymorphicComponentProps<'input', PasswordInputProps> {
  placeholder?: string;
  onChange?: any
}

export const BasePasswordInput = (
  props: BaseSearchInput
) => {
  const useStyles = createStyle();
  const { classes } = useStyles();
  const{i18nStore} = useStores()

  return (
    <PasswordInput
      {...props}
      // iconWidth={i18nStore.isRTL?"10px":"0px"}
      // rightSectionWidth={i18nStore.isRTL?"0px":"10px"}
      classNames={{
        // wrapper:classes.wrapper,
        rightSection: classes.rightSection,
        innerInput: classes.innerInput
      }}
      placeholder={props.placeholder}
      radius="xl"
    />
  );
};
