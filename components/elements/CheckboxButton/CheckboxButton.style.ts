import { createStyles } from '@mantine/core';
import {typography } from "@/themes/Mantine/typography";

export const createStyle = (
  langCode: "en" | "ar",
  color_variant: "gray"
) => {

  return createStyles((theme) => ({
    checkbox: {
        ...typography.inputFieldText[langCode].i2,
        background : theme.colors[color_variant][2],
        borderRadius: '34px',
      },
    }
))}