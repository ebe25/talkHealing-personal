import { createStyles } from '@mantine/core';
import {typography } from "@/themes/Mantine/typography";

export default createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginTop: "50px",
    ...typography.headings.en.h2,
    // [theme.fn.smallerThan('md')]: {
    //   fontSize: 50,
    // },
  },
}));
