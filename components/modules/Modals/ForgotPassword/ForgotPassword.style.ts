import { useStores } from '@/models';
import { createStyles } from '@mantine/core';
export const createStyle = () =>{
  const {i18nStore} = useStores();
  return(
    createStyles((theme) => ({
      loader: {
        position: "absolute",
        margin: "auto",
        width: "20%",
        height: "20%",
        [theme.fn.smallerThan('md')]: {
          width: '15%',
        },
      },
      iconBox: {
        cursor: 'pointer',
        borderRadius: '100%',
      },
      rightSection: {
        right: i18nStore.isRTL ? "88%" : "",
      },
      input: {
        textAlign: i18nStore.isRTL ? "right" : "left",
        padding: " 0px 10px"
      }
    }))

  )
}