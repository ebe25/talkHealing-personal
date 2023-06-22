import { Input ,TextInputProps} from '@mantine/core';
import { PolymorphicComponentProps } from '@mantine/utils';
import { IconSearch } from '@tabler/icons-react';

interface BaseSearchInput extends PolymorphicComponentProps<'input', TextInputProps> {
  placeholder?:string;
  // style?: any;
}

export const SearchInput = (props: BaseSearchInput ) => {
  
    return (
    <Input
      icon={<IconSearch />}
      placeholder={props.placeholder}
      radius="md"
      {...props}
    />
  );
}