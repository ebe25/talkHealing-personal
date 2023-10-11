import { Box, Container, useMantineTheme } from '@mantine/core';
import React from 'react';
import { useStores } from '@/models';
import { createStyle } from './ResearchCard.style';
import { BaseText } from '@/components/elements/BaseText/BaseText';

export default function ResearchCard() {
  const theme = useMantineTheme();
  const { i18nStore } = useStores();

  const useStyles = createStyle();
  const { classes } = useStyles();
  return (
    <Container className={classes.container}>
      <Box className={classes.cardText}>
        <BaseText size_variant="md" color_variant={theme.colors.black} fontWeight_variant={600}>
          Research title lorem ipsum dolor sit
        </BaseText>
        <BaseText size_variant="sm" color_variant={theme.colors.black} fontWeight_variant={600}>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat...
        </BaseText>
      </Box>
    </Container>
  );
}
