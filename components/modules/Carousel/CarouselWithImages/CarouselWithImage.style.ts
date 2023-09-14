import { createStyles } from '@mantine/core';
import { useStores } from '@/models';
import { typography } from "@/themes/Mantine/typography";

export const createStyle = () => {
    const { i18nStore } = useStores()

    return createStyles((theme) => ({
        indicator: {
            width: "10px",
            height: "10px",
            background: "blue",
            transition: 'width 250ms ease'
        },
        control: {
            width: "10px",
            height: "10px",
            margin: "-30px -50px 50px -50px",
        },
        crouselSlide: {
            display: "flex",
            justifyContent: "center"
        },
        slideBox: {
            background: "#FFA230",
            padding: "20px 52px",
            width: "100%",
            height: "88%",
            borderRadius: "28px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            [theme.fn.smallerThan('md')]: {
                padding: "15px",
            },
            [theme.fn.smallerThan('sm')]: {
                padding: "10px",
            },
        },
        button: {
            borderRadius: "20px",
            marginTop: "20px",
            width: "139px",
            backgroundColor: "white",
            [theme.fn.smallerThan('sm')]: {
                marginTop: "5px",
            },
            '&:not([data-disabled]):hover': {
                background: "white",
                borderColor: "none",
            }
        },
        carousel_image: {
            // width: "300px",
            [theme.fn.smallerThan('sm')]: {
                width: "200px",
            },
        },
        heading: {
            marginTop: "20px",
            color: "white",
            ...typography.headings.en.h1,
            [theme.fn.smallerThan('md')]: {
                ...typography.headings.en.h3,
            },
            [theme.fn.smallerThan('xs')]: {
                ...typography.headings.en.h6,
                marginTop: "0px",
            },
        },
        subHeading: {
            color: "white",
            marginTop: "10px",
            ...typography.paragraph[i18nStore.getCurrentLanguage()].p2,
            [theme.fn.smallerThan('xs')]: {
                ...typography.headings.en.p7,
                marginTop: "5px",
            },
        }
    }))
}