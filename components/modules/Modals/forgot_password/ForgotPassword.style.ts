import { createStyles } from '@mantine/core';
import {typography } from "@/themes/Mantine/typography";

export default createStyles((theme) => ({
  loader :{
    position: "absolute",
    margin:"auto",
    width: "20%",
    height: "20%"
  },
  iconBox :{
    cursor: 'pointer',
    borderRadius: '100%',
  }
}));