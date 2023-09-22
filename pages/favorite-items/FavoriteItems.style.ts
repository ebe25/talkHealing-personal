import { createStyles } from '@mantine/core';
import { typography } from "@/themes/Mantine/typography";
import { useStores } from '@/models';

export const createStyle = () => {
    const { i18nStore } = useStores()

    return createStyles((theme) => ({
        faqContainer: {
            padding: "50px",
            width: "100%",
            height: "100%"
        },
        faqQuestionsAnswersBox: {
            marginTop: '100px',
            [theme.fn.smallerThan('md')]: {
                marginTop: 50,
            },
        },
        filterSectionsCard: {
            marginTop: "20px",
            gap: "10px",
            flexWrap: "wrap",
            [theme.fn.smallerThan('xs')]: {
                justifyContent: "center",
            },
        }
    }))
}
