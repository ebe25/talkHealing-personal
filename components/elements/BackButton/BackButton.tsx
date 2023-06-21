import React from 'react';
import { Flex, Image, ButtonProps } from '@mantine/core';
// import { Images } from "../../../public/index";
// import { useTheme } from 'native-base';
// import { useStores } from '../../../models';
import { BaseText } from '../BaseText/BaseText';
// import { getStyle } from '../../../utils/style';
// import { useRouter } from 'next/router';
// import { useMediaQuery } from '@mantine/hooks';
// import useStyles from './BackButton.style';
import { PolymorphicComponentProps } from '@mantine/utils';
import { IconArrowLeft } from '@tabler/icons-react';

interface BaseButtonProps extends PolymorphicComponentProps<'div', ButtonProps> {
  heading?: string;
}


export const BackButton = (props: 
    BaseButtonProps
    // navigationLink?:any
) => {

    // const { i18nStore } = useStores();
    // const router = useRouter();
//   const { classes } = useStyles();

    
    // const theme = useTheme();
    // const style = getStyle(theme);
    // const sm = useMediaQuery("(max-width:640px)")

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
                // className={classes.title}
                // onClick={()=>{
                //     router.back()
                // }}
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
            <BaseText
            // className={classes.title}
            > {props.heading} </BaseText>
        </Flex>

    )
}