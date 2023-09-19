import { createStyles } from '@mantine/core';
import { useStores } from '@/models';

export const createStyle = () => {
    const { i18nStore } = useStores()

    return createStyles((theme) => ({
        control: {
            width: "10px",
            height: "10px",
            margin: "-5px -50px 0px -30px",
            [theme.fn.smallerThan('xs')]: {
                margin: "-2px -30px 0px -30px",
            }
        },
        crouselSlide: {
            display: "flex",
            justifyContent: "center"
        },
        slideBox: {
            border: "solid 2px #E9EAE9",
            width: "100px",
            padding: "5px 10px",
            marginLeft:"25px",
            borderRadius: "10px",
            justifyContent: "center",
            alignItems: "center",
            cursor:"pointer"
        }
    }))
}