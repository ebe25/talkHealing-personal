import React, { useState } from 'react'
import { Box, Container, Flex } from '@mantine/core';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import useStyles from './cookie_policy.style';
import { useStores } from '@/models';

export const CookiePolicy = () => {
    const { classes } = useStyles();
    const { i18nStore, userStore } = useStores();


    return (
        <Container maw={'1440px'}>
            <Box className={classes.termsAndConditionBox}>
                {/* Heading */}
                <BaseText style={typography.headings[i18nStore.getCurrentLanguage()].h2} txtkey='termsAndConditionAndPolicy.cookiePolicy.heading' />
                {/* paragraph */}
                <Box className={classes.textBox}>
                    <BaseText span style={typography.paragraph[i18nStore.getCurrentLanguage()].p5} txtkey='termsAndConditionAndPolicy.termsAndCondition.firstParagraph' />
                    <BaseText span style={typography.paragraph[i18nStore.getCurrentLanguage()].p5} txtkey='termsAndConditionAndPolicy.termsAndCondition.secondParagraph' />
                </Box>
            </Box>
        </Container>
    )
}

export default CookiePolicy;