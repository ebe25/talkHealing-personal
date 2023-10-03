import { useState } from 'react';
import { Box, Stack, Grid, Image, Flex, Center, Container, Divider, Text } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import { useStores } from '@/models';
import HeroCarousal from '@/components/modules/Carousel/heroCarousal/HeroCarousal';
import BrandLogoCarousal from '@/components/modules/Carousel/brandLogoCarousal/BrandLogoCarousal';
import ProductCard from '@/components/modules/Cards/ProductCard/ProductCard';
import { Images } from '../../public/index';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import Header from '@/components/modules/Header/Header';
import { createStyle } from './Home.style';
import Footer from '@/components/modules/Footer/Footer';
import { useRouter } from 'next/router';
import { Carousel } from '@mantine/carousel';

const productCardData = [
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Bhawesh',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Hp',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'اسم المنتج لوريم إيبسوم دولور سيت أميت',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
];

const carouselData = [
  {
    Image: Images.carousel_image,
  },
  {
    Image: Images.carousel_image,
  },
  {
    Image: Images.carousel_image,
  },
  {
    Image: Images.page_logo,
  },
];

const carouselMultipleIamgeData = [
  {
    Image: Images.facebook_icon,
  },
  {
    Image: Images.google_icon,
  },
  {
    Image: Images.twitter_icon,
  },
  {
    Image: Images.instagram_icon,
  },
  {
    Image: Images.facebook_icon,
  },
  {
    Image: Images.google_icon,
  },
  {
    Image: Images.twitter_icon,
  },
  {
    Image: Images.instagram_icon,
  },
  {
    Image: Images.facebook_icon,
  },
  {
    Image: Images.google_icon,
  },
  {
    Image: Images.twitter_icon,
  },
  {
    Image: Images.instagram_icon,
  },
  {
    Image: Images.facebook_icon,
  },
  {
    Image: Images.google_icon,
  },
  {
    Image: Images.twitter_icon,
  },
  {
    Image: Images.instagram_icon,
  },
];

const galleryItemData = [
  {
    Image: Images.gallery_item,
    name: 'Apparel Category',
  },
  {
    Image: Images.gallery_item,
    name: 'Category Name',
  },
  {
    Image: Images.gallery_item,
    name: 'Category Name',
  },
  {
    Image: Images.gallery_item,
    name: 'Category Name',
  },
  {
    Image: Images.gallery_item,
    name: 'Category Name',
  },
  {
    Image: Images.gallery_item,
    name: 'Category Name',
  },
  {
    Image: Images.gallery_item,
    name: 'Category Name',
  },
  {
    Image: Images.gallery_item,
    name: 'Category Name',
  },
  {
    Image: Images.gallery_item,
    name: 'Category Name',
  },
  {
    Image: Images.gallery_item,
    name: 'Category Name',
  },
  {
    Image: Images.gallery_item,
    name: 'Category Name',
  },
  {
    Image: Images.gallery_item,
    name: 'Category Name',
  },
];

const productSectionsCard = [
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
  {
    ProductName: 'Product name lorem ipsum dolor sit amet',
    Price: '78.25',
    Company: 'Nike',
    Location: 'Bangalore',
    Rating: '4.6',
    Image: Images.product_image,
  },
];

const productName = [
  { productName: 'homePage.productSectionsName', ProductDetails: productSectionsCard },
  { productName: 'homePage.productSectionsName', ProductDetails: productSectionsCard },
  { productName: 'homePage.productSectionsName', ProductDetails: productSectionsCard },
];

export default function Home() {
  // const theme = useMantineTheme();
  const { i18nStore } = useStores();
  const [showAll, setShowAll] = useState(false);
  const useStyles = createStyle();
  const { classes } = useStyles();
  const router = useRouter();

  const CategoriesPage = (item: any) => {
    if (item == 'Apparel Category') router.push('/apparel-categories');
  };

  const handleSeeMoreClick = () => {
    setShowAll(!showAll);
  };

  const CarouselBoxMobile = (props: { data: any }) => (
    <Carousel
      dir={'ltr'}
      height={100}
      slideSize="13%"
      loop
      align="start"
      breakpoints={[
        { maxWidth: 'lg', slideSize: '14%', slideGap: '8px' },
        { maxWidth: 'md', slideSize: '17%', slideGap: '6px' },
        { maxWidth: 'sm', slideSize: '20%', slideGap: '4px' },
        { maxWidth: 'xs', slideSize: '50%', slideGap: '4px' },
      ]}
      classNames={{
        control: classes.control,
      }}
    >
      {props.data.map((item: any, id: any) => (
        <Carousel.Slide key={id} classNames={classes.crouselSlide}>
          <Box className={classes.slideBox}>
            <Image onClick={() => CategoriesPage(item.name)} src={item.Image} width={'66px'} />
            <BaseText onClick={() => CategoriesPage(item.name)}>{item.name}</BaseText>
          </Box>
        </Carousel.Slide>
      ))}
    </Carousel>
  );

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
      <Container  maw={'100%'}>
        <Flex justify={'space-between'} align={'center'} >
          <Box className={classes.leftSide}>
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
          </Box>

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
