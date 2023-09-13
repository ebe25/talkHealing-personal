import { useState } from 'react';
import { Box, Stack, Grid, Image, Flex, Center, Button, Container } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import { useStores } from '@/models';
import CarouselWithImage from '@/components/modules/Carousel/CarouselWithImages/CarouselWithImage';
import CarouselmultipleIamge from '@/components/modules/Carousel/CarouselmultipleIamge/CarouselmultipleIamge';
import ProductCard from '@/components/modules/Cards/ProductCard/ProductCard';
import { Images } from '../../public/index';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import Header from '@/components/modules/Header/Header';

const ProductCardData = [
  {
    "ProductName": "Product name lorem ipsum dolor sit amet",
    "Price": "78.25",
    "Company": "Nike",
    "Location": "Bangalore",
    "Rating": "4.6",
    "Image": Images.profile_image
  },
  {
    "ProductName": "Product name lorem ipsum dolor sit amet",
    "Price": "78.25",
    "Company": "Nike",
    "Location": "Bangalore",
    "Rating": "4.6",
    "Image": ""
  },
  {
    "ProductName": "Product name lorem ipsum dolor sit amet",
    "Price": "78.25",
    "Company": "Nike",
    "Location": "Bangalore",
    "Rating": "4.6",
    "Image": ""
  },
  {
    "ProductName": "Product name lorem ipsum dolor sit amet",
    "Price": "78.25",
    "Company": "Nike",
    "Location": "Bangalore",
    "Rating": "4.6",
    "Image": ""
  },
  {
    "ProductName": "Product name lorem ipsum dolor sit amet",
    "Price": "78.25",
    "Company": "Nike",
    "Location": "Bangalore",
    "Rating": "4.6",
    "Image": ""
  },
  {
    "ProductName": "Product name lorem ipsum dolor sit amet",
    "Price": "78.25",
    "Company": "Nike",
    "Location": "Bangalore",
    "Rating": "4.6",
    "Image": ""
  },
  {
    "ProductName": "Product name lorem ipsum dolor sit amet",
    "Price": "78.25",
    "Company": "Nike",
    "Location": "Bangalore",
    "Rating": "4.6",
    "Image": ""
  },
  {
    "ProductName": "Product name lorem ipsum dolor sit amet",
    "Price": "78.25",
    "Company": "Nike",
    "Location": "Bangalore",
    "Rating": "4.6",
    "Image": ""
  },
  {
    "ProductName": "Product name lorem ipsum dolor sit amet",
    "Price": "78.25",
    "Company": "Nike",
    "Location": "Bangalore",
    "Rating": "4.6",
    "Image": ""
  },
  {
    "ProductName": "Product name lorem ipsum dolor sit amet",
    "Price": "78.25",
    "Company": "Nike",
    "Location": "Bangalore",
    "Rating": "4.6",
    "Image": ""
  },
  {
    "ProductName": "Product name lorem ipsum dolor sit amet",
    "Price": "78.25",
    "Company": "Nike",
    "Location": "Bangalore",
    "Rating": "4.6",
    "Image": ""
  },
  {
    "ProductName": "Product name lorem ipsum dolor sit amet",
    "Price": "78.25",
    "Company": "Nike",
    "Location": "Bangalore",
    "Rating": "4.6",
    "Image": ""
  },
  {
    "ProductName": "Product name lorem ipsum dolor sit amet",
    "Price": "78.25",
    "Company": "Nike",
    "Location": "Bangalore",
    "Rating": "4.6",
    "Image": ""
  },
  {
    "ProductName": "Product name lorem ipsum dolor sit amet",
    "Price": "78.25",
    "Company": "Nike",
    "Location": "Bangalore",
    "Rating": "4.6",
    "Image": Images.profile_image
  },
  {
    "ProductName": "Product name lorem ipsum dolor sit amet",
    "Price": "78.25",
    "Company": "Nike",
    "Location": "Bangalore",
    "Rating": "4.6",
    "Image": ""
  }
]

