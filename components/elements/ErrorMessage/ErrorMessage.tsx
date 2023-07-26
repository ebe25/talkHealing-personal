import React from 'react'
import { Text } from '@mantine/core'
import { useStores } from '../../../models';
import { TxKeyPath } from '@/i18n';

const ErrorMessage = (props:{
    message: TxKeyPath | string
}) => {
  const { i18nStore } = useStores();
  return (
    <Text
        color='red'
    >{props.message}</Text>
  )
}

export default ErrorMessage