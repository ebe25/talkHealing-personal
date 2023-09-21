import React, { useState } from 'react'
import { Flex, Image, Box, Grid, Divider, ScrollArea } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { Images } from '../../../public/index';
import { createStyle } from "./Categories.style";
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import { useStores } from '@/models';
import { useRouter } from 'next/router';

const apparelsData = [
    {
        id: 0,
        "name": ["T-shirt & tanks", "Shirts & polos", "Hoodies & jumpers", "Cardigans"]
    },
    {
        id: 1,
        "name": ["T-shirt", "Shirts", "Hoodie", "Cardigans"]
    },
    {
        id: 2,
        "name": []
    },
    {
        id: 3,
        "name": []
    },
]

const CategoryData = [
    {
        "CategoryName": "Apparels",
        "Img": Images.gallery_item,
        id: 0
    },
    {
        "CategoryName": "Category name",
        "Img": Images.gallery_item,
        id: 1
    },
    {
        "CategoryName": "Category name",
        "Img": Images.gallery_item,
        id: 2
    },
    {
        "CategoryName": "Category name",
        "Img": Images.gallery_item,
        id: 3
    },
    {
        "CategoryName": "Category name",
        "Img": Images.gallery_item,
        id: 4
    },
    {
        "CategoryName": "Category name",
        "Img": Images.gallery_item,
        id: 5
    },
    {
        "CategoryName": "Category name",
        "Img": Images.gallery_item,
        id: 6
    },
    {
        "CategoryName": "Category name",
        "Img": Images.gallery_item,
        id: 7
    },
    {
        "CategoryName": "Category name",
        "Img": Images.gallery_item,
        id: 8
    }
]


function Categories() {
    const theme = useMantineTheme();
    const { i18nStore, userStore } = useStores();
    const [active, setActive] = useState(false);
    const [value, setValue] = useState<number>(0);
    const useStyles = createStyle();
    const { classes } = useStyles();
    const router = useRouter();

    const CategoriesPage = () => {
        router.push('/apparel-categories')
    }

    const ActiveText = (item: any) => {
        setValue(item);
        setActive(true);
    }

    return (
        <Box className={classes.containerBox}>
            <ScrollArea h={440}>
                <Flex justify={"space-between"}>
                    <Box w={150}>
                        {
                            CategoryData.map((item, id) => (
                                <Flex mt={10} gap={10} key={id}>
                                    <Image src={item.Img} width={32} height={32} />
                                    <BaseText onClick={() => ActiveText(id)} className={classes.cursor}
                                        c={active ? '' : theme.colors.cyan[9]} mt={5}
                                        style={value == id ? typography.buttonText[i18nStore.getCurrentLanguage()].b1 : typography.buttonText[i18nStore.getCurrentLanguage()].b3}>
                                        {item.CategoryName}</BaseText>
                                </Flex>
                            ))}
                    </Box>
                    <Divider orientation="vertical" />
                    <Box className={classes.optionsBox}>
                        {
                            apparelsData.filter(x => x.id === value).map((item, id) => (
                                <Box mt={20} key={id}>
                                    {item.name.map((elemeny, index) => (
                                        <Flex key={index} className={classes.options}
                                            onClick={() => CategoriesPage()}>
                                            <BaseText className={classes.optionsText} style={typography.buttonText[i18nStore.getCurrentLanguage()].b3} >{elemeny}</BaseText>
                                            <Image mt={5} src={Images.right_arrow_icon} width={4} height={7} />
                                        </Flex>
                                    ))}
                                </Box>
                            ))}
                    </Box>
                </Flex>
            </ScrollArea>
        </Box>
    )
}

export default Categories