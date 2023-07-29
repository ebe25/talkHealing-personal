import React, { useEffect, useState } from 'react'
import { Accordion, Box, Center, Container, Flex, Loader, Stack, useMantineTheme } from '@mantine/core';
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
    const { i18nStore, globalsStore } = useStores();
    const theme = useMantineTheme();
    const [faqCategory, setFaqCategory] = useState<any>([]);
    const [faqLoading, setFaqLoading] = useState<boolean>(true);
    const [searchText, setSearchText] = useState<string>("");
    const [faq, setFaq] = useState<any>({});

    const findFaqCategory = (categoryList: Array<string>) => {
        if (globalsStore.faqData != null) {
            let faqDataObject: any = {}
            let faqData: any = globalsStore.faqData.results
            if (categoryList.length > 0) {
                categoryList.forEach((element: any) => {
                    faqDataObject[element['en']] = []
                })
            }
            faqData.forEach((item: any) => {
                faqDataObject[item.faq_category.en].push(item)
            })
            setFaq({ ...faqDataObject })
            setFaqLoading(false)
        }
    };

    useEffect(() => {
        globalsStore.getFAQCategory().then((res) => {
            if (res.ok) {
                if (globalsStore.faqCategoryData != null) {
                    let faqCategoryName: any = [];
                    globalsStore.faqCategoryData.results.map((item) => {
                        faqCategoryName.push(item.name);
                    });
                    setFaqCategory([...faqCategoryName]);
                    if (faqCategoryName.length === globalsStore.faqCategoryData.count)
                        globalsStore.getFAQ().then((res) => {
                            if (res.ok) {
                                findFaqCategory(faqCategoryName)
                            }
                        });
                }
            }
        });
    }, []);

    return (
        <Container maw='1440px'>
            <Box className={classes.faqContainer}>
                {/* Heading */}
                <Flex gap={'25px'} wrap={'wrap'} justify={'space-between'}>
                    <BaseText color={theme.colors.black[5]} style={typography.headings[i18nStore.getCurrentLanguage()].h3} txtkey={'frequentlyAskedQuestions.heading'} />
                    <Input variant={'filled'} radius={'8px'} w={'500px'} onChange={(e) => setSearchText(e.target.value)} component={"input"} type='text' style_variant={'inputText1'} placeholder={`${translate('frequentlyAskedQuestions.search')}`} />
                </Flex>
                {/* FaqQuestionsAnswers */}
                <Stack spacing="xl" className={classes.faqQuestionsAnswersBox} >
                    {
                        !faqLoading ?
                            faqCategory.map((item: any, id: any) => {
                                let faqQuestionAnswerData: Array<any> = faq[item['en']]
                                let filterData: Array<any> = faqQuestionAnswerData.filter((element) => {
                                    if (element.question && element.question[i18nStore.getCurrentLanguage()].includes(searchText)) {
                                        return element
                                    }
                                })
                                if (filterData.length > 0 && filterData[0].faq_category.en === item['en'])
                                    return (
                                        <Flex key={id} gap={'10px'} wrap={'wrap'} justify={'space-between'}>
                                            <BaseText mt={'20px'} color={theme.colors.black[5]} style={typography.headings[i18nStore.getCurrentLanguage()].h6} >
                                                {item[i18nStore.getCurrentLanguage()]}
                                            </BaseText>
                                            <Box w={'695px'}>
                                                {faqQuestionAnswerData.filter((element) => {
                                                    if (element.question[i18nStore.getCurrentLanguage()].includes(searchText)) {
                                                        return element
                                                    }
                                                }).map((item, id) => (
                                                    <AccordionBox key={id} w={'100%'}>
                                                        <Accordion.Control>
                                                            <BaseText color={theme.colors.black[5]} style={typography.headings[i18nStore.getCurrentLanguage()].h7} >
                                                                {item.question ? item.question[i18nStore.getCurrentLanguage()] : ""}
                                                            </BaseText>
                                                        </Accordion.Control>
                                                        <Accordion.Panel>
                                                            <BaseText color={theme.colors.black[2]} style={typography.headings[i18nStore.getCurrentLanguage()].p2}  >
                                                                {item.answer ? item.answer[i18nStore.getCurrentLanguage()] : ""}
                                                            </BaseText>
                                                        </Accordion.Panel>
                                                    </AccordionBox>
                                                ))}
                                            </Box>
                                        </Flex>
                                    );
                                return null
                            }) :
                            <Center>
                                <Loader size="xl" />
                            </Center>
                    }
                </Stack>
            </Box>
        </Container>
    )
}

export default FaqQuestionsAnswers;