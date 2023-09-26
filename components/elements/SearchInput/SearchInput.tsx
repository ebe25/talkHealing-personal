import { Box, Input, TextInputProps } from '@mantine/core';
import { PolymorphicComponentProps } from '@mantine/utils';
import { IconSearch } from '@tabler/icons-react';
import { createStyle } from './SearchInput.style';

interface BaseSearchInput extends PolymorphicComponentProps<'input', TextInputProps> {
  placeholder?: string;
  click?: any;
}

export const SearchInput = (props: BaseSearchInput) => {
  const useStyles = createStyle();
  const { classes } = useStyles();
  return (
    <Input
      className={classes.mainBox}
      rightSection={<Box className={classes.searchIcon} onClick={props.click}><IconSearch width={22} height={22} /></Box>}
      placeholder={props.placeholder}
      radius="lg"
      {...props}
    />
  );
};
