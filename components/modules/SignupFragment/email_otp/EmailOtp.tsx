import React, { useState } from 'react';
import { Box, Center, Flex, Loader } from '@mantine/core';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import { useMantineTheme } from '@mantine/core';
import { useStores } from '@/models';
import { useForm } from "@mantine/form";
import { PinInput } from '@mantine/core';
import { translate } from "../../../../i18n";
import swal from 'sweetalert';

export const EmailOtp = (props: { addNumberFragment: Function, email: string }) => {
    const { i18nStore , userStore } = useStores();
    const theme = useMantineTheme();
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState<any>("");

    const emailOtpFrom = useForm({
        initialValues: {
            email: '',
            emailOtp: '',
            termsOfService: false,
        },

        validate: {
            email: (value) => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ? null : translate("authentication.invalidEmail")),
            emailOtp: (value) => {
                if (value.trim().length < 4)
                    return translate('authentication.invalidOtp');
            },
        },
    });

    const emailOtpLength = (emailOtpFrom.values.emailOtp.length == 4)

    const handleEmailOtp = () => {
        setLoader(true)

        userStore.verifyEmail(
            emailOtpFrom.values.emailOtp,
        ).then((res) => {
            if (res.ok) {
                console.log("user verifyEmail in successfully!")
                emailOtpFrom.setValues({
                    emailOtp: "",
                });
                setLoader(false)
                props.addNumberFragment()
            }
            else if (res.code == 404) {
                if (res.error) {
                    setLoader(false)
                    setError(translate("authentication.invalidOtp"))
                    setTimeout(() => {
                        setError("")
                    }, 5000)
                }
            }
        })
    }

    const handleResendVerificationEmail = () => {
        setLoader(true)

        userStore.resendVerificationEmail(
            props.email
        ).then((res) => {
            if (res.ok) {
                console.log("user resendVerificationEmail in successfully!")
                emailOtpFrom.setValues({
                    emailOtp: "",
                });
                setLoader(false)
                swal(`${translate("header.resendVerification")}`, `${translate("header.emailSuccessfully")}`, "success")
            }
        })
    }

    return (
        <Flex gap={26}
            direction={'column'}
        >
            <form onSubmit={emailOtpFrom.onSubmit((values) => console.log(values))}>
                <Flex justify={'center'} align={'center'} direction={'column'} gap={30}>
                    <Center>
                        <BaseText
                            style={typography.headings[i18nStore.getCurrentLanguage()].h2}
                            color={theme.colors.dark[8]}
                            txtkey={'authentication.signupVerification.verifyEmail'}
                        />
                    </Center>
                    <Flex justify={'center'} direction={'column'} gap={39}
                    >
                        <Flex justify={'center'} direction={'column'} gap={20}
                        >
                            <BaseText
                                style={typography.label[i18nStore.getCurrentLanguage()].l1}
                                color={theme.colors.gray[6]}
                                txtkey={'authentication.signupVerification.otpInYourEmail'}
                            />
                            <BaseText
                                style={typography.label[i18nStore.getCurrentLanguage()].l1}
                                color={theme.colors.gray[6]}
                                txtkey={'authentication.signupVerification.forTheVerification'}
                            />
                        </Flex>
                        {/* Otp Enter */}
                        <PinInput  {...emailOtpFrom.getInputProps('emailOtp')} radius={"5px"} spacing={'28px'} size={"xl"} placeholder="" variant='filled' type="number" />
                        {/* Error Message */}
                        <Center>
                            {error ? (<BaseText style={typography.label[i18nStore.getCurrentLanguage()].l1}
                                color={theme.colors.red[7]} txtkey={'signUpForm.otpError'} />) : null}
                            {loader ? <Loader /> : null}
                        </Center>
                    </Flex>
                    {/* Resend Otp Button */}
                    <Flex
                        justify="center" align="center" gap={5}>
                        <BaseText
                            style={typography.label[i18nStore.getCurrentLanguage()].l1}
                            color={theme.colors.gray[6]}
                            txtkey={'authentication.signupVerification.didNotGetTheCode'}
                        />
                        <Box style={{ cursor: "pointer" }} onClick={() => handleResendVerificationEmail()}>
                            <BaseText
                                style={typography.headings[i18nStore.getCurrentLanguage()].h7}
                                color={theme.colors.blue[4]}
                                txtkey={'authentication.signupVerification.resendCode'}
                            />
                        </Box>
                    </Flex>
                    {/* Otp Submit Button */}
                    <BaseButton
                        onClick={(e) => {
                            e.preventDefault()
                            if (emailOtpLength) {
                                handleEmailOtp()
                            }
                            else {
                                console.log("email or password is empty")
                                emailOtpFrom.validate()
                            }
                        }}
                        w={'100%'}
                        h={'50px'}
                        style_variant={emailOtpLength ? 'filled' : 'disabled'}
                        color_variant={emailOtpLength ? 'blue' : 'gray'}
                    >
                        <BaseText
                            style={typography.buttonText[i18nStore.getCurrentLanguage()].b2}
                            color={emailOtpLength ? theme.white : theme.colors.dark[1]}
                            txtkey={'global.button.continue'}
                        />
                    </BaseButton>
                </Flex>
            </form>
        </Flex>
    )
}
