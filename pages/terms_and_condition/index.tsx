import React, { useState } from 'react'
import { Box, Container, useMantineTheme } from '@mantine/core';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import useStyles from './terms_and_condition.style';
import { useStores } from '@/models';

export const TermsAndConditionAndPolicy = () => {
    const { classes } = useStyles();
    const { i18nStore, userStore } = useStores();
    const theme = useMantineTheme();

    return (
        <Container>
            <Box className={classes.termsAndConditionBox}>
                {/* Heading */}
                <BaseText style={typography.headings[i18nStore.getCurrentLanguage()].h2} txtkey='termsAndConditionAndPolicy.termsAndCondition.heading' />
                {/* paragraph */}
                <Box className={classes.textBox}>
                    <BaseText color={theme.colors.dark[9]} style={typography.paragraph[i18nStore.getCurrentLanguage()].p5} txtkey='termsAndConditionAndPolicy.termsAndCondition.firstParagraph' />
                    <BaseText color={theme.colors.dark[9]} style={typography.paragraph[i18nStore.getCurrentLanguage()].p5} txtkey='termsAndConditionAndPolicy.termsAndCondition.secondParagraph' />
                </Box>
            </Box>
        </Container>
    )
}

export default TermsAndConditionAndPolicy;
