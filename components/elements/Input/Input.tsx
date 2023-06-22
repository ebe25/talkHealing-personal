import React from "react";
import { TextInput, TextInputProps } from "@mantine/core";
// import { useTheme } from "native-base";
// import { getStyle } from "../../../utils/style";
// import { useStores } from "../../../models/root-store/root-store-context";
import useStyles from './Input.style';
import { PolymorphicComponentProps } from '@mantine/utils';


interface BaseTextInputProps extends PolymorphicComponentProps<'TextInput', TextInputProps> {
  style?: any;
}

export const Input = (props: BaseTextInputProps) => {
  // const { i18nStore } = useStores();
//   const theme = useTheme();
//   const style = getStyle(theme);

// const { classes } = useStyles();
  // let inputClass = props.style as never;

  return (
    <TextInput
      {...props}
      // className={classes[inputClass]}
    //   styles={{
    //     input: style.inputText[i18nStore.getCurrentLanguage()].intxt1,
    //   }}
    />
  );
};