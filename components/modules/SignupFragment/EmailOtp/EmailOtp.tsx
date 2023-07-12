import React, { useState } from 'react';
import { Box, Center, Flex } from '@mantine/core';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import { useMantineTheme } from '@mantine/core';
import { useStores } from '@/models';
import { useForm } from "@mantine/form";
import { PinInput } from '@mantine/core';
import { translate } from "../../../../i18n";

export const EmailOtp = (props: { addNumber: Function, email: string }) => {
    const { userStore } = useStores();
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
                console.log("user logged in successfully!")
                emailOtpFrom.setValues({
                    emailOtp: "",
                });
                setLoader(false)
                props.addNumber()
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
                            style={typography.headings.en.h2}
                            color={theme.colors.dark[8]}
                            txtkey={'authentication.signupVerification.VerifyEmail'}
                        />
                    </Center>
                    <Flex justify={'center'} direction={'column'} gap={39}
                    >
                        <Flex justify={'center'} direction={'column'} gap={20}
                        >
                            <BaseText
                                style={typography.label.en.l1}
                                color={theme.colors.gray[6]}
                                txtkey={'authentication.signupVerification.OtpInYourEmail'}
                            />
                            <BaseText
                                style={typography.label.en.l1}
                                color={theme.colors.gray[6]}
                                txtkey={'authentication.signupVerification.ForTheVerification'}
                            />
                        </Flex>
                        <PinInput  {...emailOtpFrom.getInputProps('emailOtp')} radius={"5px"} spacing={'28px'} size={"xl"} placeholder="" variant='filled' type="number" />
                        <Center>
                            {error ? (<BaseText style={typography.label.en.l1}
                                color={theme.colors.red[7]} txtkey={'signUpForm.otpError'} />) : null}
                        </Center>
                    </Flex>
                    <Flex
                        justify="center" align="center" gap={5}>
                        <BaseText
                            style={typography.label.en.l1}
                            color={theme.colors.gray[6]}
                            txtkey={'authentication.signupVerification.DidNotGetTheCode'}
                        />
                        <Box style={{ cursor: "pointer" }} onClick={() => handleResendVerificationEmail()}>
                            <BaseText
                                style={typography.headings.en.h7}
                                color={theme.colors.blue[4]}
                                txtkey={'authentication.signupVerification.ResendCode'}
                            />
                        </Box>
                    </Flex>
                    <BaseButton
                        onClick={(e) => {
                            e.preventDefault()
                            if (emailOtpLength) {
                                handleEmailOtp()
                                console.log("value", emailOtpFrom.values.emailOtp)
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
                            style={typography.buttonText.en.b2}
                            color={emailOtpLength ? theme.white : theme.colors.dark[1]}
                            txtkey={'global.button.continue'}
                        />
                    </BaseButton>
                </Flex>
            </form>
        </Flex>
    )
}
