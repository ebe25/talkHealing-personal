import React from "react";
import { Select } from "@mantine/core";
// import { useTheme } from "native-base";
// import { getStyle } from "../../../utils/style";
// import { useStores } from "../../../models/root-store/root-store-context";

interface BaseSelectboxProps {
  data:any
}

export const Selectbox = (props: BaseSelectboxProps) => {
  // const { i18nStore } = useStores();
//   const theme = useTheme();
//   const style = getStyle(theme);

  return (
    <Select
    // data={props.label}
    placeholder="Select"
    variant="filled"
    radius="xl"
    {...props}
    // label="Select your favorite framework/library"
    // description="This is anonymous"
    // required
  />
  );
};