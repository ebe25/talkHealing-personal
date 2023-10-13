import { Flex, Container, useMantineTheme, Box, Title } from '@mantine/core';
import React from 'react';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { createStyle } from './Latest-research.style';
import { useStores } from '@/models';
import Header from '@/components/modules/Header/Header';
import { typography } from '@/themes/Mantine/typography';
import ResearchCard from '@/components/modules/ResearchCard';
import PageSearchBox from '@/components/modules/PageSearchbox';

const researchData = [
  {
    title: 'Research title lorem ipsum dolor sit',
    content:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    datePosted: 'Mar 2019',
    author: 'Andreas Walker',
  },
  {
    title: 'Title for research lorem ipsum dolor sit',
    content:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    datePosted: 'Mar 2023',
    author: 'John Doe',
  },
  {
    title: 'Genes diversity curing Cancer',
    content:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    datePosted: 'Sept 2021',
    author: 'Bryce Walker',
  },
];

const commonDiseases = [
  'Hypertension (High Blood Pressure)',
  'Diabetes',
  'Coronary Artery Disease ',
  'Stroke',
  'Cancer',
  'Asthma',
  'Chronic Obstructive Pulmonary Disease ',
  "Alzheimer's Disease",
  'Arthritis',
  'Influenza (Flu)',
];

export default function LatestResearch() {
  const theme = useMantineTheme();
  const { i18nStore } = useStores();

  const useStyles = createStyle();
  const { classes } = useStyles();

  return (
    <>
      <Header />
      <Container maw="100%" className={classes.container}>
        <BaseText color={theme.colors.black[9]} size_variant="xl" fontWeight_variant={700} mb={10}>
          Lastest Research
        </BaseText>
        <Flex gap="32px">
          <Box className={classes.topicsLayout}>
            {/**Title */}
            <Title order={2}>
              <BaseText fontWeight_variant={600} size_variant="md">
                Topics
              </BaseText>
            </Title>
            {/**Diseases */}
            <Flex direction="column" columnGap="10px" mt={27} gap="10px">
              {commonDiseases.map((disease, index) => (
                <BaseText
                  key={index}
                  size_variant="sm"
                  style={typography.inputFieldText[i18nStore.getCurrentLanguage()].i1}
                >
                  {disease}
                </BaseText>
              ))}
            </Flex>
          </Box>
          <Flex direction="column" gap="sm">
            <PageSearchBox num={291} type="research" />
            {researchData.map((researchItem, index) => (
              <ResearchCard research={researchItem} key={index} />
            ))}
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
