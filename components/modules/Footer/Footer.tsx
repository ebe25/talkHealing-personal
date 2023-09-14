import React from 'react'
import { Flex, Image, Box } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { Images } from '../../../public/index';
import { createStyle } from "./Footer.style";
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { useStores } from '@/models';

function Footer() {
    const theme = useMantineTheme();
    const { i18nStore, userStore } = useStores();
    const useStyles = createStyle();
    const { classes } = useStyles();
    return (
        <Flex className={classes.containerBox}>
            <Flex className={classes.containerfirst}>
                <Image src={Images.logo_blue} width={102} height={26} />
                <Flex className={classes.logoBox}>
                    <Flex gap={16}>
                        <Flex className={classes.avatar}>f</Flex>
                        <Flex className={classes.avatar}>
                            <Image src={Images.instagram_icon} mt={6} width={14} height={14} />
                        </Flex>
                        <Flex className={classes.avatar}>
                            <Image src={Images.twitter_logo} mt={6} width={14} height={14} />
                        </Flex>
                    </Flex>
                    <BaseText className={classes.copyrightName} txtkey={"footer.copyrightName"} />
                </Flex>
            </Flex>
            <Box className={classes.containerSecond}>
                <BaseText className={classes.cursor} txtkey={"footer.text1"} />
                <BaseText className={classes.cursor} txtkey={"footer.text2"} />
                <BaseText className={classes.cursor} txtkey={"footer.text3"} />
                <BaseText className={classes.cursor} txtkey={"footer.text4"} />
            </Box>
            <Box className={classes.containerSecond}>
                <BaseText className={classes.cursor} txtkey={"footer.text5"} />
                <BaseText className={classes.cursor} txtkey={"footer.text6"} />
                <BaseText className={classes.cursor} txtkey={"footer.text7"} />
                <BaseText className={classes.cursor} txtkey={"footer.text8"} />
            </Box>
            <Box className={classes.logoImage}>
                <Image src={Images.page_logo} />
            </Box>
        </Flex>
    )
}

export default Footer