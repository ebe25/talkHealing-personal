import { createStyles } from '@mantine/core';
import { useStores } from '@/models';

export const createStyle = () => {
    const { i18nStore } = useStores()

    return createStyles((theme) => ({
        loader: {
            position: "absolute",
            margin: "auto",
            width: "20%",
            height: "20%"
        },
        rightSection: {
            right: i18nStore.isRTL ? "88%" : "",
        },
        input: {
            textAlign: i18nStore.isRTL ? "right" : "left",
            padding: " 0px 10px"
        }
    }))
}