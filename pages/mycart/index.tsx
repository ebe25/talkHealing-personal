// React and next import
import React from 'react'
// mantine component import
import { Container, Flex, Grid, Image } from '@mantine/core'
// styles file import
import { createStyle } from './MyCart.styles'
// internal components import
import { BaseText } from '@/components/elements/BaseText/BaseText'
import { Images } from '@/public'

const MyCart = () => {
    // style function
    const useStyles=createStyle()
    const { classes } = useStyles();

    return (
        <>
            <Container maw={"1000px"} mt={"50px"} >
                <BaseText className={classes.title} txtkey="myCart.heading" />
                <Grid
                    mt={"50px"}
                    m={0}
                >
                    <Grid.Col 
                        xs={12}
                        sm={12}
                        md={8}
                        lg={8}
                        xl={8}
                    >
                        <Flex
                            align={"center"}
                        >
                            <Image
                                src={Images.pebea_icon}
                                alt='Pebea Icon'
                                width={"34px"}
                                height={"34px"}
                            />
                            <BaseText className={classes.subHeading} txtkey="myCart.pebeaSneakers" />
                        </Flex>
                        
                    </Grid.Col>
                    <Grid.Col 
                        xs={12}
                        sm={12}
                        md={4}
                        lg={4}
                        xl={4}
                    >
                        
                    </Grid.Col>

                </Grid>
            </Container>
        </>
    )
}

export default MyCart