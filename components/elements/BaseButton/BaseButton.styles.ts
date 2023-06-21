import { createStyles } from '@mantine/core';
import {typography } from "@/themes/Mantine/typography";

export default createStyles((theme) => ({
    filled: {
        ...typography.buttonText.en.b2,
      },
      light: {
       
      },
      outlined: {
       
      },
      subtle: {
        ...typography.buttonText.en.b4,
      },
      disabled: {
        ...typography.buttonText.en.b2,
      }
}));