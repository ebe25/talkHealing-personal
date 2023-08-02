import React, { useState } from 'react';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { Input } from '@/components/elements/Input/Input';
import { BasePasswordInput } from '@/components/elements/PasswordInput/PasswordInput';
import { Box, Center, Flex, Loader, Text } from '@mantine/core';
import { typography } from '@/themes/Mantine/typography';
import { useMantineTheme } from '@mantine/core';
import { Images } from '../../../../public/index';
import { CircularIcon } from 'components/elements/CircularIcon/CircularIcon';
import { useStores } from '@/models';
import { createStyle } from './SignupForm.style';
import { useForm } from "@mantine/form";
import Link from 'next/link';
import { translate } from "../../../../i18n";


export const SignupForm = (props: { incrementTimelineStep: Function }) => {
    const useStyles = createStyle()
    const { classes } = useStyles();
    const { i18nStore, userStore } = useStores();
    const theme = useMantineTheme();
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState<any>("");


    const signUpForm = useForm({
        initialValues: {
            email: '',
            full_name: '',
            password1: '',
            password2: '',
            termsOfService: false,
        },

        validate: {
            email: (value) => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ? null : translate("authentication.invalidEmail")),
            password1: (value) => (/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(value) ? null : translate("authentication.invalidPassword")),
            password2: (value) => {
                if (value != signUpForm.values.password1)
                    return translate("authentication.passwordNotMatch");
            },
            full_name: (value) => {
                if (value.trim().length < 1)
                    return translate('profile.name');
            },
        },
    });


    // SignUp api
    const handleSignUp = () => {
        setLoader(true)

        let results = signUpForm.validate();

        if (results.hasErrors) return setLoader(false);
        if (!results.hasErrors) {
            userStore.signupUser(
                signUpForm.values.email,
                signUpForm.values.full_name,
                signUpForm.values.password1,
                signUpForm.values.password2
            ).then((res) => {
                if (res.ok) {
                    signUpForm.reset()
                    props.incrementTimelineStep()
                    setLoader(false)
                    // setEmailOtp(true)
                }
                else if (res.code == 400) {
                    if (res.error) {
                        setLoader(false)
                        if (res.error && res.error.email)
                            setError(res.error?.email?.toString())
                        setTimeout(() => {
                            setError("")
                        }, 5000)
                    }
                }
            })
        }
    }

    return (
        <Flex gap={26}
            direction={'column'}
        >
            {/* Loader */}
            {loader ? (
                <Box className={classes.loaderBox}>
                    <Loader size="xl" />
                </Box>
            ) : null}
            <form onSubmit={signUpForm.onSubmit((values) => console.log(values))}>
                <Flex direction={'column'} gap={20}>
                    <Center>
                        <BaseText
                            style={typography.headings[i18nStore.getCurrentLanguage()].h2}
                            color={theme.colors.dark[8]}
                            txtkey={'signUpForm.signUp'}
                        />
                    </Center>
                    {/* Social Media Login */}
                    <Flex justify="center" align="center" gap={32}
                    >
                        <Box className={classes.link}>
                            <CircularIcon icon={Images.facebook_icon} />
                        </Box>
                        <Box className={classes.link}>
                            <CircularIcon icon={Images.google_icon} />
                        </Box>
                    </Flex>
                    {/* FullName Input Box */}
                    <Flex direction={'column'} gap={10}
                    >
                        <BaseText
                            style={typography.label[i18nStore.getCurrentLanguage()].l1}
                            color={theme.colors.gray[6]}
                            txtkey={'profile.name'}
                        />
                        <Input
                            w={'100%'}
                            mah={'44px'}
                            component={'input'}
                            classNames={{ input: classes.input }}
                            placeholder={`${translate('profile.name')}`}
                            style_variant={'inputText1'}
                            {...signUpForm.getInputProps('full_name')}
                        />
                    </Flex>
                    {/* Email Input Box */}
                    <Flex direction={'column'} gap={10}
                    >
                        <BaseText
                            style={typography.label[i18nStore.getCurrentLanguage()].l1}
                            color={theme.colors.gray[6]}
                            txtkey={'global.label.label2'}
                        />
                        <Input
                            w={'100%'}
                            mah={'44px'}
                            component={'input'}
                            classNames={{ input: classes.input }}
                            placeholder={`${translate('authentication.formText.writeEmail')}`}
                            style_variant={'inputText1'}
                            {...signUpForm.getInputProps('email')}
                        />
                    </Flex>
                    {/* Password Input Box */}
                    <Flex direction={'column'} gap={10}
                    >
                        <BaseText
                            style={typography.label[i18nStore.getCurrentLanguage()].l1}
                            color={theme.colors.gray[6]}
                            txtkey={'global.label.label3'}
                        />
                        <BasePasswordInput
                            w={'100%'}
                            mah={'44px'}
                            placeholder={`${translate('authentication.formText.writePassword')}`}
                            {...signUpForm.getInputProps('password1')}
                        />
                    </Flex>
                    {/* Confirm Password Input Box */}
                    <Flex direction={'column'} gap={10}
                    >
                        <BaseText
                            style={typography.label[i18nStore.getCurrentLanguage()].l1}
                            color={theme.colors.gray[6]}
                            txtkey={'global.label.label4'}
                        />
                        <BasePasswordInput
                            w={'100%'}
                            mah={'44px'}
                            placeholder={`${translate('authentication.formText.writePassword')}`}
                            {...signUpForm.getInputProps('password2')}
                        />
                        {/* error message */}
                        <Text ta={'center'} style={typography.label[i18nStore.getCurrentLanguage()].l1}
                            color={theme.colors.red[7]}>{error}</Text>
                    </Flex>
                    {/* SignUp Form Submit Button */}
                    <BaseButton
                        onClick={(e) => {
                            e.preventDefault()
                            if (signUpForm.isValid())
                                handleSignUp()
                            else {
                                signUpForm.validate()
                            }
                        }}
                        w={'100%'}
                        mah={'39px'}
                        style_variant={signUpForm.isValid() ? 'filled' : 'disabled'}
                        color_variant={signUpForm.isValid() ? 'blue' : 'gray'}
                    >
                        <BaseText
                            style={typography.buttonText[i18nStore.getCurrentLanguage()].b2}
                            color={signUpForm.isValid() ? theme.white : theme.colors.dark[1]}
                            txtkey={'header.signUp'}
                        />
                    </BaseButton>
                </Flex>
            </form>
            {/* Already have account then login page link */}
            <Flex
                justify="center" align="center" gap={5}>
                <BaseText
                    style={typography.label[i18nStore.getCurrentLanguage()].l1}
                    color={theme.colors.gray[6]}
                    txtkey={'authentication.formText.oldUser'}
                />
                <Link className={classes.link} href='/login'>
                    <BaseText
                        style={typography.headings[i18nStore.getCurrentLanguage()].h7}
                        color={theme.colors.blue[4]}
                        txtkey={'signUpForm.login'}
                    />
                </Link>
            </Flex>
        </Flex>
    )
}
