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
    "Tops", "Bottoms", "Bottoms", "Bottoms"
]

const CategoryData = [
    {
        "CategoryName": "Apparels",
        "Img": Images.gallery_item
    },
    {
        "CategoryName": "Category name",
        "Img": Images.gallery_item
    },
    {
        "CategoryName": "Category name",
        "Img": Images.gallery_item
    },
    {
        "CategoryName": "Category name",
        "Img": Images.gallery_item
    },
    {
        "CategoryName": "Category name",
        "Img": Images.gallery_item
    },
    {
        "CategoryName": "Category name",
        "Img": Images.gallery_item
    },
    {
        "CategoryName": "Category name",
        "Img": Images.gallery_item
    },
    {
        "CategoryName": "Category name",
        "Img": Images.gallery_item
    },
    {
        "CategoryName": "Category name",
        "Img": Images.gallery_item
    }
]


function Categories() {
    const theme = useMantineTheme();
    const { i18nStore, userStore } = useStores();
    const [active, setActive] = useState(false);
    const [value, setValue] = useState<number>();
    const useStyles = createStyle();
    const { classes } = useStyles();
    const router = useRouter();

    const CategoriesPage = (item: any) => {
        if (item == "Tops")
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
                    <Box w={192} p={"0px 25px 0px 0px"}>
                        {value == 0 ? (
                            apparelsData.map((item, id) => (
                                <Box mt={20} key={id}>
                                    <Flex className={classes.Options}
                                        onClick={() => CategoriesPage(item)}>
                                        <BaseText c={theme.colors.cyan[9]} style={typography.buttonText[i18nStore.getCurrentLanguage()].b3} >{item}</BaseText>
                                        <Image mt={5} src={Images.right_arrow_icon} width={4} height={7} />
                                    </Flex>
                                </Box>
                            ))) : null}
                    </Box>
                </Flex>
            </ScrollArea>
        </Box>
    )
}

export default Categories