/* eslint-disable import/extensions */
import React from 'react';
import { Button, Container, Flex, Box, Card, Group, Text } from '@mantine/core';
import { Icon } from '@iconify/react';
import Header from '@/components/modules/Header/Header';
import { createStyle } from './experience-sharing.styles';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import PageSearchBox from '@/components/modules/PageSearchbox';
import { typography } from '@/themes/Mantine/typography';
import { useStores } from '@/models';

const experienceCards = [
  {
    id: 1,
    title: 'Overcoming Diabetes with a Healthy Lifestyle',
    description:
      'I successfully managed my diabetes by adopting a healthier diet and regular exercise.',
    datePosted: 'Oct 23',
    likes: 25,
    comments: '10k',
  },
  {
    id: 2,
    title: 'Beating Cancer with Determination',
    description:
      'My journey to defeating cancer was tough, but with determination and a strong support system, I emerged victorious.',
    datePosted: 'Sept 23',
    likes: 42,
    comments: 15,
  },
  {
    id: 3,
    title: 'Managing Stress for Better Mental Health',
    description:
      'Learn how I improved my mental health by reducing stress and practicing mindfulness.',
    datePosted: 'Aug 23',
    likes: '30k',
    comments: 5,
  },
  // Add more experience cards as needed
];

export default function Experience() {
  const useStyles = createStyle();
  const { classes } = useStyles();
  const { i18nStore } = useStores();
  return (
    <>
      <Header />
      <Container className={classes.container}>
        <Flex justify="space-between" align="center">
          <BaseText color="black" fontWeight_variant={700} size={40}>
            Experience sharing
          </BaseText>
          <Button variant="default" color="gray" radius={11}>
            Add new
          </Button>
        </Flex>

        <Box mt={40} mb={25}>
          <PageSearchBox num={200} type="experiences" />
        </Box>
        <Flex direction="column" gap={16} align="center" justify="center">
          {experienceCards.map((item) => (
            <Card className={classes.cardContainer} key={item.id} padding="34px 32px">
              <BaseText style={typography.headings[i18nStore.getCurrentLanguage()].h10}>
                {item.title}
              </BaseText>
              <BaseText
                style={
                  (typography.paragraph[i18nStore.getCurrentLanguage()]['p1.5'],
                  { opacity: 0.7, marginTop: '6px' })
                }
              >
                {item.description}
              </BaseText>
              <Flex mt={24} justify="space-between" align="center">
                <Group spacing={16}>
                  <Box className={classes.forumIcons}>
                    <Icon icon="zondicons:calendar" />
                    <Text size={14} fw={400}>
                      {item.datePosted}
                    </Text>
                  </Box>
                  <Box className={classes.forumIcons}>
                    <Icon icon="mdi:eye" />
                    <BaseText size_variant="sm" fontWeight_variant={400}>
                      {item.likes}
                    </BaseText>
                  </Box>
                  <Box className={classes.forumIcons}>
                    <Icon icon="mdi:insert-comment" hFlip />
                    <BaseText size_variant="sm" fontWeight_variant={400}>
                      {item.comments}
                    </BaseText>
                  </Box>
                </Group>
                  <Icon icon="ic:sharp-share" />
              </Flex>
            </Card>
          ))}
        </Flex>
      </Container>
    </>
  );
}
