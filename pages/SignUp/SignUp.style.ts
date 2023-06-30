import { createStyles } from '@mantine/core';
import { Images } from '../../public/index';
// import {typography } from "@/themes/Mantine/typography";

export default createStyles((theme) => ({
  Container: {
    width: '100%',
    height: '100vh',
    // padding: '231px 135px 213px 135px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url( ' + `${Images.bg_Img}` + '  )',
    backgroundSize: '100%',
  },
}));