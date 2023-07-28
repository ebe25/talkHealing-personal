import { createStyles } from '@mantine/core';
import { Images } from '../../public/index';
import { useStores } from '@/models';

export const createStyle = () => {
  const { i18nStore } = useStores()

  return createStyles((theme) => ({
    container: {
      width: '100%',
      height: '100vh',
      alignItems: 'center',
      backgroundImage: 'url( ' + `${Images.bg_Img}` + '  )',
      backgroundSize: '100%',
      [theme.fn.smallerThan('md')]: {
        padding: '20px',
      },
    },
    link: {
      cursor: "pointer",
      textDecoration: "none"
    },
    rightSection: {
      right: i18nStore.isRTL ? "88%" : "",
    },
  facebookIconBox: {
    width: "40px",
    height: "40px",
    borderRadius: "100%",
    border: `1px solid ${theme.colors.gray[4]}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    '&:not([data-disabled]):hover': { 
      background: theme.colors.gray[0], 
    }
  },
  input: {
      textAlign: i18nStore.isRTL ? "right" : "left",
      padding: " 0px 10px"
    }
}))
}
