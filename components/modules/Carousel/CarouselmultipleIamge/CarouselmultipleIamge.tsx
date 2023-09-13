import React from 'react'
import { Flex, Image } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { Images } from '../../../../public/index';
import { createStyle } from "./CarouselmultipleIamge.style";


function CarouselmultipleIamge() {
    const theme = useMantineTheme();
    const useStyles = createStyle();
    const { classes } = useStyles();
    return (
        <>
            <Carousel
                height={40}
                slideSize="10%"
                loop
                align="start"
                breakpoints={[
                    { maxWidth: 'lg', slideSize: '10%', slideGap: "10px" },
                    { maxWidth: 'md', slideSize: '17%', slideGap: "10px" },
                    { maxWidth: 'sm', slideSize: '20%', slideGap: "4px" },
                    { maxWidth: 'xs', slideSize: '50%', slideGap: "4px" },
                ]}
                classNames={{
                    control: classes.control
                }}
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item, id) => (
                    <Carousel.Slide key={id} classNames={classes.crouselSlide}>
                        <Flex className={classes.slideBox}>
                            <Image src={Images.close_modal_icon} width={"20px"} />
                        </Flex>
                    </Carousel.Slide>
                ))}
            </Carousel>
        </>
    )
}

export default CarouselmultipleIamge