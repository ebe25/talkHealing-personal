import { createStyles } from '@mantine/core';
import {typography } from "@/themes/Mantine/typography";

export default createStyles((theme) => ({
      text: {
        ...typography.paragraph.en.p2,
        color: theme.colors.dark[7],
      },
    }
))