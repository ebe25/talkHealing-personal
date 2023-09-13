import React from 'react'
import { Box, Flex, Image, Center } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { Images } from '../../../../public/index';
import { useStores } from '@/models';
import { createStyle } from "./ProductCard.style"

function ProductCard(props: { item: any }) {
    const theme = useMantineTheme();
    const { i18nStore, userStore } = useStores();
    const useStyles = createStyle();
    const { classes } = useStyles();

    return (
        <Flex direction="column" gap={10} w={200} h={393}>
            <Box className={classes.container}>
                <Flex className={classes.imageBox}>
                    <Image width={17} height={17} src={Images.star_icon} />
                    <BaseText>{props.item.Rating}</BaseText>
                </Flex>
                <Center>
                    <Image width={170} height={200} src={props.item.Image} />
                </Center>
            </Box>
            <Flex gap={10}>
                <Flex className={classes.companyName}>
                    <BaseText>{props.item.Company}</BaseText>
                </Flex>
                <Flex className={classes.location}>
                    <Image width={9} height={12} src={Images.location_icon} />
                    <BaseText>{props.item.Location}</BaseText>
                </Flex>
            </Flex>
            <BaseText>
                {props.item.ProductName}
            </BaseText>
            <Flex justify={"space-between"}>
                <BaseText>${props.item.Price}</BaseText>
                <Image width={15} height={20} src={Images.vector} />
            </Flex>
        </Flex>
    )
}

export default ProductCard