import { createStyles } from '@mantine/core';
import { useStores } from '@/models';

export const createStyle = () => {
    const { i18nStore } = useStores()

    return createStyles((theme) => ({
        container: {
            flexDirection: "column",
            gap: "10px",
            width: "200px",
            height: "393px",
            [theme.fn.smallerThan('md')]: {
                width: "180px",
                height: "353px",
            },
            [theme.fn.smallerThan('xs')]: {
                width: "135px",
                height: "320px",
            },
        },
        productIcon: {
            height: "263px",
            // backgroundColor: "#E9EAE9",
            borderRadius: "16px",
            position: "relative"
        },
        imageBox: {
            backgroundColor: theme.white,
            borderRadius: "5px",
            position: "absolute",
            zIndex: 100,
            left: "131px",
            top: "0px",
            alignItems: "center",
            justifyContent: "center",
            width: "56px",
            height: "31px",
            [theme.fn.smallerThan('xs')]: {
                left: "71px",
            },
        },
        companyName: {
            justifyContent: "center",
            borderRadius: "13px",
            border: `solid 2px ${theme.colors.gray[2]}`,
            padding: "5px 8px",
        },
        location: {
            gap: "3px",
            borderRadius: "15px",
            border: `solid 2px ${theme.colors.gray[2]}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "5px 8px",
        },
        cursor: {
            cursor: "pointer"
        }
    }))
}