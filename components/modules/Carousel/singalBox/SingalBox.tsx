import React from 'react'
import { Flex, Image, Grid, Button, Box, Center, useMantineTheme } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { createStyle } from "./SingalBox.style"
import { useStores } from '@/models';

function SingalBox(props: { carouselData: any }) {
    const theme = useMantineTheme();
    const useStyles = createStyle();
    const { classes } = useStyles();
    const { i18nStore } = useStores();

    return (
        <>
            <Carousel
                dir={'ltr'}
                maw="95%"
                mx="auto"
                loop
                withIndicators
                height={380}
                classNames={{
                    indicator: classes.indicator,
                    control: classes.control
                }}
            >
                {props.carouselData.map((item: any, id: any) => (
                    <Carousel.Slide key={id} classNames={classes.crouselSlide}>
                        <Flex dir={i18nStore.isRTL ? 'rtl' : 'ltr'} className={classes.slideBox}>
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
                                            <BaseText c={theme.colors.orange[8]} txtkey={"homePage.carousel.buttonText"} />
                                        </Button>
                                    </Box>
                                </Grid.Col>
                                <Grid.Col lg={6} md={6} sm={6} xs={12}>
                                    <Center>
                                        <Box className={classes.carousel_image}>
                                            <Image maw={426} src={item.Image} />
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

export default SingalBox