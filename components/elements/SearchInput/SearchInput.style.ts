import { createStyles } from '@mantine/core';
import {typography } from "@/themes/Mantine/typography";

export default createStyles((theme) => ({
      mainBox: {
        width: "631px",
        height: "34px",
        color: theme.colors.gray[6],
        ...typography.paragraph.en.p2,
      },
    }
))