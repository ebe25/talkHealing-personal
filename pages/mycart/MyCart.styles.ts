import { createStyles } from '@mantine/core';
import { typography } from '@/themes/Mantine/typography';

export const createStyle = () => {

  return createStyles((theme) => ({
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      marginTop: '50px',
      ...typography.headings.en.h2,
    },
    subHeading: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      ...typography.headings.en.h2,
    },
  }));
};
