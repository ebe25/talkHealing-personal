import React, { useState } from 'react'
import { Box, Container, Flex } from '@mantine/core';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import useStyles from './privacy_policy.style';
import { useStores } from '@/models';

export const PrivacyPolicy = () => {
    const { classes } = useStyles();
    const { i18nStore, userStore } = useStores();


    return (
        <Container>
            <Box className={classes.termsAndConditionBox}>
                {/* Heading */}
                <BaseText style={typography.headings[i18nStore.getCurrentLanguage()].h2} txtkey='termsAndConditionAndPolicy.privacyPolicy.heading' />
                {/* paragraph */}
                <Box className={classes.textBox}>
                    <BaseText span style={typography.paragraph[i18nStore.getCurrentLanguage()].p5} txtkey='termsAndConditionAndPolicy.termsAndCondition.firstParagraph' />
                    <BaseText span style={typography.paragraph[i18nStore.getCurrentLanguage()].p5} txtkey='termsAndConditionAndPolicy.termsAndCondition.secondParagraph' />
                </Box>
            </Box>
        </Container>
    )
}

export default PrivacyPolicy;