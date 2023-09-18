import { createStyles } from '@mantine/core';
import { useStores } from '@/models';
import { typography } from "@/themes/Mantine/typography";

export const createStyle = () => {
    const { i18nStore } = useStores()

    return createStyles((theme) => ({
        containerBox: {
            height: "480px",
            width: "480px",
            borderRadius: "30px",
            alignItems: "center",
            padding: "20px",
            gap: "20px",
            flexWrap: "wrap",
            [theme.fn.smallerThan('lg')]: {
                padding: "15px",
            },
            [theme.fn.smallerThan('sm')]: {
                justifyContent: "center",
                height: "480px",
                padding: "4px",
                width: "300px",
            },
        },
        optionsBox: {
            width: "192px",
            padding: "0px 25px 0px 0px",
            [theme.fn.smallerThan('sm')]: {
                width: "100px",
                padding: "5px"
            },
        },
        options: {
            cursor: "pointer",
            marginTop: "10px",
            justifyContent: "space-between",
        },
        optionsText: {
            color: theme.colors.cyan[9],
            ":hover": {
                color: theme.colors.red[9],
            }
        },
        cursor: {
            cursor: "pointer"
        }
    }))
}