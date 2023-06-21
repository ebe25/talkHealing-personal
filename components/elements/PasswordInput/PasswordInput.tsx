import React, { useState } from 'react';
import { PasswordInput, PasswordInputProps, Image } from '@mantine/core';
// import { useTheme } from "native-base";
// import { getStyle } from "../../../utils/style";
// import { useStores } from "../../../models/root-store/root-store-context";
import { Images } from '../../../public';

export const BasePasswordInput = (
  props: PasswordInputProps & React.RefAttributes<HTMLInputElement>
) => {
  //   const { i18nStore } = useStores();
  //   const theme = useTheme();
  const [toggle, setToggle] = useState(false);
  //   const style = getStyle(theme);

  return (
    <PasswordInput
      {...props}
      onClick={() => setToggle(!toggle)}
      //   styles={{
      //     innerInput: style.inputText[i18nStore.getCurrentLanguage()].intxt1,
      //   }}

      visibilityToggleIcon={({ reveal }) =>
        reveal ? (
          <Image src={Images.dark_eye_icon} alt="dark_eye_icon" width="16px" height={'12px'} />
        ) : (
          <Image src={Images.light_eye_icon} alt="light_eye_icon" width="12px" height={'10px'} />
        )
      }
    />
  );
};
