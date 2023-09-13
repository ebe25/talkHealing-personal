import { Input, TextInputProps } from '@mantine/core';
import { PolymorphicComponentProps } from '@mantine/utils';
import { IconSearch } from '@tabler/icons-react';
import { createStyle } from './SearchInput.style';

interface BaseSearchInput extends PolymorphicComponentProps<'input', TextInputProps> {
  placeholder?: string;
  // style?: any;
}

export const SearchInput = (props: BaseSearchInput) => {
  const useStyles = createStyle('en');
  const { classes } = useStyles();
  return (
    <Input
      className={classes.mainBox}
      rightSection={<IconSearch width={22} height={22} />}
      placeholder={props.placeholder}
      radius="lg"
      {...props}
    />
  );
};
