import React, { useState } from 'react';
import { PasswordInput, PasswordInputProps, Image } from '@mantine/core';
// import { useTheme } from "native-base";
// import { getStyle } from "../../../utils/style";
// import { useStores } from "../../../models/root-store/root-store-context";
import { Images } from '../../../public';
import useStyles from './PasswordInput.style'

export const BasePasswordInput = (
  props: PasswordInputProps & React.RefAttributes<HTMLInputElement>
) => {
  //   const { i18nStore } = useStores();
  //   const theme = useTheme();
  const [toggle, setToggle] = useState(false);
  const { classes } = useStyles();

  return (
    <PasswordInput
      {...props}
      onClick={() => setToggle(!toggle)}
      className={classes.PasswordInput}
      radius="xl"
        // styles={{
        //   innerInput: style.inputText[i18nStore.getCurrentLanguage()].intxt1,
        // }}

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
