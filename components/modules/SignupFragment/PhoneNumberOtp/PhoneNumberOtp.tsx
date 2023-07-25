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
import { useRouter } from 'next/router';


export const PhoneNumberOtp = () => {
    const { i18nStore, userStore } = useStores();
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

    // Resend Otp in Number api
    const handleResendVerificationNumber = () => {
        setLoader(true)

        userStore.resendVerificationSMS().then((res) => {
            if (res.ok) {
                numberOtpFrom.setValues({
                    numberOtp: "",
                });
                setLoader(false)
                swal(`${translate("header.resendVerification")}`, `${translate("header.numberSuccessfully")}`, "success")
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
                            style={typography.headings[i18nStore.getCurrentLanguage()].h2}
                            color={theme.colors.dark[8]}
                            txtkey={'authentication.signupVerification.verifyMobileNumber'}
                        />
                    </Center>
                    <Flex justify={'center'} direction={'column'} gap={39}
                    >
                        <Flex justify={'center'} direction={'column'} gap={20}
                        >
                            <BaseText
                                style={typography.label[i18nStore.getCurrentLanguage()].l1}
                                color={theme.colors.gray[6]}
                                txtkey={'authentication.signupVerification.otpInYourNumber'}
                            />
                            <BaseText
                                style={typography.label[i18nStore.getCurrentLanguage()].l1}
                                color={theme.colors.gray[6]}
                                txtkey={'authentication.signupVerification.forTheVerification'}
                            />
                        </Flex>
                        {/* Otp Enter */}
                        <PinInput  {...numberOtpFrom.getInputProps('numberOtp')} radius={"5px"} spacing={'28px'} size={"xl"} placeholder="" variant='filled' type="number" />
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
                        <Box style={{ cursor: "pointer" }}>
                            <BaseText
                                onClick={() => handleResendVerificationNumber()}
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
                            if (numberOtpFrom.isValid()) {
                                handleNumberOtp()
                            }
                            else {
                                numberOtpFrom.validate()
                            }
                        }}
                        w={'100%'}
                        h={'59px'}
                        style_variant={numberOtpFrom.isValid() ? 'filled' : 'disabled'}
                        color_variant={numberOtpFrom.isValid() ? 'blue' : 'gray'}
                    >
                        <BaseText
                            style={typography.buttonText[i18nStore.getCurrentLanguage()].b2}
                            color={numberOtpFrom.isValid() ? theme.white : theme.colors.dark[1]}
                            txtkey={'global.button.continue'}
                        />
                    </BaseButton>
                </Flex>
            </form>
        </Flex>
    )
}
