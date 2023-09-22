import React, { useState } from 'react'
import { Box, Image, Flex, Center, Button, Container, Grid, Stack } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { useStores } from '@/models';
import ProductCard from '@/components/modules/Cards/ProductCard/ProductCard';
import { Images } from '../../public/index';
import Header from '@/components/modules/Header/Header';
import { createStyle } from "./ProductListing.style";
import Footer from '@/components/modules/Footer/Footer';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import NoDataFound from '@/components/modules/NoDataFound/NoDataFound';

const productCardData = [
    {
        "ProductName": "name lorem ipsum dolor sit amet",
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
        "ProductName": "Nike name lorem ipsum dolor sit amet",
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
        "ProductName": "Bhawesh",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    },
    {
        "ProductName": "Hp",
        "Price": "78.25",
        "Company": "Nike",
        "Location": "Bangalore",
        "Rating": "4.6",
        "Image": Images.shirt_icon
    }
]

export default function ProductListing() {
    const theme = useMantineTheme();
    const useStyles = createStyle();
    const { classes } = useStyles();

    let url = new URL(window.location.href);
    let searchProduct = url.searchParams.get("searchProduct");

    let productNameFilter = productCardData.filter((element: any) => {
        if (element.ProductName.toLowerCase().includes(searchProduct)) {
            return element
        }
    })

    return (
        <Container className={classes.container}>
            <Header />
            <Flex className={classes.homePage}>
                <Flex justify={"space-between"} wrap={"wrap"}>
                    <Flex>
                        <BaseText txtkey={"searchPage.yourSearched"} />
                        <BaseText> : {searchProduct}</BaseText>
                    </Flex>
                    <Flex gap={30}>
                        <Image className={classes.cursor} width={38} height={38} src={Images.box_icon} />
                        <Flex gap={10} mt={5}>
                            <BaseText txtkey={"searchPage.mostRecent"} />
                            <Image className={classes.cursor} mt={3} width={22} height={22} src={Images.sort_icon} />
                        </Flex>
                    </Flex>
                </Flex>
                <Grid mt={20}>
                    {productNameFilter.length ?
                        (productNameFilter.map((item, id) => (
                            <Grid.Col key={id} xl={2} lg={3} md={3} sm={4} span={6}>
                                <Stack align="center">
                                    <ProductCard item={item} />
                                </Stack>
                            </Grid.Col>
                        ))) :
                        (<Flex w={"100%"} justify={"center"}>
                            <NoDataFound />
                        </Flex>)
                    }
                </Grid >
            </Flex >
            <Footer />
        </Container >
    )
} 
