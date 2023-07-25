import React, { useEffect, useState } from 'react'
import { Box, Container, useMantineTheme } from '@mantine/core';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import useStyles from './TermsAndCondition.style';
import { useStores } from '@/models';

export const TermsAndConditionAndPolicy = () => {
    const { classes } = useStyles();
    const { i18nStore, globalsStore } = useStores();
    const theme = useMantineTheme();
    const [termsAndConditionsData, setTermsAndConditionsData] = useState<any>({})
    useEffect(() => {
        globalsStore.getTermsAndConditions().then((res) => {
            if (res) {
                setTermsAndConditionsData(globalsStore.termsAndConditionsData?.data)
            }
        })
    }, [])

    return (
        <Container maw={'1440px'}>
            <Box className={classes.termsAndConditionBox}>
                {/* Heading */}
                <BaseText style={typography.headings[i18nStore.getCurrentLanguage()].h2} txtkey='termsAndConditionAndPolicy.termsAndCondition.heading' />
                {/* paragraph */}
                <Box className={classes.textBox}>
                    <BaseText
                        color={theme.colors.dark[9]}
                        style={typography.paragraph[i18nStore.getCurrentLanguage()].p5}
                    >
                        <div
                            dangerouslySetInnerHTML={{ __html: `${termsAndConditionsData[i18nStore.getCurrentLanguage()]}` }} />
                    </BaseText>
                </Box>
            </Box>
        </Container>
    )
}

export default TermsAndConditionAndPolicy;
