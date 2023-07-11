import { createStyles } from '@mantine/core';
import { Images } from '../../public/index';
import {typography } from "@/themes/Mantine/typography";

export default createStyles((theme) => ({
  container: {
    width: '100%',
    height: '100vh',
    alignItems: 'center',
    // justifyContent: 'center',
    // padding:"100px",
    backgroundImage: 'url( ' + `${Images.bg_Img}` + '  )',
    backgroundSize: '100%',
    [theme.fn.smallerThan('md')]: {
      padding: '20px',
    },
  },
  link: {
    cursor:"pointer",
    textDecoration: "none"
  }
}));