import {
  Flex,
  Container,
  useMantineTheme,
  Stack,
  Box,
  Group,
  Title,
  Grid,
  Col,
  SimpleGrid,
} from '@mantine/core';
import React from 'react';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { createStyle } from './Latest-research.style';
import { useStores } from '@/models';
import Header from '@/components/modules/Header/Header';
import { typography } from '@/themes/Mantine/typography';
import { SearchInput } from '@/components/elements/SearchInput/SearchInput';
import ResearchCard from '@/components/modules/ResearchCard';

export default function LatestResearch() {
  const theme = useMantineTheme();
  const { i18nStore } = useStores();

  const useStyles = createStyle();
  const { classes } = useStyles();

  return (
    <>
      <Header />
      <Container maw="100%" className={classes.container}>
        <BaseText
          color_variant={theme.colors.black}
          size_variant="lg"
          fontWeight_variant={700}
          styles={typography.headings[i18nStore.getCurrentLanguage()].h3}
        >
          Lastest Research
        </BaseText>
        <br />

        <Flex gap="32px">
          <Box className={classes.topicsLayout}>
            {/**Title */}
            <Title order={2}>
              <BaseText
                color_variant={theme.colors.black}
                fontWeight_variant={600}
                size_variant="md"
              >
                Topics
              </BaseText>
            </Title>
            {/**Diseases */}
            <Flex direction="column" gap="sm" mt={27}>
              <BaseText color_variant={theme.colors.black}>Lorem ipsum dolor sit amet.</BaseText>
              <BaseText color_variant={theme.colors.black}>Lorem, ipsum dolor.</BaseText>
              <BaseText color_variant={theme.colors.black}>
                Lorem ipsum dolor sit amet consectetur.
              </BaseText>
            </Flex>
          </Box>

          <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'lg', cols: 1 }]}>
            <Box>
              <Flex className={classes.searchInputContainer}>
                <BaseText>219 researches</BaseText>
                <SearchInput />
              </Flex>
            </Box>

            <Box>
              <ResearchCard />
              <ResearchCard />
            </Box>
          </SimpleGrid>
        </Flex>
      </Container>
    </>
  );
}
