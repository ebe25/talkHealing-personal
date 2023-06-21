import React from "react";
import { TextInput, TextInputProps } from "@mantine/core";
// import { useTheme } from "native-base";
// import { getStyle } from "../../../utils/style";
// import { useStores } from "../../../models/root-store/root-store-context";

export const Input = (props: TextInputProps) => {
  // const { i18nStore } = useStores();
//   const theme = useTheme();
//   const style = getStyle(theme);

  return (
    <TextInput
      {...props}
    //   styles={{
    //     input: style.inputText[i18nStore.getCurrentLanguage()].intxt1,
    //   }}
    />
  );
};