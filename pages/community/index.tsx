/* eslint-disable import/extensions */
import {
  Container,
  Flex,
  Button,
  SimpleGrid,
  Card,
  Image,
  useMantineTheme,
  Box,
  Group,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { createStyle } from './Community.style';
import Header from '@/components/modules/Header/Header';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import PageSearchBox from '@/components/modules/PageSearchbox';
import { Images } from '@/public';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';

const communityCardData = [
  {
    id: 1,
    communityName: 'Cancer Community',
    timestamp: '1 day ago',
    communityImg: '/icons/communityCardimg.svg',
  },
  {
    id: 2,
    communityName: 'Fever Community',
    timestamp: '2 days ago',
    communityImg: '/icons/communityCardimg.svg',
  },
  {
    id: 3,
    communityName: 'Diabetes Support Group',
    timestamp: '5 hours ago',
    communityImg: '/icons/communityCardimg.svg',
  },
  {
    id: 4,
    communityName: 'Heart Health Network',
    timestamp: '3 days ago',
    communityImg: '/icons/communityCardimg.svg',
  },
  {
    id: 5,
    communityName: 'Mental Health Alliance',
    timestamp: '12 hours ago',
    communityImg: '/icons/communityCardimg.svg',
  },
  {
    id: 6,
    communityName: 'Arthritis Warriors',
    timestamp: '4 days ago',
    communityImg: '/icons/communityCardimg.svg',
  },
  {
    id: 7,
    communityName: 'Asthma Aid Society',
    timestamp: '6 hours ago',
    communityImg: '/icons/communityCardimg.svg',
  },
  {
    id: 8,
    communityName: 'Allergy Care Forum',
    timestamp: '2 days ago',
    communityImg: '/icons/communityCardimg.svg',
  },
  {
    id: 9,
    communityName: 'Stroke Survivors',
    timestamp: '1 day ago',
    communityImg: '/icons/communityCardimg.svg',
  },
  {
    id: 10,
    communityName: 'COVID-19 Support Group',
    timestamp: '2 days ago',
    communityImg: '/icons/communityCardimg.svg',
  },
];

export default function Community() {
  const useStyles = createStyle();
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const tabResponsiveBreakPoint = useMediaQuery('(max-width: 76.8125em)');
  const mobileResponsiveBreakPoint = useMediaQuery('(max-width: 41.9375em)');
  return (
    <>
      <Header />
      <Container maw="100%" className={classes.container}>
        <Box className={classes.subBodyFlex}>
          <BaseText>Patients Community</BaseText>
          <Button className={classes.button_container} variant="default">
            Create community
          </Button>
        </Box>
        <PageSearchBox num={89} type="communities" />

        <SimpleGrid
          cols={mobileResponsiveBreakPoint ? 1 : tabResponsiveBreakPoint ? 2 : 3}
          mt={30}
          spacing={tabResponsiveBreakPoint ? 40 : 32}
        >
          {communityCardData.map((community) => (
            <Card key={community.id} className={classes.card_container}>
              <Image
                src={community.communityImg}
                alt={community.communityName}
                height="200px"
                width="100%"
                style={{ objectFit: 'cover' }}
              />
              <Flex direction="column" align="center" justify="center" gap={8} mt={32} mb={30}>
                <BaseText fontWeight_variant={700} size={20}>
                  {community.communityName}
                </BaseText>
                <BaseText fontWeight_variant={500} size={16} color={theme.colors.gray[8]}>
                  {community.timestamp}
                </BaseText>
              </Flex>
              <Flex justify="center" align="center" direction="column">
                <Image src={Images.avatarsCommunityGroup} height={32} width={193} />
                <BaseButton style_variant="filled" color_variant="blue" mt="lg">
                  Join now
                </BaseButton>
              </Flex>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
