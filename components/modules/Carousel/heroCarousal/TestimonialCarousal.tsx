import React from 'react';
import { Flex, Image, Box, useMantineTheme, Card, Group } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
// eslint-disable-next-line import/extensions
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { createStyle } from './TestimonialCarousal.style';
import { useStores } from '@/models';
import { typography } from '@/themes/Mantine/typography';

function TestimonialCarousal(props: { carouselData: any }) {
  const theme = useMantineTheme();
  const useStyles = createStyle();
  const { classes } = useStyles();
  const { i18nStore } = useStores();

  return (
    <>
      <Carousel maw="100%" mx="auto" loop height={300} slideSize="60%" align="start">
        {props.carouselData.map((item: any, id: any) => (
          <Carousel.Slide key={id}>
            <Card padding="lg" className={classes.testimonialCard}>
              <Flex justify="space-around" align="center">
                <Image
                  src={item.userProfileImg}
                  alt="userImage"
                  className={classes.carousel_image}
                />
                <Box className={classes.carousel_text}>
                  <Group spacing="xs">
                    <BaseText
                      color_variant={theme.colors.black}
                      style={typography.headings[i18nStore.getCurrentLanguage()].h8}
                      key="txt1"
                    >
                      {item.userName}
                    </BaseText>
                    <BaseText
                      key="txt2"
                      color_variant={theme.colors.black}
                      style={typography.headings[i18nStore.getCurrentLanguage()].h9}

                    >
                      {item.role}
                    </BaseText>
                  </Group>
                  <BaseText>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </BaseText>
                </Box>
              </Flex>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
}

export default TestimonialCarousal;
