// react and nextb import
import React from 'react';
// mantine component
import { Flex, Image, Select, Stack, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
// internals components
import { ChangePhoneNumberOTPModal } from '../ChangePhoneNumberOTPModal/ChangePhoneNumberOTPModal';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseModal } from '@/components/elements/BaseModal/BaseModal';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { Input } from '@/components/elements/Input/Input';
import { typography } from '../../../../../themes/Mantine/typography';
// stores import
import { useStores } from '@/models';
// others import
import { Images } from '@/public';
import { translate } from '@/i18n';
// external 
import { Country }  from 'country-state-city';

export const ChangePhoneNumberModal = (props: { opened?: any; onClose?: any }) => {
  const { i18nStore } = useStores();
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const changePhoneNumber = useForm({
    initialValues: {
      phone: "",
      country_code: "+966",
    },
    validate: {
      phone: (value) => {
        if (value.toString().length == 0)
          return translate("profile.modal.phoneNumberLengthError");
      },
      country_code: (value) => {
        if (!value) return "Invalid Country Code";
      },
    },
  });

  let countryLists: any = []
  
  {
    Country.getAllCountries().map((key) => {
      countryLists.push({
        label: "+"+ key.phonecode+" "+key.name,
        value: "+"+ key.phonecode+" "+key.name,
      });
    });
  }

  const handlePasswordChange = () => {
    let results = changePhoneNumber.validate();
    if (results.hasErrors) return;
    if (!changePhoneNumber.isValid()) return;
    else {
      props.onClose();
      changePhoneNumber.reset();
      open();
    }
  };

  return (
    <>
      <BaseModal
        size={'sm'}
        padding={'30px'}
        radius={'xl'}
        opened={props.opened}
        onClose={() => {
          props.onClose();
          changePhoneNumber.reset();
        }}
        withCloseButton={false}
      >
        <form onSubmit={changePhoneNumber.onSubmit((values) => console.log(values))}>
          <Flex justify={'space-between'} align={'center'}>
            <BaseText
              txtkey="profile.modal.changePhoneNumber"
              style={typography.headings[i18nStore.getCurrentLanguage()].h6}
              color={theme.colors.dark[8]}
            />

            <Image
              onClick={() => {
                props.onClose();
                changePhoneNumber.reset();
              }}
              src={Images.close_modal_icon}
              alt="close_modal_icon"
              width={'14px'}
              height={'14px'}
            />
          </Flex>
          <BaseText
            my={"38px"}
            txtkey="profile.modal.paraPhoneNumber"
            style={typography.paragraph[i18nStore.getCurrentLanguage()]['p1.5']}
            color={theme.colors.gray[6]}
          />
          <Stack>
            <BaseText
              txtkey="profile.modal.countryCode"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Select
                  searchable
                  hoverOnSearchChange={false}
                  placeholder="+966"
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
                  variant='filled'
                  radius={"xl"}
                  // size="lg"
                  data={countryLists}
                  {...changePhoneNumber.getInputProps("country_code")}
                />
          </Stack>
          <Stack
            mt={"lg"}
          >
            <BaseText
              txtkey="profile.phoneNumber"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Input
                style_variant={'inputText2'}
                type='number'
                inputMode='numeric' 
                variant='filled'
                component={'input'} 
                placeholder={`${translate('profile.phoneNumber')}`}
                {...changePhoneNumber.getInputProps('phone')}
            />
          </Stack>
          <BaseButton
            mt={'80px'}
            w={'100%'}
            h={'40px'}
            style_variant={ changePhoneNumber.isValid()?  'filled' :"disabled" }
            color_variant={ changePhoneNumber.isValid() ?'blue':"gray"}
            onClick={handlePasswordChange}
          >
            <BaseText txtkey="global.button.continue" />
          </BaseButton>
        </form>
      </BaseModal>
      <ChangePhoneNumberOTPModal opened={opened} onClose={close} />
    </>
  );
};
