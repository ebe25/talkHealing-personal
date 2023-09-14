import React from 'react'
import { Flex, Image, Box, Grid, Divider, ScrollArea } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { Images } from '../../../public/index';
import { createStyle } from "./Categories.style";
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import { useStores } from '@/models';

const apparels = [
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
    const useStyles = createStyle();
    const { classes } = useStyles();

    const Options = (props: { text: any }) => (
        <Flex className={classes.Options} >
            <BaseText c={theme.colors.cyan[9]} style={typography.buttonText[i18nStore.getCurrentLanguage()].b3} txtkey={props.text} />
            <Image mt={5} src={Images.right_arrow_icon} width={4} height={7} />
        </Flex>
    )

    return (
        <Box className={classes.containerBox}>
            <ScrollArea h={440}>
                <Flex justify={"space-between"}>
                    <Box w={150}>
                        <Flex gap={10}>
                            <Image src={Images.gallery_item} width={32} height={32} />
                            <BaseText mt={5} style={typography.buttonText[i18nStore.getCurrentLanguage()].b1} txtkey={"Categories.apparels"} />
                        </Flex>
                        {
                            apparels.map((item, id) => (
                                <Flex mt={10} gap={10} key={id}>
                                    <Image src={item.Img} width={32} height={32} />
                                    <BaseText c={theme.colors.cyan[9]} mt={5} style={typography.buttonText[i18nStore.getCurrentLanguage()].b3}>{item.CategoryName}</BaseText>
                                </Flex>
                            ))}
                    </Box>
                    <Divider orientation="vertical" />
                    <Box w={192} p={"0px 25px 0px 0px"}>
                        <Box>
                            <BaseText style={typography.buttonText[i18nStore.getCurrentLanguage()].b1} txtkey={"Categories.tops"} />
                            <Options text={"Categories.tSTanks"} />
                            <Options text={"Categories.shirts"} />
                            <Options text={"Categories.hoodies"} />
                            <Options text={"Categories.cardigans"} />
                            <Options text={"Categories.jacket"} />
                        </Box>
                        <Box mt={20}>
                            <BaseText style={typography.buttonText[i18nStore.getCurrentLanguage()].b1} txtkey={"Categories.bottoms"} />
                            <Options text={"Categories.tSTanks"} />
                            <Options text={"Categories.shirts"} />
                            <Options text={"Categories.hoodies"} />
                            <Options text={"Categories.cardigans"} />
                            <Options text={"Categories.jacket"} />
                        </Box>
                        <Box mt={20}>
                            <BaseText style={typography.buttonText[i18nStore.getCurrentLanguage()].b1} txtkey={"Categories.bottoms"} />
                            <Options text={"Categories.tSTanks"} />
                            <Options text={"Categories.shirts"} />
                            <Options text={"Categories.hoodies"} />
                            <Options text={"Categories.cardigans"} />
                            <Options text={"Categories.jacket"} />
                        </Box>
                    </Box>
                </Flex>
            </ScrollArea>
        </Box>
    )
}

export default Categories