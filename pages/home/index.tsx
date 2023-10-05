import { Image, Flex, Container } from '@mantine/core';

import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import { useStores } from '@/models';
import { Images } from '../../public/index';

import Header from '@/components/modules/Header/Header';
import { createStyle } from './Home.style';

export default function Home() {
  // const theme = useMantineTheme();
  const { i18nStore } = useStores();

  const useStyles = createStyle();
  const { classes } = useStyles();

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
      <Container maw={'100%'}>
        <Flex justify={'space-around'} align={'center'}>
          <Flex direction={'column'} justify={'center'} align={'flex-start'} gap={'17px'}>
            <BaseText
              color="black"
              style={typography.headings[i18nStore.getCurrentLanguage()].h3}
              fontWeight_variant={700}
            >
              Lorem Ipsum Dolor Sit Amet
            </BaseText>
            <BaseText
              color="black"
              style={(typography.headings[i18nStore.getCurrentLanguage()].h3, { opacity: 0.7 })}
              fontWeight_variant={400}
            >
              Lorem Ipsum Dolor Sit Amet
            </BaseText>
          </Flex>

          <Image
            className={classes.rightSide}
            src={Images.public_health}
            height={'500px'}
            width={'500px'}
          />

          {/** <Box className={classes.galleryItemBoxForMobile}>
         
          <CarouselBoxMobile data={galleryItemData} />
        </Box>*/}
        </Flex>
      </Container>
    </Container>
  );
}
