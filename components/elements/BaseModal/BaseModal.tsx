import React from 'react';
import { Modal, Group, Button, Card, ModalProps, Image, Flex, Text } from '@mantine/core';
import { PolymorphicComponentProps } from '@mantine/utils';
import { useDisclosure } from '@mantine/hooks';

interface BaseModalProps extends PolymorphicComponentProps<'div', ModalProps> {
  title?: string;
  ButtonText?: string;
}

export const BaseModal = (props: BaseModalProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal {...props} opened={opened} onClose={close} title={props.title} centered>
        {props.children}
      </Modal>

      <Group position="center">
        <Button onClick={open}>{props.ButtonText}</Button>
      </Group>
    </>
  );
};
