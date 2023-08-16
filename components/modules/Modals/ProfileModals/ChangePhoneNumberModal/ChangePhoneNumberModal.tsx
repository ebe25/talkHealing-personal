// react and nextb import
import React from 'react';
// mantine component
import { Center, Flex, Image, Select, Stack, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
//styles component
import {createStyle} from './ChangePhoneNumberModal.styles';
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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { boilerPlateStyles } from '@/utils/styles/styles';


const changePasswordSchema = yup.object({
  phone: yup.string().required('Required phone number'),
  country_code: yup.string().required('Required country code'),
})

export const ChangePhoneNumberModal = (props: { opened?: any; onClose?: any }) => {
  const { i18nStore } = useStores();
  const useStyles=createStyle()
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const {
    register,
    handleSubmit,
    reset,
    setValue,

    formState: { errors, isValid }
  } = useForm({
    defaultValues: {
      phone: "",
      country_code: "+966",
    },
    resolver: yupResolver(changePasswordSchema)
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

  const handlePasswordChange = (values:any) => {
    console.log(values)
      props.onClose();
      reset();
      open();
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
          reset();
        }}
        withCloseButton={false}
      >
        <form onSubmit={handleSubmit(handlePasswordChange)}>
          <Flex direction={i18nStore.isRTL?"row-reverse":"row"} justify={'space-between'} align={'center'}>
            <BaseText
              txtkey="profile.modal.changePhoneNumber"
              style={typography.headings[i18nStore.getCurrentLanguage()].h6}
              color={theme.colors.dark[8]}
            />

            <Image
              onClick={() => {
                props.onClose();
                reset();
              }}
              style={boilerPlateStyles.cursor}
              src={Images.close_modal_icon}
              alt="close_modal_icon"
              width={'14px'}
              height={'14px'}
            />
          </Flex>

          <BaseText
            ta={i18nStore.isRTL?"right":"left"}
            my={"38px"}
            txtkey="profile.modal.paraPhoneNumber"
            style={typography.paragraph[i18nStore.getCurrentLanguage()]['p1.5']}
            color={theme.colors.gray[6]}
            />
          <Stack>
            <BaseText
              className={classes.align}
              txtkey="profile.modal.countryCode"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Select
                  searchable
                  hoverOnSearchChange={false}
                  placeholder="+966"
                  style={typography.label[i18nStore.getCurrentLanguage()].l1}
                  classNames={{ rightSection: classes.rightSection,
                    input: classes.input
                  }}
                  w={"100%"}
                  variant='filled'
                  radius={"xl"}
                  error = {errors.country_code?.message}
                  // size="lg"
                   data={countryLists}
                   {...register("country_code")}
                   onChange={(event:any) => {
                    setValue("country_code", event)
                    }}
                />
          </Stack>
          <Stack
            mt={"lg"}
          >
            <BaseText
              className={classes.align}
              txtkey="profile.phoneNumber"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Input
               inputvalue = {register('phone')}
                style_variant={'inputText2'}
                type='number'
                inputMode='numeric' 
                variant='filled'
                component={'input'} 
                classNames={{
                  input: classes.input
                }}
                error = {errors.phone?.message}
                placeholder={`${translate('profile.phoneNumber')}`}
            />
          </Stack>
          <BaseButton
            mt={'80px'}
            w={'100%'}
            h={'40px'}
            type='submit'
            style_variant={ isValid?  'filled' :"disabled" }
            color_variant={isValid ?'blue':"gray"}
          >
            <BaseText txtkey="global.button.continue" />
          </BaseButton>
        </form>
      </BaseModal>
      <ChangePhoneNumberOTPModal opened={opened} onClose={close} />
    </>
  );
};
