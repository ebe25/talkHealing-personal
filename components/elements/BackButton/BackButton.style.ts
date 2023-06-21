import { createStyles } from '@mantine/core';
import {typography } from "@/themes/Mantine/typography";

export default createStyles((theme) => ({
      filled: {
        ...typography.buttonText.en.b2,
        background : theme.colors.blue[5],
        borderRadius: '44px',
      }
}));