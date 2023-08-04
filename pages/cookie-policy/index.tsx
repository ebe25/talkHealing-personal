import React, { useEffect, useState } from 'react'
import { Box, Container, Flex, useMantineTheme } from '@mantine/core';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import useStyles from './CookiePolicy.style';
import { translate } from '@/i18n';
import { useStores } from '@/models';

export const CookiePolicy = () => {
    const { classes } = useStyles();
    const theme = useMantineTheme();
    const { i18nStore, globalsStore } = useStores();
    const [cookiesPolicyData, setCookiesPolicyData] = useState<any>({});
    const [error, setError] = useState<any>("");
    useEffect(() => {
        globalsStore.getCookiesPolicy().then((res) => {
            if (res) {
                if (globalsStore.cookiesPolicyData)
                    setCookiesPolicyData(globalsStore.cookiesPolicyData.data)
                else {
                    setError(translate("signUpForm.unexpectedError"))
                }
            }
            else {
                setError(translate("signUpForm.unexpectedError"))
            }
        })
    }, [])

    return (
        <Container maw={'1440px'}>
            <Box className={classes.cookiePolicyBox}>
                {/* Heading */}
                <BaseText style={typography.headings[i18nStore.getCurrentLanguage()].h2} txtkey='termsAndConditionAndPolicy.cookiePolicy.heading' />
                {/* paragraph */}
                <Box className={classes.textBox}>
                    {cookiesPolicyData.length ?
                        <BaseText
                            color={theme.colors.dark[9]}
                            style={typography.paragraph[i18nStore.getCurrentLanguage()].p5}
                        >
                            <div
                                dangerouslySetInnerHTML={{ __html: `${cookiesPolicyData[i18nStore.getCurrentLanguage()]}` }} />
                        </BaseText>
                        :
                        <BaseText color={theme.colors.red[7]}
                            style={typography.paragraph[i18nStore.getCurrentLanguage()].p5}>
                            {error}
                        </BaseText>
                    }
                </Box>
            </Box>
        </Container>
    )
}

export default CookiePolicy;