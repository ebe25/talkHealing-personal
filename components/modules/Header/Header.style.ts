import { createStyles } from '@mantine/core';
import { useStores } from '@/models';

export const createStyle = () => {
    const { i18nStore } = useStores()

    return createStyles((theme) => ({
        containerBox: {
            height: "78px",
            width: "100%",
            backgroundColor: theme.colors.blue[4],
            margin: "0px",
        },
        container: {
            justifyContent: "center",
            height: "78px",
            width: "100%",
            padding: "0px 10px",
            alignItems: "center",
            gap: "20px",
            [theme.fn.smallerThan('sm')]: {
                padding: "2px",
                gap: "10px",
            },
            [theme.fn.smallerThan('xs')]: {
                display: "none"
            },
        },
        categories: {
            width: "140px",
            border: `1px solid ${theme.colors.blue[9]}`,
            borderRadius: "20px",
            justifyContent: "center",
            padding: "5px",
            alignItems: "center",
            cursor: "pointer",
            gap: "10px"
        },
        notification: {
            borderLeft: "2px solid #FFFFFF",
            height: "28px",
            paddingLeft: "10px",
            cursor:"pointer",
            justifyContent: "center",
            alignItems: "center",
        },
        picBox: {
            marginTop: "5px",
            justifyContent: "center",
            cursor:"pointer",
            gap: "8px"
        },
        mobileMenu: {
            justifyContent: "space-between",
            height: "78px",
            width: "100%",
            padding: "0px 10px",
            alignItems: "center",
            gap: "20px",
            [theme.fn.largerThan('xs')]: {
                display: "none",
            },
        },
        cursor:{
            cursor:"pointer"
        }
    }))
}