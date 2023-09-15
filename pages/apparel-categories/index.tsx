import { useState } from 'react';
import { Box, Image, Flex, Center, Button, Container, Divider } from '@mantine/core';
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
import Categories from '@/components/modules/Categories/Categories';
import { Carousel } from '@mantine/carousel';

const CarouselmultipleIamgeData = [
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

const ProductSectionsCard = [
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
        "ProductName": "Product name lorem ipsum dolor sit amet",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    }
]

const productName = [
    { productName: 'T-shirt & tanks', ProductDetails: ProductSectionsCard },
    { productName: 'Shirts & polos', ProductDetails: ProductSectionsCard },
    { productName: 'Hoodies & jumpers', ProductDetails: ProductSectionsCard },
    { productName: 'Cardigans', ProductDetails: ProductSectionsCard },
]

export default function ApparelCategories() {
    const theme = useMantineTheme();
    const { i18nStore, userStore } = useStores();
    const [categorie, setCategorie] = useState(false);
    const useStyles = createStyle();
    const { classes } = useStyles();
    const [searchText, setSearchText] = useState<string>("");
    const [buttonNumber, setButtonNumber] = useState<number>();
    const [productSelect, setProductSelect] = useState<string>("");

    const handleCategorie = () => {
        setCategorie(!categorie);
    };

    const handleSearchText = (value: any) => {
        let name = value.toLowerCase();
        setSearchText(name);
    };

    const handleProductSelect = (name: any) => {
        setProductSelect(name);
    };

    const handleSeeMoreClick = (value: any) => {
        setButtonNumber(value);
    };

    const CarouselBox = (props: { CarouselmultipleIamgeData: any }) => (
        <Carousel
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
            {props.CarouselmultipleIamgeData.map((item: any, id: any) => (
                <Carousel.Slide key={id} classNames={classes.crouselSlide}>
                    <Box onClick={() => handleProductSelect(item.name)} className={classes.slideBox}>
                        <Image src={item.Image} width={"66px"} />
                        <BaseText>{item.name}</BaseText>
                    </Box>
                </Carousel.Slide>
            ))}
        </Carousel>
    )

    return (
        <Container className={classes.container}>
            <Header handleCategorie={handleCategorie} categorie={categorie} handleSearchText={handleSearchText} />
            {categorie ? <Categories /> : null}
            <Flex onClick={() => setCategorie(false)} className={classes.homePage}>
                <Box className={classes.apparelIcon}>
                    <Image src={Images.apparel_icon} />
                    <BaseText className={classes.heading} txtkey={"apparelCategories.heading"} />
                </Box>
                <CarouselBox CarouselmultipleIamgeData={CarouselmultipleIamgeData} />
                {productName.filter((element: any) => {
                    if (element.productName.includes(productSelect)) {
                        return element
                    }
                }).map((value: any, index: any) => (
                    <Box key={index}>
                        <Flex justify={"space-between"}>
                            <BaseText
                                style={typography.headings[i18nStore.getCurrentLanguage()].h3}
                            >{value.productName}</BaseText>
                            {buttonNumber != index ? (
                                <BaseButton w={140} style_variant="outline" color_variant="gray">
                                    <BaseText
                                        onClick={() => handleSeeMoreClick(index)}
                                        c={theme.colors.blue[8]} style={typography.paragraph[i18nStore.getCurrentLanguage()].p1}
                                        txtkey={'homePage.seeMore'} />
                                </BaseButton>) : null}
                        </Flex>
                        <Flex className={classes.ProductSectionsCard}>
                            {
                                value.ProductDetails.filter((element: any) => {
                                    if (element.ProductName.toLowerCase().includes(searchText)) {
                                        return element
                                    }
                                }).map((item: any, id: any) => (
                                    <Box key={id} style={{ display: (buttonNumber == index || id < 6) ? 'block' : 'none' }}>
                                        <ProductCard item={item} />
                                    </Box>
                                ))
                            }
                        </Flex>
                    </Box>
                ))}
                <Divider my="xs" />
            </Flex>
            <Footer />
        </Container>
    );
}