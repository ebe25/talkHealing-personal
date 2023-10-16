import { Flex, Container, useMantineTheme, Box, Title } from '@mantine/core';
import React from 'react';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { createStyle } from './Latest-research.style';

import Header from '@/components/modules/Header/Header';

import ResearchCard from '@/components/modules/ResearchCard';
import PageSearchBox from '@/components/modules/PageSearchbox';
import TopicsBox from '@/components/modules/TopicsBox';

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

export default function LatestResearch() {
  const theme = useMantineTheme();

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
          <TopicsBox />
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
