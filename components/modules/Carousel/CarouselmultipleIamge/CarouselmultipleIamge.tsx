import React from 'react'
import { Flex, Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { createStyle } from "./CarouselmultipleIamge.style";


function CarouselmultipleIamge(props: { CarouselmultipleIamgeData: any }) {
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
                {props.CarouselmultipleIamgeData.map((item: any, id: any) => (
                    <Carousel.Slide key={id} classNames={classes.crouselSlide}>
                        <Flex className={classes.slideBox}>
                            <Image src={item.Image} width={"20px"} />
                        </Flex>
                    </Carousel.Slide>
                ))}
            </Carousel>
        </>
    )
}

export default CarouselmultipleIamge