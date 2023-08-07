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
// import { useForm } from "@mantine/form";
import Link from 'next/link';
import { translate } from "../../../../i18n";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export const SignupForm = (props: { incrementTimelineStep: Function }) => {
    const useStyles = createStyle()
    const { classes } = useStyles();
    const { i18nStore, userStore } = useStores();
    const theme = useMantineTheme();
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState<any>("");

    const schema = yup.object({
        full_name: yup.string().required(`${translate('authentication.required')}`),
        email: yup.string().email(`${translate("authentication.invalidEmail")}`).required(`${translate("authentication.required")}`),
        password1: yup.string().required(`${translate("authentication.required")}`).matches(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/, { message: translate("authentication.invalidPassword") }),
        password2: yup.string().oneOf([yup.ref("password1"), null], "Passwords must match").required(`${translate("authentication.required")}`),
    }).required();
    type FormData = yup.InferType<typeof schema>;

    const signUpForm = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: FormData) => console.log(data);


    // SignUp api
    const handleSignUp = () => {
        setLoader(true)

        if (signUpForm.formState.isValid) {
            userStore.signupUser(
                signUpForm.getValues("email"),
                signUpForm.getValues("full_name"),
                signUpForm.getValues("password1"),
                signUpForm.getValues("password2")
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
            <form onSubmit={signUpForm.handleSubmit(onSubmit)}>
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
                            radius="xl"
                            component={'input'}
                            classNames={{ input: classes.input }}
                            placeholder={`${translate('profile.name')}`}
                            style_variant={'inputText1'}
                            inputvalue={signUpForm.register('full_name')}
                            error={signUpForm.formState.errors.full_name?.message}
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
                            radius="xl"
                            component={'input'}
                            classNames={{ input: classes.input }}
                            placeholder={`${translate('authentication.formText.writeEmail')}`}
                            style_variant={'inputText1'}
                            inputvalue={signUpForm.register('email')}
                            error={signUpForm.formState.errors.email?.message}
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
                            inputvalue={signUpForm.register('password1')}
                            error={signUpForm.formState.errors.password1?.message}
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
                            inputvalue={signUpForm.register('password2')}
                            error={signUpForm.formState.errors.password2?.message}
                        />
                        {/* error message */}
                        <Text ta={'center'} style={typography.label[i18nStore.getCurrentLanguage()].l1}
                            color={theme.colors.red[7]}>{error}</Text>
                    </Flex>
                    {/* SignUp Form Submit Button */}
                    <BaseButton
                        type="submit"
                        onClick={() => {
                            if (signUpForm.formState.isValid)
                                handleSignUp()
                            else {
                                console.log("email or password is empty")
                            }
                        }}
                        w={'100%'}
                        mah={'39px'}
                        style_variant={signUpForm.formState.isValid ? 'filled' : 'disabled'}
                        color_variant={signUpForm.formState.isValid ? 'blue' : 'gray'}
                    >
                        <BaseText
                            style={typography.buttonText[i18nStore.getCurrentLanguage()].b2}
                            color={signUpForm.formState.isValid ? theme.white : theme.colors.dark[1]}
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
