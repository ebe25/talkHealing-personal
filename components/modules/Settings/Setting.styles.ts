import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  container: {
    marginTop: "35px",
    border: `1px solid ${theme.colors.gray[2]} `,
    padding: "40px",
    borderRadius: "20px",
    [theme.fn.smallerThan('xs')]: {
      padding: "10px",
    },
  },
  mantineInputRightSection:{
    cursor: "pointer",
    marginRight: "50px",
  },
  passwordInput:{
    borderRadius: "34px",
  },
  grid:{
    marginTop: "40px",
    [theme.fn.smallerThan('md')]: {
      marginTop: "20px",
    },
  },
  imageFlex:{
    display: "flex",
    [theme.fn.smallerThan('xs')]: {
    width:"100%",
    justifyContent: "center",
    }
  },
  changeButton:{
    width :"125px",
    [theme.fn.smallerThan('xs')]: {
      width:"45%",
    }
  }
}));
