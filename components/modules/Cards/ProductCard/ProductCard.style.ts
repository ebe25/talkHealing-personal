import { createStyles } from '@mantine/core';
import { useStores } from '@/models';

export const createStyle = () => {
    const { i18nStore } = useStores()

    return createStyles((theme) => ({
        container: {
            height: "263px",
            backgroundColor: "#E9EAE9",
            borderRadius: "16px",
            position:"relative"
        },
        imageBox: {
            backgroundColor: "white",
            borderRadius: "5px",
            position: "absolute",
            zIndex:10001,
            left: "131px",
            top: "0px",
            alignItems: "center",
            justifyContent: "center",
            width: "56px",
            height: "31px",
        },
        companyName: {
            justifyContent: "center",
            borderRadius: "15px",
            border: "solid 2px #E9EAE9",
            width: "56px",
            height: "30px"
        },
        location: {
            gap: "3px",
            borderRadius: "15px",
            border: "solid 2px #E9EAE9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "95px",
            height: "30px"
        }
    }))
}