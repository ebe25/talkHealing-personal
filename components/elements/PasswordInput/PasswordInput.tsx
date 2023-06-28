import React, { useState } from 'react';
import { PasswordInput, PasswordInputProps, Image } from '@mantine/core';
import { Images } from '../../../public';
import { PolymorphicComponentProps } from '@mantine/utils';
import {createStyle} from './PasswordInput.style'

interface BaseSearchInput extends PolymorphicComponentProps<'input', PasswordInputProps> {
  placeholder?: string;
}

export const BasePasswordInput = (
  props: BaseSearchInput
) => {
  const [toggle, setToggle] = useState(false);
  const useStyles = createStyle('en');
  const { classes } = useStyles();

  return (
    <PasswordInput
      {...props}
      onClick={() => setToggle(!toggle)}
      className={classes.PasswordInput}
      placeholder={props.placeholder}
      radius="xl"
      visibilityToggleIcon={({ reveal }) =>
        reveal ? (
          <Image src={Images.dark_eye_icon} alt="dark_eye_icon" width="18px" height='13px' />
        ) : (
          <Image src={Images.light_eye_icon} alt="light_eye_icon" width="18px" height='13px' />
        )
      }
    />
  );
};
