import { createStyles } from '@mantine/core';
import { useStores } from '@/models';
import { typography } from "@/themes/Mantine/typography";

export const createStyle = () => {
    const { i18nStore } = useStores()

    return createStyles((theme) => ({
        containerBox: {
            height: "318px",
            width: "100%",
            margin: "0px",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "21px 134px 47px 135px",
            gap: "20px",
            flexWrap: "wrap",
            [theme.fn.smallerThan('lg')]: {
                padding: "25px 34px 30px 33px",
            },
            [theme.fn.smallerThan('sm')]: {
                justifyContent: "center",
                padding: "25px",
            },
            [theme.fn.smallerThan('xs')]: {
                display: "none"
            },
        },
        containerfirst: {
            justifyContent: "space-between",
            flexDirection: "column",
            height: "100%",
            // width: "100%",
            padding: "55px 10px 20px 0px",
            gap: "60px",
        },
        avatar: {
            justifyContent: "center",
            alignContent: "center",
            width: "30px",
            cursor: "pointer",
            height: "30px",
            borderRadius: "100%",
            border: `1px solid ${theme.colors.gray[0]}`,
            color: theme.colors.indigo[7],
            ...typography.headings[i18nStore.getCurrentLanguage()].h5
        },
        logoBox: {
            flexDirection: "column",
            gap: "20px"
        },
        copyrightName: {
            color: theme.colors.gray[6],
            ...typography.label[i18nStore.getCurrentLanguage()].l11
        },
        containerSecond: {
            display: "flex",
            flexDirection: "column",
            gap: "26px",
            height: "100%",
            padding: "60px 20px 25px 20px"
        },
        logoImage: {
            width: "400px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            [theme.fn.smallerThan('lg')]: {
                width: "200px",
            },
        },
        cursor: {
            cursor: "pointer"
        },
        mobileFooter: {
            width: "100%",
            padding: "10px",
            justifyContent: "center",
            [theme.fn.largerThan('xs')]: {
                display: "none",
            },
        },
        containerFirstMobile: {
            justifyContent: "space-between",
            height: "100%",
            padding: "5px",
            gap: "40px",
        },
        containerSecondMobile: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginTop: "10px"
        },
    }))
}