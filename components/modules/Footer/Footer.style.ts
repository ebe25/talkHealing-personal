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
            height: "30px",
            borderRadius: "100%",
            border: `1px solid ${theme.colors.gray[0]}`,
            color: theme.colors.indigo[7],
            ...typography.headings.en.h5
        },
        logoBox: {
            flexDirection: "column",
            gap: "20px"
        },
        copyrightName: {
            color: theme.colors.gray[6],
            ...typography.label.en.l11
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
        }
    }))
}