import { Input ,TextInputProps} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export const SearchInput = (props: TextInputProps ) => {
  
    return (
    <Input
      icon={<IconSearch />}
      placeholder="Your email"
      radius="md"
      {...props}
    />
  );
}