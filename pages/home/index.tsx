/* eslint-disable import/extensions */
import {
  Image,
  Flex,
  Container,
  Box,
  SimpleGrid,
  Card,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
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
  const [opened, { toggle }] = useDisclosure();

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

  const howItWorksData = [
    {
      id: 1,
      step: 'Sign Up and Complete Your Profile',
      description:
        "Begin your journey by creating your account on our patient portal. You'll need to provide some basic information such as your name, email, and a secure password. After signing up, complete your profile by adding additional details like your date of birth, gender, and any specific medical conditions you want to share with the community.",
    },
    {
      id: 2,
      step: 'Explore Communities and Connect with Others',
      description:
        'Browse through various communities and groups related to specific health conditions or topics of interest. Join communities that align with your needs and interests. Connect with fellow patients who share similar health experiences. You can send messages, comment on posts, or participate in group discussions.',
    },
    {
      id: 3,
      step: 'Share Your Experience and Offer Support',
      description:
        'Share your own experiences, stories, or insights related to your health journey. You can post text, images, or even videos to engage with the community. Support others by offering guidance, encouragement, or sharing resources. Your experience can be a source of inspiration for someone else.',
    },
    {
      id: 4,
      step: 'Stay Informed and Seek Advice',
      description:
        'Receive updates, news, and valuable information about your health condition and the latest research findings. Stay informed about events and webinars. Feel free to ask questions or seek advice from the community. Many members are willing to share their knowledge and experiences.',
    },
  ];
  return (
    <Container className={classes.container}>
      <Header />
      <Box maw="100%">
        <Flex justify="space-evenly" align="center">
          <Box className={classes.subMainText}>
            <Flex direction="column" justify="flex-start" align="center" gap="17px">
              <BaseText size={60} fontWeight_variant={700}>
                Lorem ipsum dolor sit amet consect.
              </BaseText>

              <BaseText style={{ opacity: 0.7 }} fontWeight_variant={400} size={16}>
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </BaseText>
            </Flex>
          </Box>

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
      </Box>

      {/* how it works */}
      <Box maw="100%">
        <BaseText
          fontWeight_variant={700}
          size={48}
          style={
            (typography.headings[i18nStore.getCurrentLanguage()].h3,
            { textAlign: 'center', marginTop: '200px' })
          }
        >
          How it works
        </BaseText>

        <SimpleGrid cols={2} spacing={40} className={classes.gridContainer}>
          {howItWorksData.map((item) => (
            <Card padding={25} className={classes.innerCard} key={item.id}>
              <Flex justify="space-evenly" align="center" gap={40}>
                {/**Inner content box */}
                <Flex direction="column" justify="flex-start" align="center" gap="16px">
                  <BaseText fontWeight_variant={700} size={28} color="black">
                    {item.step}
                  </BaseText>
                  <BaseText fontWeight_variant={400} size={12} color="black">
                    {item.description}
                  </BaseText>
                </Flex>
                {/**Number text  */}
                <BaseText
                  c={theme.colors.green[1]}
                  style={typography.paragraph[i18nStore.getCurrentLanguage()].p7}
                >
                  {item.id}
                </BaseText>
              </Flex>
              {/**Know more button  */}

              <Image height={60} width={60} src="/icons/know_more_icon.png" mt={32} />
            </Card>
          ))}
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
      </Box>

      {/**testimonials */}
      <Box maw="100%" p="0px 120px">
        <Flex direction="column" gap={56} justify="flex-start">
          <BaseText color_variant="black" fontWeight_variant={700} size={48}>
            Testimonials
          </BaseText>
          <TestimonialCarousal carouselData={testimonialData} />
        </Flex>
      </Box>
    </Container>
  );
}
