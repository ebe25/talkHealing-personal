import { createStyles } from '@mantine/core';
import {typography } from "@/themes/Mantine/typography";

export default createStyles((theme) => ({
      filled_blue: {
        ...typography.buttonText.en.b2,
        background : theme.colors.blue[5],
        borderRadius: '44px',
      },
      filled_red: {
        ...typography.buttonText.en.b2,
        background : theme.colors.red[8],
        borderRadius: '44px',
      },
      subtle: {
        ...typography.buttonText.en.b4,
        background : theme.white,
        borderRadius: '44px',
      },
      disabled: {
        ...typography.buttonText.en.b2,
        background : theme.colors.gray[2],
        borderRadius: '44px',
      },
      outline:{
        ...typography.buttonText.en.b3,
        background : theme.colors.blue[4],
        borderRadius: '42px',
        borderColor: theme.colors.green[0],
        borderWidth: 1,
      }
}));