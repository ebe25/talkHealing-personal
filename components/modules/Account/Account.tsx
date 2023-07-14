//React and next imports
import React, { useState } from 'react'
// mantine component imports
import { Box, Flex, Grid, Image, InputBase, useMantineTheme } from '@mantine/core'
// styles import
import useStyles from './Account.styles';
// component
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import { Input } from '@/components/elements/Input/Input';
//store import
import { useStores } from '@/models';
// other import
import { Images } from '@/public';
import { translate } from '@/i18n';

export const Account = () => {
    const { i18nStore } = useStores();
    const { classes } = useStyles();
    const theme = useMantineTheme()

    const [images, setImages] = useState<any>(null);
    const onImageChange = (event: any) => {
        if (event.target.files && event.target.files[0]) {
        setImages(URL.createObjectURL(event.target.files[0]));
        }
    };

    return (
        <Box
            className={classes.container}
        >
            <Flex
                align={"center"}
                justify={"space-between"}
            >
                <Image
                    src={Images.profile_image}
                    width={"120px"}
                    height={"120px"}
                    alt='profile_image'
                />
                <Flex
                    gap={"18px"}
                >
                    <BaseButton
                        w={"125px"}
                        h={"39px"}
                        style_variant={'filled'} 
                        color_variant={'blue'}                        
                    >   
                        <BaseText
                            txtkey='profile.buttonChange'
                        />
                    </BaseButton>
                    <BaseButton
                        w={"125px"}
                        h={"39px"}
                        style_variant={'filled'}
                        color_variant={"red"}                        
                    >   
                        <BaseText
                            txtkey='profile.buttonRemove'
                        />
                    </BaseButton>
                </Flex>
            </Flex>
            <Grid mt={"48px"} >
                <Grid.Col xs={12} sm={12} md={6} lg={6} xl={6} >
                    <BaseText
                        txtkey='profile.name'
                        style={typography.label[i18nStore.getCurrentLanguage()].l1}
                        color={theme.colors.gray[6]}
                    />
                    <Input
                        placeholder={`${translate("profile.name")}`}
                        style_variant={'inputText1'} 
                        component={'input'}
                    />
                </Grid.Col>
                <Grid.Col xs={12} sm={12} md={6} lg={6} xl={6} >

                </Grid.Col>
            </Grid>
        </Box>
    )
}
