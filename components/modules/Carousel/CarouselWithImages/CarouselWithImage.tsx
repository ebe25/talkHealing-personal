import React from 'react'
import { Flex, Image, Grid, Button, Box, Center } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { Images } from '../../../../public/index';
import { typography } from '@/themes/Mantine/typography';
import { createStyle } from "./CarouselWithImage.style"
import { useStores } from '@/models';

function CarouselWithImage() {
    const theme = useMantineTheme();
    const { i18nStore, userStore } = useStores();
    const useStyles = createStyle();
    const { classes } = useStyles();
    return (
        <>
            <Carousel
                maw="100%"
                mx="auto"
                loop
                withIndicators
                height={380}
                classNames={{
                    indicator: classes.indicator,
                    control: classes.control
                }}
            >
                {[1, 2, 3, 4].map((item, id) => (
                    <Carousel.Slide key={id} classNames={classes.crouselSlide}>
                        <Flex className={classes.slideBox}>
                            <Grid>
                                <Grid.Col lg={6} md={6} sm={6} xs={12}>
                                    <Box>
                                        <BaseText
                                            className={classes.heading}
                                            txtkey={"homePage.carousel.heading"}
                                        />
                                        <BaseText
                                            className={classes.subHeading}
                                            txtkey={"homePage.carousel.subHeading"}
                                        />
                                        <Button className={classes.button} >
                                            <BaseText c={"orange"} txtkey={"homePage.carousel.buttonText"} />
                                        </Button>
                                    </Box>
                                </Grid.Col>
                                <Grid.Col lg={6} md={6} sm={6} xs={12}>
                                    <Center>
                                        <Box className={classes.carousel_image}>
                                            <Image maw={426} src={Images.carousel_image} />
                                        </Box>
                                    </Center>
                                </Grid.Col>
                            </Grid>
                        </Flex>
                    </Carousel.Slide>
                ))}
            </Carousel>
        </>
    )
}

export default CarouselWithImage