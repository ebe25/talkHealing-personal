/* eslint-disable import/extensions */
import { Image, Flex, Container, Box, SimpleGrid, Card, useMantineTheme } from '@mantine/core';

import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import { useStores } from '@/models';
import { Images } from '../../public/index';

import Header from '@/components/modules/Header/Header';
import { createStyle } from './Home.style';
import TestimonialCarousal from '@/components/modules/Carousel/heroCarousal/TestimonialCarousal';

export default function Home() {
  const theme = useMantineTheme();
  const { i18nStore } = useStores();

  const useStyles = createStyle();
  const { classes } = useStyles();

  const testimonialData = [
    {
      userName: 'Albert John',
      role: 'Patient',
      userProfileImg: Images.userProfileImage,
      content:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      userName: 'Albert John',
      role: 'Patient',
      userProfileImg: Images.userProfileImage,
      content:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      userName: 'Albert John',
      role: 'Patient',
      userProfileImg: Images.userProfileImage,
      content:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      userName: 'Albert John',
      role: 'Patient',
      userProfileImg: Images.userProfileImage,
      content:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  return (
    <Container className={classes.container}>
      <Header />
      <BaseText
        fontWeight_variant={700}
        color="black"
        style={
          (typography.paragraph[i18nStore.getCurrentLanguage()].p2,
          { display: 'flex', justifyContent: 'center', alignItems: 'center' })
        }
      >
        Research
      </BaseText>
      <Container maw="100%">
        <Flex justify="space-around" align="center">
          <Container className={classes.subMainText}>
            <Flex direction="column" justify="center" align="center" gap="17px">
              <BaseText
                color="black"
                style={typography.label[i18nStore.getCurrentLanguage()].l10}
                fontWeight_variant={700}
              >
                Lorem ipsum dolor sit amet consect.
              </BaseText>

              <BaseText
                color="black"
                style={(typography.headings[i18nStore.getCurrentLanguage()].h3, { opacity: 0.7 })}
                fontWeight_variant={400}
              >
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </BaseText>
            </Flex>
          </Container>

          <Image
            className={classes.rightSide}
            src={Images.public_health}
            height="440px"
            width="440px"
          />

          {/** <Box className={classes.galleryItemBoxForMobile}>

          <CarouselBoxMobile data={galleryItemData} />
        </Box>*/}
        </Flex>
      </Container>

      {/* how it works */}
      <Container maw="100%">
        <BaseText
          color_variant="black"
          fontWeight_variant={700}
          size_variant="xl"
          style={
            (typography.headings[i18nStore.getCurrentLanguage()].h3,
            { textAlign: 'center', marginTop: '200px' })
          }
        >
          How it works
        </BaseText>

        <SimpleGrid cols={2} spacing="xl" className={classes.cardGrid}>
          <Card shadow="sm" p="md" bg={theme.colors.green[1]}>
            <Card.Section>
              <Box>
                <Flex direction="column" justify="center" align="flex-start" gap="16px">
                  <BaseText fontWeight_variant={700} fontSize_variant="xl" color="black">
                    Lorem Ipsum
                  </BaseText>
                  <Box>
                    <BaseText fontWeight_variant={400} fontSize_variant="md" color="black">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.
                    </BaseText>
                  </Box>
                </Flex>
              </Box>

              <BaseText
                c={theme.colors.green[1]}
                className={classes.cardGridText}
                style={typography.paragraph[i18nStore.getCurrentLanguage()].p7}
              >
                1
              </BaseText>
            </Card.Section>
          </Card>

          <Card shadow="sm" p="md" bg={theme.colors.green[1]}>
            <Flex direction="column" justify="center" align="flex-start" gap="16px">
              <BaseText fontWeight_variant={700} fontSize_variant="xl" color="black">
                Lorem Ipsum
              </BaseText>
              <Box>
                <BaseText fontWeight_variant={400} fontSize_variant="md" color="black">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat.
                </BaseText>
              </Box>
            </Flex>
          </Card>

          <Card shadow="sm" p="md" bg={theme.colors.green[1]}>
            <Flex direction="column" justify="center" align="flex-start" gap="16px">
              <BaseText fontWeight_variant={700} fontSize_variant="xl" color="black">
                Lorem Ipsum
              </BaseText>
              <Box>
                <BaseText fontWeight_variant={400} fontSize_variant="md" color="black">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat.
                </BaseText>
              </Box>
            </Flex>
          </Card>

          <Card shadow="sm" p="md" bg={theme.colors.green[1]}>
            <Flex direction="column" justify="center" align="flex-start" gap="16px">
              <BaseText fontWeight_variant={700} fontSize_variant="xl" color="black">
                Lorem Ipsum
              </BaseText>
              <Box>
                <BaseText fontWeight_variant={400} fontSize_variant="md" color="black">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat.
                </BaseText>
              </Box>
            </Flex>
          </Card>
        </SimpleGrid>

        {/* <Flex justify={'space-around'} align={'center'} gap={'40px'}>
          <Box w={'500px'} h={'337px'} className={classes.infoCard}>
            <Center>
              {' '}
              <BaseText
                fontWeight_variant={700}
                color="black"
                style={(typography.headings[i18nStore.getCurrentLanguage()].h5, { opacity: '1' })}
              >
                Lorem Ipsum{' '}
              </BaseText>
              <BaseText
                fontWeight_variant={700}
                color="black"
                style={(typography.headings[i18nStore.getCurrentLanguage()].h5, { opacity: '1' })}
              >
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
     700         </BaseText>
            </Center>
          </Box>
        </Flex> */}
      </Container>

      {/**testimonials */}
      <Container maw="100%">
        <BaseText
          color_variant="black"
          fontWeight_variant={700}
          size_variant="xl"
          style={
            (typography.headings[i18nStore.getCurrentLanguage()].h3,
            {
              padding: '0px 200px',
            })
          }
        >
          Testimonials
        </BaseText>
        <TestimonialCarousal carouselData={testimonialData} />
      </Container>
    </Container>
  );
}
