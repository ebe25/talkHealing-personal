/* eslint-disable import/extensions */
import { Flex, Container, useMantineTheme, Box } from '@mantine/core';
import React from 'react';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { createStyle } from './Latest-research.style';

import Header from '@/components/modules/Header/Header';

import ResearchCard from '@/components/modules/ResearchCard';
import PageSearchBox from '@/components/modules/PageSearchbox';
import TopicsBox from '@/components/modules/TopicsBox';

const researchData = [
  {
    id: 1,
    title: 'Genes diversity curing Cancer',
    content: 'Coronary Artery Disease was very frightening and a life-threating experience for me.',
    datePosted: 'Sept 2021',
    author: 'Bryce Walker',
  },
  {
    id: 2,
    title: 'Research title lorem ipsum dolor sit',
    content:
      'S Arthritis Hypertension (High Blood Pressure) magna aliqua. Arthritis ad minim veniam, Influenza (Flu) exercitation ullamco Cancer nisi ut aliquip ex ea commodo consequat...',
    datePosted: 'Mar 2019',
    author: 'Andreas Walker',
  },
  {
    id: 3,
    title: 'Title for research lorem ipsum dolor sit',
    content: 'Sed do Diabetes Stroke ut labore Alzheimer\'s Disease aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    datePosted: 'Mar 2023',
    author: 'John Doe',
  },
];

export default function LatestResearch() {
  const theme = useMantineTheme();

  const useStyles = createStyle();
  const { classes } = useStyles();

  return (
    <>
      <Header />
      <Container maw="1250px">
        <Box className={classes.container}>
          <BaseText c={theme.colors.black[9]} className={classes.heading}>
            Lastest Research
          </BaseText>
          <Flex className={classes.mainItems}>
            <TopicsBox />
            <Flex direction="column" gap="sm">
              <PageSearchBox num={291} type="research" />
              {researchData.map((researchItem) => (
                <ResearchCard research={researchItem} key={researchItem.id} />
              ))}
            </Flex>
          </Flex>
        </Box>
      </Container>
    </>
  );
}
