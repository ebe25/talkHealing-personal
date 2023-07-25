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

export const EmailOtp = (props: { incrementTimelineStep: Function }) => {
    const { i18nStore, userStore } = useStores();
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
            emailOtp: (value) => {
                if (value.trim().length < 4)
                    return translate('authentication.invalidOtp');
            },
        },
    });


    const handleEmailOtp = () => {
        setLoader(true)

        userStore.verifyEmail(
            emailOtpFrom.values.emailOtp,
        ).then((res) => {
            if (res.ok) {
                emailOtpFrom.reset()
                setLoader(false)
                props.incrementTimelineStep()
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

        userStore.resendVerificationEmail().then((res) => {
            if (res.ok) {
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
                            if (emailOtpFrom.isValid()) {
                                handleEmailOtp()
                            }
                            else {
                                emailOtpFrom.validate()
                            }
                        }}
                        w={'100%'}
                        h={'39px'}
                        style_variant={emailOtpFrom.isValid() ? 'filled' : 'disabled'}
                        color_variant={emailOtpFrom.isValid() ? 'blue' : 'gray'}
                    >
                        <BaseText
                            style={typography.buttonText[i18nStore.getCurrentLanguage()].b2}
                            color={emailOtpFrom.isValid() ? theme.white : theme.colors.dark[1]}
                            txtkey={'global.button.continue'}
                        />
                    </BaseButton>
                </Flex>
            </form>
        </Flex>
    )
}
