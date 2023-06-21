import React from "react";
import { Checkbox } from "@mantine/core";

interface BaseCheckboxProps  {
  label?:string;
}

export const BaseCheckbox = (props:BaseCheckboxProps) => {
    return (
        <Checkbox
        labelPosition="left"
        label={props.label}
        radius="lg"
        size="md"
        {...props}
      />
    )
}
