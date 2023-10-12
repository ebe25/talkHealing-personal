import { Container, Flex, useMantineTheme } from '@mantine/core';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { SearchInput } from '@/components/elements/SearchInput/SearchInput';
import { createStyle } from './PageSearch.style';

export default function PageSearchBox() {
  const theme = useMantineTheme();
  const useStyles = createStyle();
  const { classes } = useStyles();
  return (
    <Container className={classes.searchInputContainer}>
      <Flex justify="space-between" align="center">
        <BaseText color_variant={theme.colors.black[9]} fontWeight_variant={700} size_variant="lg">
          219 researches
        </BaseText>
        <SearchInput />
      </Flex>
    </Container>
  );
}
