import React from 'react';
import { Text, TextProps } from '@mantine/core';
import { translate, TxKeyPath } from '../../../i18n';
import { PolymorphicComponentProps } from '@mantine/utils';

interface BaseTextProps extends PolymorphicComponentProps<'div', TextProps> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  fontWeight?: 400 | 500 | 600 | 700;
  txtkey?: TxKeyPath;
}

export const BaseText = (props: BaseTextProps) => {
  return (
    <Text
      fz={props.size}
      fw={props.fontWeight}
      c={props.color}
      {...props}
      style={{ textAlign: 'center' }}
    >
      {props.txtkey ? translate(props.txtkey) : props.children}
    </Text>
  );
};
