import { useMantineTheme, Container } from '@mantine/core';
import { createStyle } from './Community.style';
import { useStores } from '@/models';

export default function Community() {
  const theme = useMantineTheme();
  const { i18nStore } = useStores();
  const useStyles = createStyle();
  const { classes } = useStyles();
  return (
    <Container maw="100%" className={classes.container}>
      <h1>Community</h1>
    </Container>
  );
}
