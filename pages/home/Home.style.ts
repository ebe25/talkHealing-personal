import { createStyles } from '@mantine/core';
import { useStores } from '@/models';

export const createStyle = () => {
    const { i18nStore } = useStores()

    return createStyles((theme) => ({
        container: {
            maxWidth: "100%",
            width: "1520px",
            margin: 0,
            padding: 0
        },
        homePage: {
            flexDirection: "column",
            gap: "40px",
            padding: "50px 100px",
            [theme.fn.smallerThan('sm')]: {
                padding: "50px",
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
        ProductSectionsCard: {
            justifyContent: "space-between",
            marginTop: "20px",
            gap: "10px",
            flexWrap: "wrap",
            [theme.fn.smallerThan('xs')]: {
                justifyContent: "center",
            },
        }
    }))
}