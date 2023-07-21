import { createStyles } from '@mantine/core';
import { Images } from '../../public/index';

export default createStyles((theme) => ({
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
}));