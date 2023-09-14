import { createStyles } from '@mantine/core';
import { useStores } from '@/models';
import { typography } from "@/themes/Mantine/typography";

export const createStyle = () => {
    const { i18nStore } = useStores()

    return createStyles((theme) => ({
        containerBox: {
            height: "480px",
            width: "480px",
            marginLeft: "15%",
            marginTop: "-1%",
            borderRadius: "30px",
            backgroundColor: theme.white,
            boxShadow: `5px 10px ${theme.colors.gray[0]}`,
            position: "absolute",
            zIndex: 10000,
            alignItems: "center",
            padding: "20px",
            gap: "20px",
            flexWrap: "wrap",
            [theme.fn.smallerThan('lg')]: {
                padding: "15px",
            },
            [theme.fn.smallerThan('sm')]: {
                justifyContent: "center",
            },
        },
        cursor: {
            cursor: "pointer"
        }
    }))
}