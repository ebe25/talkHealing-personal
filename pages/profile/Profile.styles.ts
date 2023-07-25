import { createStyles } from '@mantine/core';
import { typography } from '@/themes/Mantine/typography';

export const createStyle = () => {

  return createStyles((theme) => ({
    tab: {
      ...theme.fn.focusStyles(),
      color: theme.colors.gray[6] ,
      marginTop: "30px",
      width:"99px",
      height:"38px",
      borderRadius: "33px",
      border:"none",
      backgroundColor: "transparent",
      ...typography.buttonText.en.b4,
      padding: "10px 18px 10px 18px",
      cursor: 'pointer',
      fontSize: theme.fontSizes.sm,
      display: 'flex',
      alignItems: 'center',
  
      '&:hover': {
          backgroundColor: theme.colors.blue[9],
        borderColor: "none",
        color: theme.colors.blue[7],
      },
      '&:disabled': {
          opacity: 0.5,
          cursor: 'not-allowed',
      },
  
      '&:not(:first-of-type)': {
        borderLeft: 0,
      },
      '&[data-active]': {
        backgroundColor: theme.colors.blue[9],
        borderColor: "none",
        color: theme.colors.blue[7],
      },
    },
    tabsList: {
      display: 'flex',
      border:"none"
    },
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      marginTop: '50px',
      ...typography.headings.en.h2,
    },
    deleteAndLogout: {
      marginTop: '',
      [theme.fn.smallerThan('xs')]: {
        marginTop: '10px',
      },
    },
  }));
};
