import { createStyles } from '@mantine/core';
import { useStores } from '@/models';
import { typography } from '@/themes/Mantine/typography';

export const createStyle = () => {
    const { i18nStore } = useStores()

    return createStyles((theme) => ({
        container: {
            maxWidth: "100%",
            width: "1520px",
            margin: 0,
            padding: 0,
        },
        homePage: {
            flexDirection: "column",
            justifyContent: "center",
            gap: "40px",
            padding: "0px 100px 50px 100px",
            [theme.fn.smallerThan('sm')]: {
                padding: "0px 50px 50px 50px",
            },
        },
        apparelIcon: {
            position: "relative",
            // width: "1170px",
            // height: "300px"
        },
        heading: {
            position: "absolute",
            color: theme.white,
            zIndex: 10001,
            top: "50%",
            left: "40%",
            ...typography.headings[i18nStore.getCurrentLanguage()].h1,
            [theme.fn.smallerThan('md')]: {
                top: "30%",
                left: "25%",
            },
            [theme.fn.smallerThan('xs')]: {
                top: "20%",
                left: "20%",
                ...typography.headings[i18nStore.getCurrentLanguage()].h5,
            },
        },
        productCard: {
            justifyContent: "space-between",
            marginTop: "20px",
            gap: "30px",
            flexWrap: "wrap",
            [theme.fn.smallerThan('xs')]: {
                justifyContent: "center",
            },
        },
        productSectionsCard: {
            justifyContent: "space-between",
            marginTop: "20px",
            gap: "10px",
            flexWrap: "wrap",
            [theme.fn.smallerThan('xs')]: {
                justifyContent: "center",
            },
        },
        control: {
            width: "10px",
            height: "10px",
            margin: "-5px -50px 0px -30px",
        },
        crouselSlide: {
            display: "flex",
            justifyContent: "center"
        },
        slideBox: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2px",
            cursor: "pointer",
            width:"150px",
        }
    }))
}