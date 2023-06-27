import { createStyles } from '@mantine/core';
import {typography } from "@/themes/Mantine/typography";

export const createStyle = (
  langCode: "en" | "ar",
) => {

  return createStyles((theme) => ({
      mainBox: {
        width: "631px",
        height: "34px",
        color: theme.colors.gray[6],
        ...typography.paragraph[langCode].p2,
      },
    }
))}