import { createStyles } from '@mantine/core';
import {typography } from "@/themes/Mantine/typography";

export const createStyle = (
  langCode: "en" | "ar",
) => {

  return createStyles((theme) => ({
      inputText1: {
        ...typography.inputFieldText[langCode].i1,
        borderRadius : '34px'
      },
      inputText2: {
        ...typography.inputFieldText[langCode].i2,
        borderRadius : '34px'
      },
    }
))}