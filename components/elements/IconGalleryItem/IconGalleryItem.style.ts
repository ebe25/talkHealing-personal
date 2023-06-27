import { createStyles } from '@mantine/core';
import {typography } from "@/themes/Mantine/typography";

export const createStyle = (
  langCode: "en" | "ar",
) => {

  return createStyles((theme) => ({
      mainBox: {
        width:"170px",
        height:"100px" ,
        gap:"17px",
        justifyContent:"center"
      },
      text:{
        ...typography.label[langCode].l1,
        color: theme.colors.dark[7],
      }
    }
))}