const ProductSectionsCard = [
  {
    "ProductName": "Product name lorem ipsum dolor sit amet",
    "Price": "78.25",
    "Company": "Nike",
    "Location": "Bangalore",
    "Rating": "4.6",
    "Image": Images.profile_image
  },
  {
    "ProductName": "Product name lorem ipsum dolor sit amet",
    "Price": "78.25",
    "Company": "Nike",
    "Location": "Bangalore",
    "Rating": "4.6",
    "Image": ""
  },
  {
    "ProductName": "Product name lorem ipsum dolor sit amet",
    "Price": "78.25",
    "Company": "Nike",
    "Location": "Bangalore",
    "Rating": "4.6",
    "Image": ""
  },
  {
    "ProductName": "Product name lorem ipsum dolor sit amet",
    "Price": "78.25",
    "Company": "Nike",
    "Location": "Bangalore",
    "Rating": "4.6",
    "Image": ""
  },
  {
    "ProductName": "Product name lorem ipsum dolor sit amet",
    "Price": "78.25",
    "Company": "Nike",
    "Location": "Bangalore",
    "Rating": "4.6",
    "Image": ""
  },
  {
    "ProductName": "Product name lorem ipsum dolor sit amet",
    "Price": "78.25",
    "Company": "Nike",
    "Location": "Bangalore",
    "Rating": "4.6",
    "Image": ""
  }
]

export default function Home() {
  const theme = useMantineTheme();
  const { i18nStore, userStore } = useStores();
  const [items, setItems] = useState(ProductCardData);
  const [showAll, setShowAll] = useState(false);

  const handleSeeMoreClick = () => {
    setShowAll(!showAll);
  };

  return (
    <Container
      maw={"100%"}
      m={0}
      p={0}
    >
      <Header />
      <Flex direction="column" gap={40}
        style={{ padding: "50px 100px" }}>
        <CarouselWithImage />
        <Grid>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, id) => (
            <Grid.Col key={id} lg={2} md={3} sm={4} xs={6}>
              <Stack align="center">
                <Image width={66} height={66} src={Images.gallery_item} />
                <BaseText
                  style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}
                  txtkey={"homePage.categoryName"} />
              </Stack>
            </Grid.Col>
          ))}
        </Grid>
        <CarouselmultipleIamge />
        <Box>
          <Center>
            <BaseText style={typography.headings[i18nStore.getCurrentLanguage()].h3} txtkey={"homePage.productSectionsName"} />
          </Center>
          <Flex justify={"space-between"} mt={"20px"} gap={30} wrap={"wrap"}>
            {
              items.map((item, id) => (
                <Box key={id} style={{ display: (showAll || id < 10) ? 'block' : 'none' }}>
                  <ProductCard item={item} />
                </Box>
              ))}
          </Flex>
          <Center>
            {!showAll ? (
              <BaseButton w={140} mt={20} style_variant="filled" color_variant="blue" onClick={handleSeeMoreClick}>
                <BaseText style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}
                  txtkey={'homePage.seeMore'} />
              </BaseButton>
            ) : <BaseButton w={140} mt={20} style_variant="filled" color_variant="blue" onClick={handleSeeMoreClick}>
              <BaseText style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}
                txtkey={'homePage.seeLess'} />
            </BaseButton>}
          </Center>
        </Box>
        {[1, 2, 3].map((item, id) => (
          <Box key={id}>
            <Flex justify={"space-between"}>
              <BaseText
                style={typography.headings[i18nStore.getCurrentLanguage()].h3}
                txtkey={'homePage.productSectionsName'} />
              <BaseButton w={140} style_variant="outline" color_variant="gray">
                <BaseText c={theme.colors.blue[8]} style={typography.paragraph[i18nStore.getCurrentLanguage()].p1}
                  txtkey={'homePage.seeMore'} />
              </BaseButton>
            </Flex>
            <Flex justify={"space-between"} mt={"20px"} gap={10} wrap={"wrap"}>
              {
                ProductSectionsCard.map((item, id) => (
                  <Box key={id}>
                    <ProductCard item={item} />
                  </Box>
                ))
              }
            </Flex>
          </Box>
        ))}
      </Flex>
    </Container>
  );
}