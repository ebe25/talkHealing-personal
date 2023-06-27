import React from 'react';
import { Flex, ButtonProps } from '@mantine/core';
import { PolymorphicComponentProps } from '@mantine/utils';
import { IconArrowLeft } from '@tabler/icons-react';
import { useStores } from '@/models';
// import useStyles from './BackButton.style';


interface BaseButtonProps extends PolymorphicComponentProps<'div', ButtonProps> {
  colorvariant? : any;
}


export const BackButton = (props: BaseButtonProps) => {
    // const { classes } = useStyles();
    let buttonClass = props.colorvariant as never;
    const { i18nStore } = useStores();

    return (
        <Flex align={"center"}
        {...props}
        direction={i18nStore.isRTL ? 'row-reverse' : 'row'} >
            <Flex
                w={"60px"}
                h={"60px"}
                justify={"center"}
                align={"center"}
                sx={{
                    borderRadius: "50%",
                    minWidth:"60px",
                    cursor:"pointer"
                }}
            >
                <IconArrowLeft />
            </Flex>
            {props.children}
        </Flex>
    )
}