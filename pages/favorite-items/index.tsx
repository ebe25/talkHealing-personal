import React, { useState } from 'react'
import { Box, Center, Container, Flex, Grid, Loader, Stack, useMantineTheme } from '@mantine/core';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import { createStyle } from './FavoriteItems.style';
import { useStores } from '@/models';
import { Input } from '@/components/elements/Input/Input';
import { translate } from "../../i18n";
import { Images } from '../../public/index';
import Header from '@/components/modules/Header/Header';
import ProductCard from '@/components/modules/Cards/ProductCard/ProductCard';
import { IconSearch } from '@tabler/icons-react';
import { RemoveFavoriteItem } from '@/components/modules/Modals/RemoveFavoriteItem/RemoveFavoriteItem';
import { useDisclosure } from '@mantine/hooks';
import NoDataFound from '@/components/modules/NoDataFound/NoDataFound';
import Footer from '@/components/modules/Footer/Footer';

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

export const FavoriteItems = () => {
    const useStyles = createStyle()
    const { classes } = useStyles();
    const { i18nStore } = useStores();
    const theme = useMantineTheme();
    const [searchText, setSearchText] = useState<string>("");
    const [productName, setProductName] = useState<number>(-1);
    const [opened, handlers] = useDisclosure(false);

    let productNameFilter = productCardData.filter((element: any) => {
        if (element.ProductName.toLowerCase().includes(searchText.toLowerCase())) {
            return element
        }
    })


    const handleRemoveItem = (item: any) => {
        handlers.open()
        setProductName(item)
    }

    const removeProduct = () => {
        if (productName != -1) {
            productCardData.splice(productName, 1)
        }
    }

    return (
        <Container maw='100%' p={0} m={0}>
            <Header />
            <Box className={classes.faqContainer}>
                <Flex justify={"space-between"} wrap={"wrap"} gap={20}>
                    <BaseText
                        style={typography.headings[i18nStore.getCurrentLanguage()].h5}
                        txtkey={"favoriteItems.heading"} />
                    <Input
                        h={'44px'}
                        w={"340px"}
                        variant={'filled'}
                        radius={"8px"}
                        component={'input'}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder={`${translate('favoriteItems.searchFavoriteItems')}`}
                        style_variant={"inputText1"}
                        icon={<IconSearch />}
                    />
                </Flex>
                <Grid mt={20}>
                    {productNameFilter.length ?
                        (productNameFilter.map((item, id) => (
                            <Grid.Col key={id} xl={2} lg={3} md={3} sm={4} span={6}>
                                <Stack align="center">
                                    <ProductCard item={item} id={id} handleRemoveItem={handleRemoveItem} favoriteItemsImage={Images.selected_bookmark_icon} />
                                </Stack>
                            </Grid.Col>
                        ))) :
                        (<Flex w={"100%"} justify={"center"}>
                            <NoDataFound />
                        </Flex>)
                    }
                </Grid >
            </Box>
            <RemoveFavoriteItem opened={opened} onClose={handlers.close} removeProduct={removeProduct} />
            <Footer />
        </Container>
    )
}

export default FavoriteItems;