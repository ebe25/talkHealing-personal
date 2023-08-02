import React, { useState } from 'react';
import { Box, Center, Flex, Loader, Select } from '@mantine/core';
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
import { createStyle } from "./AddNumber.style"

export const AddNumber = (props: { incrementTimelineStep: Function }) => {
    const { i18nStore, userStore } = useStores();
    const useStyles = createStyle()
    const { classes } = useStyles();
    const theme = useMantineTheme();
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState<any>("");

    const addNumberFrom = useForm({
        initialValues: {
            number: '',
            countriesCode: '',
            termsOfService: false,
        },
        validate: {
            number: (value) => {
                if (value.trim().length < 1)
                    return translate('authentication.formText.invalidNumber');
            },
            countriesCode: (value) => {
                if (value.trim().length < 1)
                    return translate('authentication.formText.invalidNumber');
            },
        },

    });


    // Add number api
    const handleAddNumber = () => {
        setLoader(true)

        userStore.editUser({ phone: `${addNumberFrom.values.countriesCode}${addNumberFrom.values.number}` }).then((res) => {
            if (res.ok) {
                addNumberFrom.reset()
                setLoader(false)
                props.incrementTimelineStep()
            }
            else if (res.code == 400) {
                if (res.error) {
                    setLoader(false)
                    setError(translate('authentication.formText.invalidNumber'))
                    setTimeout(() => {
                        setError("")
                    }, 5000)
                }
            }
        })
    }


    // countriesCode
    let countriesCode: any = []
    {
        Object.keys(countries).map((key, id) => {
            countriesCode.push({
                label: countries[key]["name"] + "(+" + countries[key]["phone"] + ")",
                value: "+" + countries[key]["phone"],
            })
            countriesCode.sort((a, b) => {
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
            {/* Loader */}
            {loader ? (
                <Box className={classes.loaderBox}>
                    <Loader size="xl" />
                </Box>
            ) : null}
            <form onSubmit={addNumberFrom.onSubmit((values) => console.log(values))}>
                <Flex direction={'column'} gap={50}>
                    <Center>
                        <BaseText
                            style={typography.headings[i18nStore.getCurrentLanguage()].h2}
                            color={theme.colors.dark[8]}
                            txtkey={'authentication.enterMobileNumber'}
                        />
                    </Center>
                    {/* Select CountriesCode */}
                    <Flex direction={'column'} gap={10} >
                        <BaseText
                            style={typography.label[i18nStore.getCurrentLanguage()].l1}
                            color={theme.colors.gray[6]}
                            txtkey={'profile.modal.countryCode'}
                        />
                        <Select
                            placeholder="+914"
                            rightSection={<IconChevronDown size="1rem" />}
                            classNames={{
                                rightSection: classes.rightSection,
                                input: classes.input
                            }}
                            rightSectionWidth={30}
                            radius="xl"
                            styles={{ rightSection: { pointerEvents: 'none' } }}
                            data={countriesCode}
                            {...addNumberFrom.getInputProps('countriesCode')}
                        />
                    </Flex>
                    {/* Phone Number Input Box */}
                    <Flex direction={'column'} gap={10} >
                        <BaseText
                            style={typography.label[i18nStore.getCurrentLanguage()].l1}
                            color={theme.colors.gray[6]}
                            txtkey={'authentication.enterMobileNumber'}
                        />
                        <Input
                            w={'100%'}
                            h={'44px'}
                            component={'input'}
                            classNames={{ input: classes.input }}
                            type={'number'}
                            placeholder={`${translate('profile.phoneNumber')}`}
                            style_variant={'inputText1'}
                            {...addNumberFrom.getInputProps('number')}
                        />
                        {/* Error Message */}
                        <Center>
                            {error ?
                                <BaseText style={typography.label[i18nStore.getCurrentLanguage()].l1}
                                    color={theme.colors.red[7]} txtkey={'authentication.formText.invalidNumber'} />
                                : null}
                        </Center>
                    </Flex>
                    {/* Number Add Button */}
                    <BaseButton
                        onClick={(e) => {
                            e.preventDefault()
                            if (addNumberFrom.isValid())
                                handleAddNumber()
                        }}
                        w={'100%'}
                        mah={'39px'}
                        style_variant={addNumberFrom.isValid() ? 'filled' : 'disabled'}
                        color_variant={addNumberFrom.isValid() ? 'blue' : 'gray'}
                    >
                        <BaseText
                            style={typography.buttonText[i18nStore.getCurrentLanguage()].b2}
                            color={addNumberFrom.isValid() ? theme.white : theme.colors.dark[1]}
                            txtkey={'global.button.continue'}
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
                <Link style={{ textDecoration: "none" }} href='/login'>
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