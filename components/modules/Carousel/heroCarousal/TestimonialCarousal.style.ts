import { createStyles } from '@mantine/core';
import { useStores } from '@/models';
import { typography } from '@/themes/Mantine/typography';


export const createStyle = () => {
  const { i18nStore } = useStores();

  return createStyles((theme) => ({
    indicator: {
      width: '16px',
      height: '16px',
      background: theme.colors.red,
      transition: 'width 250ms ease',
    },
    control: {
      width: '10px',
      height: '10px',
      margin: '-30px -50px 50px -50px',
      [theme.fn.smallerThan('xs')]: {
        margin: '-30px -40px 30px -40px',
      },
    },
    crouselSlide: {
      display: 'flex',
      justifyContent: 'center',
    },
    slideBox: {
      background: theme.colors.red,
      padding: '20px 52px',
      width: '100%',
      height: '88%',
      borderRadius: '28px',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      [theme.fn.smallerThan('md')]: {
        padding: '15px',
      },
      [theme.fn.smallerThan('sm')]: {
        padding: '10px',
      },
    },
    button: {
      borderRadius: '20px',
      marginTop: '20px',
      width: '139px',
      backgroundColor: theme.white,
      [theme.fn.smallerThan('sm')]: {
        marginTop: '5px',
      },
      '&:not([data-disabled]):hover': {
        background: theme.white,
        borderColor: 'none',
      },
    },
    carousel_image: {
      height: '150px',
      width: '122px',
      borderRadius: '16px',
      backgroundRepeat: 'no-repeat',
      objectFit: "contain",
      [theme.fn.smallerThan('sm')]: {
        width: '200px',
      },
    },
    heading: {
      marginTop: '20px',
      color: theme.white,
      ...typography.headings.en.h1,
      [theme.fn.smallerThan('md')]: {
        ...typography.headings[i18nStore.getCurrentLanguage()].h3,
      },
      [theme.fn.smallerThan('xs')]: {
        ...typography.headings[i18nStore.getCurrentLanguage()].h6,
        marginTop: '0px',
      },
    },
    subHeading: {
      color: theme.white,
      marginTop: '10px',
      ...typography.paragraph[i18nStore.getCurrentLanguage()].p2,
      [theme.fn.smallerThan('xs')]: {
        ...typography.headings[i18nStore.getCurrentLanguage()].p7,
        marginTop: '5px',
      },
    },
    testimonialCard: {
      width: '550px',
      height: '214px',
      borderRadius: '32px',
      background: theme.colors.white,
      boxShadow: '20px 14px 40px 0px rgba(0, 0, 0, 0.07)',
    },
    carousel_text:{
      padding:"20px"
    }
  }));
};
