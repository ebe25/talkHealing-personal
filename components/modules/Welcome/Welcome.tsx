import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './Welcome.styles';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { useMantineTheme } from '@mantine/core';
import { IconGalleryItem } from '@/components/elements/IconGalleryItem/IconGalleryItem';
import { Input } from '@/components/elements/Input/Input';
import { Selectbox } from '@/components/elements/Selectbox/Selectbox';
import { SearchInput } from '@/components/elements/SearchInput/SearchInput';

let data = ['cv','vffv']

export function Welcome() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span">
          Mantine
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        This starter Next.js project includes a minimal setup for server side rendering, if you want
        to learn more on Mantine + Next.js integration follow{' '}
        <Anchor href="https://mantine.dev/guides/next/" size="lg">
          this guide
        </Anchor>
        . To get started edit index.tsx file.
      </Text>
        <BaseText color={"red"} txtkey="addKidDetails.editKidDetails" />
        <IconGalleryItem heading={"heade"} />
        <Selectbox data={data} />
        <SearchInput style={{width:"549px"}}/>
        {/* <Input  /> */}
    </>
  );
}
