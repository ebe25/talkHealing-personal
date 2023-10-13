import { Container, Flex, useMantineTheme } from '@mantine/core';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { SearchInput } from '@/components/elements/SearchInput/SearchInput';
import { createStyle } from './PageSearch.style';

interface PageSearchBoxProps {
  num: number;
  type: string;
}

export default function PageSearchBox({ num, type }: PageSearchBoxProps) {
  const theme = useMantineTheme();
  const useStyles = createStyle();
  const { classes } = useStyles();
  return (
    <Container className={classes.searchInputContainer}>
      <Flex justify="space-between" align="center">
        <BaseText color_variant={theme.colors.black[9]} fontWeight_variant={700} size_variant="lg">
          {num} {type}
        </BaseText>
        <SearchInput />
      </Flex>
    </Container>
  );
}
