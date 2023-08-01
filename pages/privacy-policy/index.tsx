import React, { useEffect, useState } from 'react'
import { Box, Container, Flex, useMantineTheme } from '@mantine/core';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import useStyles from './PrivacyPolicy.style';
import { useStores } from '@/models';

export const PrivacyPolicy = () => {
    const { classes } = useStyles();
    const { i18nStore, globalsStore } = useStores();
    const theme = useMantineTheme();
    const [privacyPolicyData, setPrivacyPolicyData] = useState<any>({})
    const [error, setError] = useState<string>("");
    useEffect(() => {
        globalsStore.getPrivacyPolicy().then((res) => {
            if (res) {
                if (globalsStore.privacyPolicyData)
                    setPrivacyPolicyData(globalsStore.privacyPolicyData.data)
                else {
                    setError("privacy policy data is null")
                }
            }
            else {
                setError("privacy policy data can't fetched")
            }
        })
    }, [])

    return (
        <Container maw={'1440px'}>
            <Box className={classes.privacyPolicyBox}>
                {/* Heading */}
                <BaseText style={typography.headings[i18nStore.getCurrentLanguage()].h2} txtkey='termsAndConditionAndPolicy.privacyPolicy.heading' />
                {/* paragraph */}
                <Box className={classes.textBox}>
                    <BaseText
                        color={theme.colors.dark[9]}
                        style={typography.paragraph[i18nStore.getCurrentLanguage()].p5}
                    >
                        <div
                            dangerouslySetInnerHTML={{ __html: `${privacyPolicyData[i18nStore.getCurrentLanguage()]}` }} />
                    </BaseText>
                    <BaseText color={theme.colors.red[7]}
                        style={typography.paragraph[i18nStore.getCurrentLanguage()].p5}>
                        {error}
                    </BaseText>
                </Box>
            </Box>
        </Container>
    )
}

export default PrivacyPolicy;