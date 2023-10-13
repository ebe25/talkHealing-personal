import { Text, Container, useMantineTheme, Flex, Group, Button, Title } from '@mantine/core';
import React from 'react';
import Header from '@/components/modules/Header/Header';
import { useStores } from '@/models';
import { createStyle } from './Forum.styles';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseText } from '@/components/elements/BaseText/BaseText';

export default function Forum() {
  const theme = useMantineTheme();
  const { i18nStore } = useStores();
  const useStyles = createStyle();
  const { classes } = useStyles();
  return (
    <>
      <Header />
      <Container className={classes.container}>
        <Flex justify="space-between" align="center">
          <Title order={3}>
            <BaseText color="black" fontWeight_variant={700} size={40}>
             Forum
            </BaseText>
          </Title>
          <Group spacing={32}>
            <Button className={classes.badges}>Professional Q&A</Button>
            <Button className={classes.badges}>My questions</Button>
            <Button className={classes.badges}>Ask questions</Button>
          </Group>
        </Flex>
        <Text color={theme.colors.gray[6]}>hey there here goes the topics component</Text>
      </Container>
    </>
  );
}
