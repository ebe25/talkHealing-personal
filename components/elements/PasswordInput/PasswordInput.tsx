import React, { useState } from 'react';
import { PasswordInput, PasswordInputProps, Image } from '@mantine/core';
import { Images } from '../../../public';
import {createStyle} from './PasswordInput.style'

export const BasePasswordInput = (
  props: PasswordInputProps & React.RefAttributes<HTMLInputElement>
) => {
  const [toggle, setToggle] = useState(false);
  const useStyles = createStyle('en');
  const { classes } = useStyles();

  return (
    <PasswordInput
      {...props}
      onClick={() => setToggle(!toggle)}
      className={classes.PasswordInput}
      radius="xl"
      visibilityToggleIcon={({ reveal }) =>
        reveal ? (
          <Image src={Images.dark_eye_icon} alt="dark_eye_icon" width="18px" height={'10px'} />
        ) : (
          <Image src={Images.light_eye_icon} alt="light_eye_icon" width="18px" height={'10px'} />
        )
      }
    />
  );
};
