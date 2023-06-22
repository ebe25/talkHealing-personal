import { createStyles } from '@mantine/core';
import {typography } from "@/themes/Mantine/typography";

export default createStyles((theme) => ({
  PasswordInput: {
    width:"370px",
    height: "44px",
    borderRadius: "34px",
    ...typography.paragraph.en.p2,
    color: theme.colors.gray[1]
  },
}));