import { useState } from 'react';
import { Box, Image, Flex, Center, Container, Divider, Grid, Stack } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import { useStores } from '@/models';
import ProductCard from '@/components/modules/Cards/ProductCard/ProductCard';
import { Images } from '../../public/index';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import Header from '@/components/modules/Header/Header';
import { createStyle } from "./ApparelCategories.style";
import Footer from '@/components/modules/Footer/Footer';
import { Carousel } from '@mantine/carousel';
import NoDataFound from '@/components/modules/NoDataFound/NoDataFound';

const carouselMultipleIamgeData = [
    {
        Image: Images.gallery_item,
        name: "T-shirt & tanks"
    },
    {
        Image: Images.gallery_item,
        name: "Shirts & polos"
    },
    {
        Image: Images.gallery_item,
        name: "Hoodies & jumpers"
    },
    {
        Image: Images.gallery_item,
        name: "Cardigans"
    },
    {
        Image: Images.gallery_item,
        name: "Jacket & blazzers"
    },
    {
        Image: Images.gallery_item,
        name: "Shorts"
    },
    {
        Image: Images.gallery_item,
        name: "Jogger & sweatpants"
    },
    {
        Image: Images.gallery_item,
        name: "Tights"
    },
    {
        Image: Images.gallery_item,
        name: "yo yo"
    }
]

const productSectionsCard = [
    {
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "hp",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    }
]

const productName = [
    { productName: 'T-shirt & tanks', ProductDetails: productSectionsCard },
    { productName: 'Shirts & polos', ProductDetails: productSectionsCard },
    { productName: 'Hoodies & jumpers', ProductDetails: productSectionsCard },
    { productName: 'Cardigans', ProductDetails: productSectionsCard },
]

export default function ApparelCategories() {
    const theme = useMantineTheme();
    const { i18nStore, userStore } = useStores();
    const useStyles = createStyle();
    const { classes } = useStyles();
    const [seeMoreButtton, setSeeMoreButtton] = useState<number>();
    const [productSelect, setProductSelect] = useState<string>("");

    const handleProductSelect = (name: any) => {
        setProductSelect(name);
    };

    const handleSeeMoreClick = (value: any) => {
        setSeeMoreButtton(value);
    };

    const CarouselBox = (props: { carouselMultipleIamgeData: any }) => (
        <Carousel
            dir={"ltr"}
            height={100}
            slideSize="13%"
            loop
            align="start"
            breakpoints={[
                { maxWidth: 'lg', slideSize: '14%', slideGap: "8px" },
                { maxWidth: 'md', slideSize: '17%', slideGap: "6px" },
                { maxWidth: 'sm', slideSize: '20%', slideGap: "4px" },
                { maxWidth: 'xs', slideSize: '50%', slideGap: "4px" },
            ]}
            classNames={{
                control: classes.control
            }}
        >
            {props.carouselMultipleIamgeData.map((item: any, id: any) => (
                <Carousel.Slide key={id} classNames={classes.crouselSlide}>
                    <Box onClick={() => handleProductSelect(item.name)} className={classes.slideBox}>
                        <Image src={item.Image} width={"66px"} />
                        <BaseText>{item.name}</BaseText>
                    </Box>
                </Carousel.Slide>
            ))}
        </Carousel>
    )

    let productNameFilter = productName.filter((element: any) => {
        if (element.productName.includes(productSelect)) {
            return element
        }
    })

    const AllProductsNameFilter = () => (
        <>{
            productNameFilter.map((value: any, index: any) => (
                <Box key={index}>
                    <Flex className={classes.productHeadings}>
                        <BaseText
                            style={typography.headings[i18nStore.getCurrentLanguage()].h3}
                        >{value.productName}</BaseText>
                    </Flex>
                    <Grid mt={20}>
                        {value.ProductDetails.map((item: any, id: any) => (
                            <Grid.Col style={{ display: (seeMoreButtton == index || id < 6) ? 'block' : 'none' }}
                                key={id} xl={2} lg={3} md={3} sm={4} span={6}>
                                <Stack align="center">
                                    <ProductCard item={item} />
                                </Stack>
                            </Grid.Col>
                        ))}
                    </Grid>
                    {seeMoreButtton != index ? (
                        <Center>
                            <BaseButton w={140} mt={20} style_variant="filled" color_variant="blue">
                                <BaseText
                                    onClick={() => handleSeeMoreClick(index)}
                                    style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}
                                    txtkey={'homePage.seeMore'} />
                            </BaseButton>
                        </Center>) : null}
                </Box>
            ))
        }</>
    )

    return (
        <Container className={classes.container}>
            <Header />
            <Flex className={classes.homePage}>
                <Box className={classes.apparelIcon}>
                    <Image src={Images.apparel_icon} />
                    <BaseText className={classes.heading} txtkey={"apparelCategories.heading"} />
                </Box>
                <CarouselBox carouselMultipleIamgeData={carouselMultipleIamgeData} />
                {productNameFilter.length ?
                    <AllProductsNameFilter />
                    :
                    (<Center><NoDataFound /></Center>)
                }
                <Divider my="xs" />
            </Flex>
            <Footer />
        </Container>
    );
}