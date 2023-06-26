import React from 'react';
import useStyles from './RadioButton.style';
import { PolymorphicComponentProps } from '@mantine/utils';

interface BaseRadioButtonProps {
  colorvariant?: any;
}

export const BaseRadioButton = (props: BaseRadioButtonProps) => {
  const { classes } = useStyles();
  let checkboxClass = props.colorvariant as never;
  return (
    <input
      type="radio"
      style={{
        width: '18px',
        height: '18px',
      }}
      {...props}
    />
  );
};
