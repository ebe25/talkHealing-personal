//React and next imports
import React from 'react'
// mantine component imports
import { Box, Flex, Grid, Image, TextInput, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
// styles import
import useStyles from './Account.styles';
// component
import { ChangePassword } from '../Modals/ProfileModals/ChangePasswordModal/ChangePasswordModal';
import { EmailChangeModal } from '../Modals/ProfileModals/EmailChangeModal/EmailChangeModal';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import { Input } from '@/components/elements/Input/Input';
//store import
import { useStores } from '@/models';
// other import
import { Images } from '@/public';
import { translate } from '@/i18n';
import { ChangePhoneNumberModal } from '../Modals/ProfileModals/ChangePhoneNumberModal/ChangePhoneNumberModal';

export const Account = () => {
    const { i18nStore } = useStores();
    const { classes } = useStyles();
    const theme = useMantineTheme()
    const [opened, { open, close }] = useDisclosure(false);
    const emailChangeModal = useDisclosure(false);
    const phoneNumberChangeModal = useDisclosure(false);
    // const [images, setImages] = useState<any>(null);
    // const onImageChange = (event: any) => {
    //     if (event.target.files && event.target.files[0]) {
    //     setImages(URL.createObjectURL(event.target.files[0]));
    //     }
    // };

    const address = useForm({
        initialValues: {
          name:"John Doe",
          email:"johndoe@gmail.com",
          phoneNumber:"+919876543219",
          password:"SachinPad@123"
        }
    });

    return (
        <Box
            className={classes.container}
        >
            <Flex
                align={"center"}
                justify={"space-between"}
                wrap={"wrap"}
            >
                <div className={classes.imageFlex}
                >
                <Image
                    src={Images.profile_image}
                    width={"120px"}
                    height={"120px"}
                    alt='profile_image'
                    />
                </div>
                <Flex
                    gap={"18px"}
                    className={classes.imageFlex}
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
        <form onSubmit={address.onSubmit((values) => console.log(values))}>
            <Grid className={classes.grid} >
                <Grid.Col xs={12} sm={12} md={6} lg={6} xl={6} >
                    <BaseText
                        txtkey='profile.name'
                        style={typography.label[i18nStore.getCurrentLanguage()].l1}
                        color={theme.colors.gray[6]}
                    />
                    <Input
                        mt={"sm"}
                        placeholder={`${translate("profile.name")}`}
                        style_variant={'inputText2'} 
                        component={'input'}
                        variant='filled'
                        disabled
                        {...address.getInputProps('name')}
                    />
                </Grid.Col>
                <Grid.Col xs={12} sm={12} md={6} lg={6} xl={6} >
                    <BaseText
                        txtkey='profile.email'
                        style={typography.label[i18nStore.getCurrentLanguage()].l1}
                        color={theme.colors.gray[6]}
                    />
                    <Input
                        mt={"sm"}
                        placeholder={`${translate("profile.email")}`}
                        style_variant={'inputText2'} 
                        component={'input'}
                        variant='filled'
                        disabled
                        rightSection={
                            <BaseText
                                onClick={emailChangeModal[1].open}
                                className={classes.mantineInputRightSection}
                                txtkey='profile.change'
                                color={theme.colors.blue[4]}
                                style={typography.label[i18nStore.getCurrentLanguage()].l4}
                            />
                        }
                        {...address.getInputProps('email')}
                    />
                </Grid.Col>
            </Grid>
            <Grid className={classes.grid} >
                <Grid.Col xs={12} sm={12} md={6} lg={6} xl={6} >
                    <BaseText
                        txtkey='profile.phoneNumber'
                        style={typography.label[i18nStore.getCurrentLanguage()].l1}
                        color={theme.colors.gray[6]}
                    />
                    <Input
                        mt={"sm"}
                        placeholder={`${translate("profile.phoneNumber")}`}
                        style_variant={'inputText2'} 
                        component={'input'}
                        variant='filled'
                        disabled
                        rightSection={
                            <BaseText
                                onClick={phoneNumberChangeModal[1].open}
                                className={classes.mantineInputRightSection}
                                txtkey='profile.change'
                                color={theme.colors.blue[4]}
                                style={typography.label[i18nStore.getCurrentLanguage()].l4}
                            />
                        }
                        {...address.getInputProps('phoneNumber')}
                    />
                </Grid.Col>
                <Grid.Col xs={12} sm={12} md={6} lg={6} xl={6} >
                    <BaseText
                        txtkey='profile.password'
                        style={typography.label[i18nStore.getCurrentLanguage()].l1}
                        color={theme.colors.gray[6]}
                    />
                    <TextInput
                        mt={"sm"}
                        placeholder={`${translate("profile.password")}`}
                        variant='filled'
                        type='password'
                        radius={"xl"}
                        disabled
                        rightSection={<BaseText
                            onClick={open}
                            className={classes.mantineInputRightSection}
                            txtkey='profile.change'
                            color={theme.colors.blue[4]}
                            style={typography.label[i18nStore.getCurrentLanguage()].l4} 
                        />}  
                        {...address.getInputProps('password')}
                    />
                </Grid.Col>
            </Grid>
            </form>
            <ChangePassword
                opened={opened}
                onClose={close}
            />
            <EmailChangeModal
                opened={emailChangeModal[0]}
                onClose={emailChangeModal[1].close}
            />
            <ChangePhoneNumberModal
                opened={phoneNumberChangeModal[0]}
                onClose={phoneNumberChangeModal[1].close}
            />
        </Box>
    )
}
