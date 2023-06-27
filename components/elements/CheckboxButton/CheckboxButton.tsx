import React from "react";
import { Checkbox } from "@mantine/core";
import {createStyle} from './CheckboxButton.style';
interface BaseCheckboxProps  {
  label?:string;
  colorvariant?: any;
}

export const BaseCheckbox = (props:BaseCheckboxProps) => {
  const useStyles = createStyle('en');
  const { classes } = useStyles();
  let checkboxClass = props.colorvariant as never;
    return (
        <Checkbox
        className={classes[checkboxClass]}
        labelPosition="left"
        radius="xl"
        label={props.label}
        {...props}
      />
    )
}
