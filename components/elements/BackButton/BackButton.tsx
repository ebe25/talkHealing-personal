import React from 'react';
import { Flex, ButtonProps } from '@mantine/core';
import { PolymorphicComponentProps } from '@mantine/utils';
import { IconArrowLeft } from '@tabler/icons-react';
// import useStyles from './BackButton.style';


interface BaseButtonProps extends PolymorphicComponentProps<'div', ButtonProps> {
  colorvariant? : any;
}


export const BackButton = (props: BaseButtonProps) => {
    // const { classes } = useStyles();
    let buttonClass = props.colorvariant as never;

    return (
        <Flex align={"center"}
        {...props} >
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
                // className={classes[buttonClass]}
            >
                {/* <Image
                style={{
                     scale: i18nStore.isRTL?"-1":"1"
                 }}
                    src={Images.chevron_prev_icon}
                    alt="icon"
                    width={"14px"}
                    height={"25px"}
                /> */}
                <IconArrowLeft />
            </Flex>
            {props.children}
        </Flex>
    )
}