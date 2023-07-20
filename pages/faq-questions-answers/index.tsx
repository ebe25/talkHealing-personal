import React, { useState } from 'react'
import { Accordion, Box, Container, Flex, useMantineTheme } from '@mantine/core';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import useStyles from './FaqQuestionsAnswers.style';
import { useStores } from '@/models';
import { Input } from '@/components/elements/Input/Input';
import { translate } from "../../i18n";

export const AccordionBox = (props: any) => {
    return (
        <Accordion {...props}>
            <Accordion.Item value="customization">
                {props.children}
            </Accordion.Item>
        </Accordion>
    );
}

export const FaqQuestionsAnswers = () => {
    const { classes } = useStyles();
    const { i18nStore, userStore } = useStores();
    const theme = useMantineTheme();

    return (
        <Container maw='1440px'>
            <Box className={classes.termsAndConditionBox}>
                {/* Heading */}
                <Flex gap={'25px'} wrap={'wrap'} justify={'space-between'}>
                    <BaseText color={theme.colors.black[5]} style={typography.headings[i18nStore.getCurrentLanguage()].h3} txtkey={'frequentlyAskedQuestions.heading'} />
                    <Input variant={'filled'} radius={'8px'} w={'500px'} component={"input"} type='text' style_variant={'inputText1'} placeholder={`${translate('frequentlyAskedQuestions.search')}`} />
                </Flex>
                {/* FaqQuestionsAnswers */}
                <Box className={classes.faqQuestionsAnswersBox} >
                    <Flex gap={'10px'} wrap={'wrap'} justify={'space-between'}>
                        <BaseText mt={'20px'} color={theme.colors.black[5]} style={typography.headings[i18nStore.getCurrentLanguage()].h6} txtkey={'frequentlyAskedQuestions.loremIpsum'} />
                        <Box w={'695px'}>
                            {[1, 2].map(() =>
                                <AccordionBox w={'100%'}>
                                    <Accordion.Control>
                                        <BaseText color={theme.colors.black[5]} style={typography.headings[i18nStore.getCurrentLanguage()].h7} txtkey={'frequentlyAskedQuestions.faqQuestion'} />
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        <BaseText color={theme.colors.black[2]} style={typography.headings[i18nStore.getCurrentLanguage()].p2} txtkey={'frequentlyAskedQuestions.faqAns'} />
                                    </Accordion.Panel>
                                </AccordionBox>
                            )}
                        </Box>
                    </Flex>
                    <Flex gap={'10px'} wrap={'wrap'} justify={'space-between'}>
                        <BaseText color={theme.colors.black[5]} mt={'20px'} style={typography.headings[i18nStore.getCurrentLanguage()].h6} txtkey={'frequentlyAskedQuestions.loremIpsum'} />
                        <Box w={'695px'}>
                            {[1, 2].map(() =>
                                <AccordionBox w={'100%'}>
                                    <Accordion.Control>
                                        <BaseText color={theme.colors.black[5]} style={typography.headings[i18nStore.getCurrentLanguage()].h7} txtkey={'frequentlyAskedQuestions.faqQuestion'} />
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        <BaseText color={theme.colors.black[2]} style={typography.headings[i18nStore.getCurrentLanguage()].p2} txtkey={'frequentlyAskedQuestions.faqAns'} />
                                    </Accordion.Panel>
                                </AccordionBox>
                            )}
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Container>
    )
}

export default FaqQuestionsAnswers;