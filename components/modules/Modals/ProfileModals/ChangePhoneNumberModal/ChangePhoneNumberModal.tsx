// react and nextb import
import React, { useState } from 'react';
// mantine component
import { useForm } from '@mantine/form';
import { Flex, Image, Stack, useMantineTheme } from '@mantine/core';
// internals components
import { BasePasswordInput } from '@/components/elements/PasswordInput/PasswordInput';
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

export const ChangePhoneNumberModal = (props: { opened?: boolean; onClose?: any }) => {
  const { i18nStore } = useStores();
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const changepassword = useForm({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    validate: {
      currentPassword: (value) => {
        if (value.trim().length < 8) return translate('profile.modal.passwordLength');
      },
      newPassword: (value) => {
        if (value.trim().length < 8) return translate('profile.modal.passwordLength');
      },
      confirmNewPassword: (value) => {
        if (value.trim().length < 8) return translate('profile.modal.passwordLength');
      },
    },
  });

  const handlePasswordChange = () => {
    let results = changepassword.validate();
    if (results.hasErrors) return;
    if (!changepassword.isValid()) return;
    else {
      props.onClose();
      changepassword.reset();
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
          changepassword.reset();
        }}
        withCloseButton={false}
      >
        <form onSubmit={changepassword.onSubmit((values) => console.log(values))}>
          <Flex justify={'space-between'} align={'center'}>
            <BaseText
              txtkey="profile.modal.changePhoneNumber"
              style={typography.headings[i18nStore.getCurrentLanguage()].h6}
              color={theme.colors.dark[8]}
            />

            <Image
              onClick={() => {
                props.onClose();
                changepassword.reset();
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
            <BasePasswordInput
              placeholder={`${translate('profile.modal.newPassword')}`}
              {...changepassword.getInputProps('newPassword')}
            />
          </Stack>
          <Stack>
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
                placeholder={`${translate('profile.modal.confirmPassword')}`}
                // {...changepassword.getInputProps('confirmNewPassword')}
            />
          </Stack>
          <BaseButton
            mt={'30px'}
            w={'100%'}
            h={'40px'}
            style_variant={ 'filled'}
            color_variant={'blue'}
            onClick={handlePasswordChange}
          >
            <BaseText txtkey="global.button.continue" />
          </BaseButton>
        </form>
      </BaseModal>
      <FinalModal opened={opened} onClose={close} para="profile.modal.passwordSuccessful" />
    </>
  );
};
