// react and nextb import
import React, { useEffect, useState } from 'react';
// mantine component
import { useForm } from '@mantine/form';
import { Box, Flex, Image, Select, useMantineTheme } from '@mantine/core';
// styles components
import { createStyle } from './AddressModal.styles';
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
import { SuccessfulModal } from '../SuccessfulModal/SuccessfulModal';
import { Input } from '@/components/elements/Input/Input';
//external
import { Country, State, City } from 'country-state-city';
import { boilerPlateStyles } from '@/utils/styles/styles';
import ErrorMessage from '@/components/elements/ErrorMessage/ErrorMessage';

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
}) => {
  const { i18nStore, userStore } = useStores();
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const useStyles = createStyle();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const { classes } = useStyles();
  const address = useForm({
    initialValues: {
      address_line1: '',
      address_line2: '',
      country: '',
      state: '',
      district: '',
      code: '',
    },
    validate: {
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

  useEffect(() => {
    userStore.getUserAddressById(props.id).then((res) => {
      if (res.ok) {
        if (userStore.getAddress != null) {
          address.setValues({
            address_line1: userStore.getAddress.address_line1,
            address_line2: userStore.getAddress.address_line2,
            country: userStore.getAddress.country,
            state: userStore.getAddress.state,
            district: userStore.getAddress.city,
            code: userStore.getAddress.postal_code,
          });
        }
      }
    });
  }, [props.id]);

  const data = {
    address_line1: address.values.address_line1,
    address_line2: address.values.address_line2,
    city: address.values.district,
    state: address.values.state,
    country: address.values.country,
    postal_code: address.values.code,
  };

  const addNewAddress = () => {
    let results = address.validate();
    if (results.hasErrors) return;
    if (!address.isValid()) return;
    else {
      setLoader(true);
      userStore.createAddress(data).then((res) => {
        if (res.ok) {
          props.onClose();
          address.reset();
          open();
          setLoader(false);
          props.setAddressRecall((pre: any) => !pre);
        } else if (res.code == 400) {
          if (res.error) {
            address.reset();
            setError(res.error);
            setLoader(false);
            setTimeout(() => {
              setError("")
            },5000)
          }
        }
      });
    }
  };
  const handleEditAddress = () => {
    let results = address.validate();
    if (results.hasErrors) return;
    if (!address.isValid()) return;
    else {
      setLoader(true);
      userStore.updateAddress(data, props.id).then((res) => {
        if (res.ok) {
          props.onClose();
          address.reset();
          open();
          props.setAddressId('');
          props.setAddressRecall((pre: any) => !pre);
          setLoader(false);
        } else if (res.code == 400) {
          if (res.error) {
            address.reset();
            setError(res.error);
            setLoader(false);
            setTimeout(() => {
              setError("")
            },5000)
          }
        }
      });
    }
  };

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
              placeholder={`${translate('profile.addressModal.state')}`}
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
              placeholder={`${translate('profile.addressModal.district')}`}
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
          <Box mt={'20px'} dir={i18nStore.isRTL ? 'rtl' : 'ltr'}>
            <BaseText
              txtkey="profile.addressModal.label1"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Input
              classNames={{
                input: classes.input,
              }}
              mt={'xs'}
              placeholder={`${translate('profile.addressModal.label1')}`}
              style_variant={'inputText2'}
              component={'input'}
              // defaultValue={userAddress?.address_line1}
              {...address.getInputProps('address_line1')}
            />
          </Box>
          <Box mt={'20px'} dir={i18nStore.isRTL ? 'rtl' : 'ltr'}>
            <BaseText
              txtkey="profile.addressModal.label2"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Input
              classNames={{
                input: classes.input,
              }}
              mt={'xs'}
              placeholder={`${translate('profile.addressModal.label2')}`}
              style_variant={'inputText2'}
              component={'input'}
              {...address.getInputProps('address_line2')}
            />
          </Box>
          {error ? <ErrorMessage message={error} /> : null}
          {!props.isEdit ? (
            <BaseButton
              mt={'30px'}
              w={'100%'}
              h={'40px'}
              loading={loader}
              style_variant={!address.isValid() ? 'disabled' : 'filled'}
              color_variant={!address.isValid() ? 'gray' : 'blue'}
              onClick={addNewAddress}
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
                w={'100%'}
                h={'40px'}
                loading={loader}
                style_variant={!address.isValid() ? 'disabled' : 'filled'}
                color_variant={!address.isValid() ? 'gray' : 'blue'}
                onClick={handleEditAddress}
              >
                <BaseText txtkey="profile.addressModal.saveChanges" />
              </BaseButton>
              <BaseButton
                w={'100%'}
                h={'40px'}
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
