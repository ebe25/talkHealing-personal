import React from 'react';
import { Modal, Group, Button, Card, ModalProps, Image, Flex, Text } from '@mantine/core';
import { PolymorphicComponentProps } from '@mantine/utils';
import { useDisclosure } from '@mantine/hooks';

interface BaseModalProps extends PolymorphicComponentProps<'div', ModalProps> {
  title?: string | null ;
}

export const BaseModal = (props: BaseModalProps) => {
  // const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal {...props} opened={props.opened} onClose={props.onClose} centered title={props.title}>
        {props.children}
      </Modal>
    </>
  );
};
