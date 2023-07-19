// react and nextb import
import React from 'react';
// mantine component
import { useForm } from '@mantine/form';
import { Box, Flex, Image, Select, useMantineTheme } from '@mantine/core';
// internals components
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseModal } from '@/components/elements/BaseModal/BaseModal';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '../../../../../themes/Mantine/typography';
// stores import
import { useStores } from '@/models';
// others import
import { Images } from '@/public';
import { translate } from '@/i18n';
import { useDisclosure } from '@mantine/hooks';
import { FinalModal } from '../FinalModal/FinalModal';
import { Input } from '@/components/elements/Input/Input';
//external
import { Country, State, City }  from 'country-state-city';

export const AddressModal = (props: { opened?: any; onClose?: any }) => {
  const { i18nStore } = useStores();
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const address = useForm({
    initialValues: {
      addressOne:"",
      addressTwo:"",
      country:"",
      state:"",
      district:"",
      code:""
    },
    validate: {
      addressOne: (value) => {
        if (value.trim().length >0) return translate('profile.modal.passwordLength');
      },
      addressTwo: (value) => {
        if (value.trim().length > 0) return translate('profile.modal.passwordLength');
      },
      country: (value) => {
        if (value.trim().length > 0) return translate('profile.modal.passwordLength');
      },
      state: (value) => {
        if (value.trim().length > 0) return translate('profile.modal.passwordLength');
      },
      district: (value) => {
        if (value.trim().length > 0) return translate('profile.modal.passwordLength');
      },
      code: (value) => {
        if (value.trim().length > 0) return translate('profile.modal.passwordLength');
      },
    },
  });

  const handlePasswordChange = () => {
    let results = address.validate();
    if (results.hasErrors) return;
    if (!address.isValid()) return;
    else {
      props.onClose();
      address.reset();
      open();
    }
  };

  let countryLists: any = []
  
  {
    Country.getAllCountries().map((key) => {
      countryLists.push({
        label: key.name,
        value: key.name,
      });
    });
  }
  const countryCode = Country.getAllCountries().filter((country) => {
    if(country.name === address.values.country)
    return(country.isoCode
      )
    }).map((country)=>country.isoCode)

  let stateLists: any = []
  {
    State.getStatesOfCountry(countryCode[0]).map((key) => {
      stateLists.push({
        label: key.name,
        value: key.name,
      });
    });
  }
  const countryStateCode = State.getStatesOfCountry(countryCode[0]).filter((country) => {
    if(country.name === address.values.state )
    return(country.isoCode)
  }).map((code)=>code.isoCode)
  let stateCityLists: any = []
  {
    City.getCitiesOfState(countryCode[0], countryStateCode[0]).map((key) => {
      stateCityLists.push({
        label: key.name,
        value: key.name,
      });
    });
  } 
  
  return (
    <>
      <BaseModal
        size={'sm'}
        padding={'30px'}
        radius={'xl'}
        opened={props.opened}
        onClose={() => {
          props.onClose();
          address.reset();
        }}
        withCloseButton={false}
      >
        <form onSubmit={address.onSubmit((values) => console.log(values))}>
          <Flex justify={'space-between'} align={'center'}>
            <BaseText
              txtkey="profile.addressButton"
              style={typography.headings[i18nStore.getCurrentLanguage()].h6}
              color={theme.colors.dark[8]}
            />

            <Image
              onClick={() => {
                props.onClose();
                address.reset();
              }}
              src={Images.close_modal_icon}
              alt="close_modal_icon"
              width={'14px'}
              height={'14px'}
            />
          </Flex>

          <Box mt={'30px'}>
            <BaseText
              txtkey="profile.addressModal.country"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Select
                  mt={"xs"}
                  searchable
                  hoverOnSearchChange={false}
                  placeholder={`${translate('profile.addressModal.country')}`}
                  style={typography.label[i18nStore.getCurrentLanguage()].l1}
                  styles={{ rightSection: { pointerEvents: "none" } }}
                  w={"100%"}
                  variant='default'
                  radius={"xl"}
                  // size="lg"
                  data={countryLists} 
                  {...address.getInputProps("country")}
                />
          </Box>
          <Box mt={'20px'}>
            <BaseText
              txtkey="profile.addressModal.state"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
                <Select
                  mt={"xs"}
                  searchable
                  hoverOnSearchChange={false}
                  placeholder={`${translate("profile.addressModal.state")}`}
                  style={typography.label[i18nStore.getCurrentLanguage()].l1}
                  // rightSection={
                  //   <Image
                  //     src={Images.signup_chevron_icon}
                  //     height={"6px"}
                  //     width={"11px"}
                  //     alt="image"
                  //   />
                  // }
                  styles={{ rightSection: { pointerEvents: "none" } }}
                  w={"100%"}
                  variant='default'
                  radius={"xl"}
                  // size="lg"
                  data={stateLists}
                  {...address.getInputProps("state")}
                />
          </Box>
          <Box mt={'20px'}>
            <BaseText
              txtkey="profile.addressModal.district"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Select
                  mt={"xs"}
                  searchable
                  hoverOnSearchChange={false}
                  placeholder={`${translate("profile.addressModal.district")}`}
                  style={typography.label[i18nStore.getCurrentLanguage()].l1}
                  // rightSection={
                  //   <Image
                  //     src={Images.signup_chevron_icon}
                  //     height={"6px"}
                  //     width={"11px"}
                  //     alt="image"
                  //   />
                  // }
                  styles={{ rightSection: { pointerEvents: "none" } }}
                  w={"100%"}
                  variant='default'
                  radius={"xl"}
                  // size="lg"
                  data={stateCityLists}
                  {...address.getInputProps("district")}
                />
          </Box>
          <Box mt={'20px'}>
            <BaseText
              txtkey="profile.addressModal.code"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Input
              mt={"xs"}
              inputMode='numeric'
              placeholder={`${translate('profile.addressModal.code')}`}
              style_variant={'inputText2'}
              component={'input'}
              {...address.getInputProps('code')}
            />
          </Box>
          <Box mt={'20px'}>
            <BaseText
              txtkey="profile.addressModal.label1"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Input
              mt={"xs"}
              placeholder={`${translate('profile.addressModal.label1')}`}
              style_variant={'inputText2'}
              component={'input'}
              {...address.getInputProps('addressOne')}
            />
          </Box>
          <Box mt={'20px'}>
            <BaseText
              txtkey="profile.addressModal.label2"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Input
              mt={"xs"}
              placeholder={`${translate('profile.addressModal.label2')}`}
              style_variant={'inputText2'}
              component={'input'}
              {...address.getInputProps('addressTwo')}
            />
          </Box>

          <BaseButton
            mt={'30px'}
            w={'100%'}
            h={'40px'}
            style_variant={!address.isValid() ? 'disabled' : 'filled'}
            color_variant={!address.isValid() ? 'gray' : 'blue'}
            onClick={handlePasswordChange}
          >
            <BaseText txtkey="global.button.save" />
          </BaseButton>
        </form>
      </BaseModal>
      <FinalModal opened={opened} onClose={close} para="profile.modal.passwordSuccessful" />
    </>
  );
};
