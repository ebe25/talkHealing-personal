import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './Welcome.styles';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { useMantineTheme } from '@mantine/core';
import { IconGalleryItem } from '@/components/elements/IconGalleryItem/IconGalleryItem';
import { Input } from '@/components/elements/Input/Input';
import { Selectbox } from '@/components/elements/Selectbox/Selectbox';
import { SearchInput } from '@/components/elements/SearchInput/SearchInput';
import { Ratings } from '@/components/elements/Ratings/Ratings';
import { BackButton } from '@/components/elements/BackButton/BackButton';
import { BaseModal } from '@/components/elements/BaseModal/BaseModal';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import CheckboxButtonStyle from '@/components/elements/CheckboxButton/CheckboxButton.style';
import { BaseCheckbox } from '@/components/elements/CheckboxButton/CheckboxButton';
import { BasePasswordInput } from '@/components/elements/PasswordInput/PasswordInput';
import { useDisclosure } from '@mantine/hooks';
import { BaseRadioButton } from '@/components/elements/BaseRadioButton/RadioButton';


let data = ['cv', 'vffv'];

export function Welcome() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);

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
      <BaseButton style_variant={'filled'} color_variant={'blue'}> <BaseText txtkey="addKidDetails.editKidDetails" /></BaseButton>
      <BaseText color={'red'} txtkey="addKidDetails.editKidDetails" />
      <BasePasswordInput />
      <IconGalleryItem heading={"authentication.formText.name"} />
      <Selectbox data={data} />
      <SearchInput style={{ width: '549px' }} />
      <Ratings heading={'addKidDetails.kidDateOfBirthText'} />
      <BaseCheckbox ></BaseCheckbox>
      <BackButton> <BaseText txtkey="global.button.back" />  </BackButton>
      <BaseButton onClick={open} style_variant={'filled'} color_variant={'red'}> <BaseText txtkey="addKidDetails.nextButton" /></BaseButton>
       <BaseModal  withCloseButton={false} opened={opened} onClose={close}><BaseText txtkey="bookingForEvent.paymentProceedButtonText" /> </BaseModal>
      <Input component={"input"} type='text' styleName={'inputText1'} style={{width:"300px"}} />
      <form style={{display:"flex"}}>
        <label><BaseText txtkey="bookingForEvent.addOnPriceText" /></label>
      <BaseRadioButton />
      </form>
    </>
  );
}
