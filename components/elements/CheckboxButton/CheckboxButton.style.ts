import { createStyles } from '@mantine/core';
import {typography } from "@/themes/Mantine/typography";

export const createStyle = (
  langCode: "en" | "ar",
) => {

  return createStyles((theme) => ({
    checkbox: {
        ...typography.inputFieldText.en.i2,
        background : theme.colors.gray[2],
        borderRadius: '34px',
      },
    }
))}