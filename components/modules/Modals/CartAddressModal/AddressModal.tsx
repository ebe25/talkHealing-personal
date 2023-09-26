// react and nextb import
import React, { useState } from 'react';
// mantine component
import { useForm } from '@mantine/form';
import { Box, Flex, Image, Select, useMantineTheme } from '@mantine/core';
// styles components
import { createStyle } from './AddressModal.styles';
// internals components
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseModal } from '@/components/elements/BaseModal/BaseModal';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '../../../../themes/Mantine/typography';
// stores import
import { useStores } from '@/models';
// others import
import { Images } from '@/public';
import { translate } from '@/i18n';
import { useDisclosure } from '@mantine/hooks';
import { Input } from '@/components/elements/Input/Input';
//external
import { Country, State, City } from 'country-state-city';
import { boilerPlateStyles } from '@/utils/styles/styles';
import { AddressType } from '@/models/modules/user/schemas';
import { SuccessfulModal } from '../ProfileModals/SuccessfulModal/SuccessfulModal';

interface modalData {
  address_line1: '';
  address_line2: '';
  country: '';
  state: '';
  district: '';
  code: '';
}

export const AddressModal = (props: {
  opened?: any;
  onClose?: any;
  modalHeading?: any;
  isEdit?: boolean;
  id?: string;
  setAddressRecall?: any;
  data?: modalData;
  setAddressId?: any;
  editAddress?: AddressType
}) => {
  const { i18nStore } = useStores();
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const useStyles = createStyle();
  const [loader, setLoader] = useState(false);
  // const [error, setError] = useState("");
  const { classes } = useStyles();
  const address = useForm({
    initialValues: {
      name:"",
      phoneNumber:"",
      address_line1: '',
      address_line2: '',
      country: '',
      state: '',
      district: '',
      code: '',
    },
    validate: {
      name: (value) => {
        if (value.trim().length == 0) return translate('profile.error.addressOneError');
      },
      phoneNumber: (value) => {
        if (value.trim().length == 0) return translate('profile.error.addressOneError');
      },
      address_line1: (value) => {
        if (value.trim().length == 0) return translate('profile.error.addressOneError');
      },
      address_line2: (value) => {
        if (value.trim().length == 0) return translate('profile.error.addressTwoError');
      },
      country: (value) => {
        if (value.trim().length == 0) return translate('profile.error.countryError');
      },
      state: (value) => {
        if (value.trim().length == 0) return translate('profile.error.stateError');
      },
      district: (value) => {
        if (value.trim().length == 0) return translate('profile.error.districtError');
      },
      code: (value) => {
        if (value.trim().length == 0) return translate('profile.error.postalCodeError');
      },
    },
  });

  let countryLists: any = [];

  {
    Country.getAllCountries().map((key) => {
      countryLists.push({
        label: key.name,
        value: key.name,
      });
    });
  }

  const countryCode = Country.getAllCountries()
    .filter((country) => {
      if (country.name === address.values.country) return country.isoCode;
    })
    .map((country) => country.isoCode);

  let stateLists: any = [];
  {
    State.getStatesOfCountry(countryCode[0]).map((key) => {
      stateLists.push({
        label: key.name,
        value: key.name,
      });
    });
  }

  const countryStateCode = State.getStatesOfCountry(countryCode[0])
    .filter((country) => {
      if (country.name === address.values.state) return country.isoCode;
    })
    .map((code) => code.isoCode);

  let stateCityLists: any = [];
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
          props.setAddressId('');
        }}
        withCloseButton={false}
        styles={{
          overlay:{
            zIndex:999
          },
          inner:{
            zIndex:9999999
          }
        }}
      >
        <form onSubmit={address.onSubmit((values) => console.log(values))}>
          <Flex
            direction={i18nStore.isRTL ? 'row-reverse' : 'row'}
            justify={'space-between'}
            align={'center'}
          >
            <BaseText
              txtkey={props.modalHeading}
              style={typography.headings[i18nStore.getCurrentLanguage()].h6}
              color={theme.colors.dark[8]}
            />

            <Image
              onClick={() => {
                props.onClose();
                address.reset();
                props.setAddressId('');
              }}
              style={boilerPlateStyles.cursor}
              src={Images.close_modal_icon}
              alt="close_modal_icon"
              width={'14px'}
              height={'14px'}
            />
          </Flex>

          <Box mt={'30px'} dir={i18nStore.isRTL ? 'rtl' : 'ltr'}>
            <BaseText
              className={classes.align}
              txtkey="checkOutNow.addressModal.name"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Input
              classNames={{
                input: classes.input,
              }}
              mt={'xs'}
              inputMode="text"
              placeholder={`${translate("checkOutNow.addressModal.name")}`}
              style_variant={'inputText2'}
              component={'input'}
              {...address.getInputProps('name')}
            />
          </Box>
          <Box mt={'30px'} dir={i18nStore.isRTL ? 'rtl' : 'ltr'}>
            <BaseText
              className={classes.align}
              txtkey="checkOutNow.addressModal.phoneNumber"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Input
              classNames={{
                input: classes.input,
              }}
              mt={'xs'}
              inputMode="text"
              placeholder={`${translate("checkOutNow.addressModal.phoneNumber")}`}
              style_variant={'inputText2'}
              component={'input'}
              {...address.getInputProps('phoneNumber')}
            />
          </Box>
          
          <Box mt={'30px'} dir={i18nStore.isRTL ? 'rtl' : 'ltr'}>
            <BaseText
              className={classes.align}
              txtkey="profile.addressModal.country"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Select
              classNames={{
                rightSection: classes.rightSection,
                input: classes.input,
              }}
              mt={'xs'}
              // dir='rtl'
              searchable
              hoverOnSearchChange={false}
              placeholder={`${translate('profile.addressModal.country')}`}
              w={'100%'}
              variant="default"
              radius={'xl'}
              data={countryLists}
              // defaultValue={userStore.getAddress?.country}
              {...address.getInputProps('country')}
            />
          </Box>
          <Box mt={'20px'} dir={i18nStore.isRTL ? 'rtl' : 'ltr'}>
            <BaseText
              txtkey="profile.addressModal.state"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Select
              classNames={{
                rightSection: classes.rightSection,
                input: classes.input,
              }}
              mt={'xs'}
              searchable
              hoverOnSearchChange={false}
              placeholder={`${translate("profile.addressModal.state")}`}
              // style={boilerPlateStyles.input}
              w={'100%'}
              variant="default"
              radius={'xl'}
              // size="lg"
              data={stateLists}
              // defaultValue={userStore.getAddress?.state}
              {...address.getInputProps('state')}
            />
          </Box>
          <Box mt={'20px'} dir={i18nStore.isRTL ? 'rtl' : 'ltr'}>
            <BaseText
              txtkey="profile.addressModal.district"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Select
              classNames={{
                rightSection: classes.rightSection,
                input: classes.input,
              }}
              mt={'xs'}
              searchable
              hoverOnSearchChange={false}
              placeholder={`${translate("checkOutNow.addressModal.select")}`}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
              w={'100%'}
              variant="default"
              radius={'xl'}
              // size="lg"
              data={stateCityLists}
              // defaultValue={userStore.getAddress?.city}
              {...address.getInputProps('district')}
            />
          </Box>
          <Box mt={'30px'} dir={i18nStore.isRTL ? 'rtl' : 'ltr'}>
            <BaseText
              className={classes.align}
              txtkey='profile.addressModal.label1'
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Input
              classNames={{
                input: classes.input,
              }}
              mt={'xs'}
              inputMode="text"
              placeholder={`${translate('profile.addressModal.label1')}`}
              style_variant={'inputText2'}
              component={'input'}
              {...address.getInputProps('address_line1')}
            />
          </Box>
          <Box mt={'30px'} dir={i18nStore.isRTL ? 'rtl' : 'ltr'}>
            <BaseText
              className={classes.align}
              txtkey='profile.addressModal.label2'
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Input
              classNames={{
                input: classes.input,
              }}
              mt={'xs'}
              inputMode="text"
              placeholder={`${translate('profile.addressModal.label2')}`}
              style_variant={'inputText2'}
              component={'input'}
              {...address.getInputProps('address_line2')}
            />
          </Box>
          <Box mt={'20px'} dir={i18nStore.isRTL ? 'rtl' : 'ltr'}>
            <BaseText
              txtkey="profile.addressModal.code"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Input
              classNames={{
                input: classes.input,
              }}
              mt={'xs'}
              inputMode="numeric"
              placeholder={`${translate('profile.addressModal.code')}`}
              style_variant={'inputText2'}
              component={'input'}
              {...address.getInputProps('code')}
            />
          </Box>
          {/* {error ? <ErrorMessage message={error} /> : null} */}
          {!props.isEdit ? (
            <BaseButton
              mt={'30px'}
               
              loading={loader}
              style_variant={!address.isValid() ? 'disabled' : 'filled'}
              color_variant={!address.isValid() ? 'gray' : 'blue'}
              onClick={()=>{
                props.onClose()
                open()
                setLoader(true)
              }}
            >
              <BaseText txtkey="global.button.save" />
            </BaseButton>
          ) : null}
          {props.isEdit ? (
            <Flex
              direction={i18nStore.isRTL ? 'row-reverse' : 'row'}
              justify={'space-between'}
              align={'center'}
              gap={'md'}
              mt={'30px'}
            >
              <BaseButton
                 
                loading={loader}
                style_variant={!address.isValid() ? 'disabled' : 'filled'}
                color_variant={!address.isValid() ? 'gray' : 'blue'}
                onClick={()=>{
                  props.onClose()
                  open()
                  setLoader(true)
                }}
              >
                <BaseText txtkey="profile.addressModal.saveChanges" />
              </BaseButton>
              <BaseButton
                 
                style_variant={'outline'}
                color_variant={'blue'}
                onClick={() => {
                  props.onClose();
                  address.reset();
                  props.setAddressId('');
                }}
              >
                <BaseText txtkey="profile.addressModal.cancelEdit" color={theme.colors.blue[5]} />
              </BaseButton>
            </Flex>
          ) : null}
        </form>
      </BaseModal>
      <SuccessfulModal
        opened={opened}
        onClose={close}
        para="profile.addressModal.addressChangeSucccessful"
      />
    </>
  );
};