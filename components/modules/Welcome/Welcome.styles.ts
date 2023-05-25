import { createStyles } from '@mantine/core';
import { PlusJakartaSansBold} from "@/themes/Mantine/fonts"

export default createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 100,
    fontWeight: 900,
    letterSpacing: -2,
    ...PlusJakartaSansBold.style,
    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },
}));
