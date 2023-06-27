import { createStyles } from '@mantine/core';
import {typography } from "@/themes/Mantine/typography";

export const createStyle = (
  langCode: "en" | "ar",
) => {

  return createStyles((theme) => ({
      text: {
        ...typography.paragraph[langCode].p2,
        color: theme.colors.dark[7],
      },
    }
))}