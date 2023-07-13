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
import { useRouter } from 'next/router'


export const PhoneNumberOtp = () => {
    const { userStore } = useStores();
    const theme = useMantineTheme();
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState<any>("");
    const router = useRouter();

    const numberOtpFrom = useForm({
        initialValues: {
            numberOtp: '',
            termsOfService: false,
        },

        validate: {
            numberOtp: (value) => {
                if (value.trim().length < 4)
                    return translate('authentication.invalidOtp');
            },
        },

    });


    // Otp in Number api
    const handleNumberOtp = () => {
        setLoader(true)

        userStore.verifyPhoneNumber(
            numberOtpFrom.values.numberOtp,
        ).then((res) => {
            if (res.ok) {
                console.log("user verifyPhoneNumber in successfully!")
                numberOtpFrom.setValues({
                    numberOtp: "",
                });
                router.push('/home')
                setLoader(false)
            }
            else if (res.code == 400) {
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

    const numberOtpLength = (numberOtpFrom.values.numberOtp.length == 4)

    // Resend Otp in Number api
    const handleResendVerificationNumber = () => {
        setLoader(true)

        userStore.resendVerificationSMS().then((res) => {
            if (res.ok) {
                console.log("user resendVerificationNumber in successfully!")
                numberOtpFrom.setValues({
                    numberOtp: "",
                });
                setLoader(false)
            }
        })
    }

    return (
        <Flex gap={26}
            direction={'column'}
        >
            <form onSubmit={numberOtpFrom.onSubmit((values) => console.log(values))}>
                <Flex justify={'center'} align={'center'} direction={'column'} gap={30}>
                    <Center>
                        <BaseText
                            style={typography.headings.en.h2}
                            color={theme.colors.dark[8]}
                            txtkey={'authentication.signupVerification.VerifyMobileNumber'}
                        />
                    </Center>
                    <Flex justify={'center'} direction={'column'} gap={39}
                    >
                        <Flex justify={'center'} direction={'column'} gap={20}
                        >
                            <BaseText
                                style={typography.label.en.l1}
                                color={theme.colors.gray[6]}
                                txtkey={'authentication.signupVerification.OtpInYourNumber'}
                            />
                            <BaseText
                                style={typography.label.en.l1}
                                color={theme.colors.gray[6]}
                                txtkey={'authentication.signupVerification.ForTheVerification'}
                            />
                        </Flex>
                        {/* Otp Enter */}
                        <PinInput  {...numberOtpFrom.getInputProps('numberOtp')} radius={"5px"} spacing={'28px'} size={"xl"} placeholder="" variant='filled' type="number" />
                        {/* Error Message */}
                        <Center>
                            {error ? (<BaseText style={typography.label.en.l1}
                                color={theme.colors.red[7]} txtkey={'signUpForm.otpError'} />) : null}
                        </Center>
                    </Flex>
                    {/* Resend Otp Button */}
                    <Flex
                        justify="center" align="center" gap={5}>
                        <BaseText
                            style={typography.label.en.l1}
                            color={theme.colors.gray[6]}
                            txtkey={'authentication.signupVerification.DidNotGetTheCode'}
                        />
                        <Box style={{ cursor: "pointer" }}>
                            <BaseText
                                onClick={() => handleResendVerificationNumber()}
                                style={typography.headings.en.h7}
                                color={theme.colors.blue[4]}
                                txtkey={'authentication.signupVerification.ResendCode'}
                            />
                        </Box>
                    </Flex>
                    {/* Otp Submit Button */}
                    <BaseButton
                        onClick={(e) => {
                            e.preventDefault()
                            if (numberOtpLength) {
                                handleNumberOtp()
                            }
                            else {
                                console.log("email or password is empty")
                                numberOtpFrom.validate()
                            }
                        }}
                        w={'100%'}
                        h={'59px'}
                        style_variant={numberOtpLength ? 'filled' : 'disabled'}
                        color_variant={numberOtpLength ? 'blue' : 'gray'}
                    >
                        <BaseText
                            style={typography.buttonText.en.b2}
                            color={numberOtpLength ? theme.white : theme.colors.dark[1]}
                            txtkey={'global.button.continue'}
                        />
                    </BaseButton>
                </Flex>
            </form>
        </Flex>
    )
}
