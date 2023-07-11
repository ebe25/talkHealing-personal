import React, { useState } from 'react';
import { Box, Center, Flex, Select } from '@mantine/core';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import { useMantineTheme } from '@mantine/core';
import { useStores } from '@/models';
import { useForm } from "@mantine/form";
import { Input } from '@/components/elements/Input/Input';
import { countries } from "countries-list"
import { IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';
import { translate } from "../../../../i18n";

export const AddNumber = (props: { phoneNumberOtp: Function }) => {
    const { userStore } = useStores();
    const theme = useMantineTheme();
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState<any>("");

    const addNumberFrom = useForm({
        initialValues: {
            number: '',
            countriesCode: '',
            termsOfService: false,
        },

    });


    // Add number api
    const handleAddNumber = () => {
        setLoader(true)

        userStore.editUser({ phone: `${addNumberFrom.values.countriesCode}${addNumberFrom.values.number}` }).then((res) => {
            if (res.ok) {
                console.log("user resendVerificationEmail in successfully!")
                addNumberFrom.setValues({
                    number: "",
                    countriesCode: ""
                });
                setLoader(false)
                props.phoneNumberOtp()
            }
            else if (res.code == 400) {
                if (res.error) {
                    setLoader(false)
                    setError(translate("authentication.invalidNumber"))
                    setTimeout(() => {
                        setError("")
                    }, 5000)
                }
            }
        })
    }


    // countriesCode
    let testItems: any = []
    {
        Object.keys(countries).map((key, id) => {
            testItems.push({
                label: countries[key]["name"] + "(+" + countries[key]["phone"] + ")",
                value: "+" + countries[key]["phone"],
            })
            testItems.sort((a, b) => {
                if (a['label'][0] < b['label'][0])
                    return -1
                else if (a['label'][0] > b['label'][0])
                    return 1
                else return 0
            })
        })
    }

    return (
        <Flex gap={26}
            direction={'column'}
        >
            <form onSubmit={addNumberFrom.onSubmit((values) => console.log(values))}>
                <Flex direction={'column'} gap={50}>
                    <Center>
                        <BaseText
                            style={typography.headings.en.h2}
                            color={theme.colors.dark[8]}
                            txtkey={'authentication.signupVerification.MobileNumber'}
                        />
                    </Center>
                    <Flex direction={'column'} gap={10} >
                        <BaseText
                            style={typography.label.en.l1}
                            color={theme.colors.gray[6]}
                            txtkey={'authentication.signupVerification.CountryCode'}
                        />
                        <Select
                            placeholder="+914"
                            rightSection={<IconChevronDown size="1rem" />}
                            rightSectionWidth={30}
                            radius="xl"
                            styles={{ rightSection: { pointerEvents: 'none' } }}
                            data={testItems}
                            {...addNumberFrom.getInputProps('countriesCode')}
                        />
                    </Flex>
                    <Flex direction={'column'} gap={10} >
                        <BaseText
                            style={typography.label.en.l1}
                            color={theme.colors.gray[6]}
                            txtkey={'authentication.signupVerification.MobileNumber'}
                        />
                        <Input
                            w={'100%'}
                            h={'44px'}
                            component={'input'}
                            type={'number'}
                            placeholder={`${translate('authentication.formText.phoneNumber')}`}
                            style_variant={'inputText1'}
                            {...addNumberFrom.getInputProps('number')}
                        />
                        {error ?
                            <BaseText style={typography.label.en.l1}
                                color={theme.colors.red[7]} txtkey={'authentication.invalidNumber'} />
                            : null}
                    </Flex>
                    <BaseButton
                        onClick={(e) => {
                            e.preventDefault()
                            if (addNumberFrom.values.number && addNumberFrom.values.countriesCode)
                                handleAddNumber()
                            else
                                console.log("email or password is empty")
                        }}
                        w={'100%'}
                        mah={'39px'}
                        style_variant={addNumberFrom.values.number.length && addNumberFrom.values.countriesCode.length ? 'filled' : 'disabled'}
                        color_variant={addNumberFrom.values.number.length && addNumberFrom.values.countriesCode.length ? 'blue' : 'gray'}
                    >
                        <BaseText
                            style={typography.buttonText.en.b2}
                            color={addNumberFrom.values.number.length ? theme.white : theme.colors.dark[1]}
                            txtkey={'signUpForm.login'}
                        />
                    </BaseButton>
                </Flex>
            </form>

            <Flex
                justify="center" align="center" gap={5}>
                <BaseText
                    style={typography.label.en.l1}
                    color={theme.colors.gray[6]}
                    txtkey={'signUpForm.oldUser'}
                />
                <Link style={{ textDecoration: "none" }} href='/login'>
                    <BaseText
                        style={typography.headings.en.h7}
                        color={theme.colors.blue[4]}
                        txtkey={'signUpForm.login'}
                    />
                </Link>
            </Flex>
        </Flex>
    )
}