// react and nextb import
import React, { useState } from 'react';
// mantine component
import { useForm } from '@mantine/form';
import { Flex, Image, Stack, useMantineTheme } from '@mantine/core';
//  styles component
import { createStyle } from './ChangePasswordModal.styles';
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
import { SuccessfulModal } from '../SuccessfulModal/SuccessfulModal';
import { boilerPlateStyles } from '@/utils/styles/styles';
import ErrorMessage from '@/components/elements/ErrorMessage/ErrorMessage';

export const ChangePassword = (props: { opened?: any; onClose?: any; setAddressRecall: any }) => {
  const { i18nStore, userStore } = useStores();
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const useStyles = createStyle();
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const changepassword = useForm({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    validate: {
      currentPassword: (value) => {
        if (value.length < 7) {
          return translate('profile.modal.passwordLength');
        }
      },
      newPassword: (value) => {
        if (value.length < 7) {
          return translate('profile.modal.passwordLength');
        }
      },
      confirmNewPassword: (value) => {
        if (value.length < 7) {
          return translate('profile.modal.passwordLength');
        }
      },
    },
  });

  const passwordMatch = () =>
    changepassword.values.newPassword != changepassword.values.confirmNewPassword;

  const handlePasswordChange = () => {
    let results = changepassword.validate();
    if (results.hasErrors) return;
    if (!changepassword.isValid()) return;
    if (passwordMatch()) return;
    else {
      setLoader(true);
      userStore
        .changePassword(
          changepassword.values.currentPassword,
          changepassword.values.newPassword,
          changepassword.values.confirmNewPassword
        )
        .then((res) => {
          if (res.ok) {
            props.onClose();
            changepassword.reset();
            open();
            props.setAddressRecall(false)
          } else if (res.code == 400) {
            if (res.error) {
              changepassword.reset();
              setErrorMessage(res.error.toString());
              setTimeout(() => {
                setErrorMessage('');
              }, 3000);
            }
          }
        });
      setLoader(false);
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
          props.setAddressRecall(false)
        }}
        withCloseButton={false}
      >
        <Flex
          direction={i18nStore.isRTL ? 'row-reverse' : 'row'}
          justify={'space-between'}
          align={'center'}
        >
          <BaseText
            txtkey="profile.modal.changePasswordHeading"
            style={typography.headings[i18nStore.getCurrentLanguage()].h6}
            color={theme.colors.dark[8]}
          />

          <Image
            onClick={() => {
              props.onClose();
              changepassword.reset();
              props.setAddressRecall(false)
            }}
            style={boilerPlateStyles.cursor}
            src={Images.close_modal_icon}
            alt="close_modal_icon"
            width={'14px'}
            height={'14px'}
          />
        </Flex>
        <form onSubmit={changepassword.onSubmit((values) => console.log(values))}>
          <Stack mt={'34px'}>
            <BaseText
              txtkey="profile.modal.currentPassword"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <BasePasswordInput
              placeholder={`${translate('profile.modal.currentPassword')}`}
              {...changepassword.getInputProps('currentPassword')}
              autoComplete="on"
            />
          </Stack>
          <Stack my={'24px'}>
            <BaseText
              txtkey="profile.modal.newPassword"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <BasePasswordInput
              placeholder={`${translate('profile.modal.newPassword')}`}
              {...changepassword.getInputProps('newPassword')}
              autoComplete="on"
            />
          </Stack>
          <Stack>
            <BaseText
              txtkey="profile.modal.confirmPassword"
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <BasePasswordInput
              placeholder={`${translate('profile.modal.confirmPassword')}`}
              {...changepassword.getInputProps('confirmNewPassword')}
              autoComplete="on"
            />
          </Stack>
        </form>
        {passwordMatch() ? (
          <BaseText txtkey="profile.error.passwordMatchError" color={theme.colors.red[5]} />
        ) : null}
        {errorMessage ? <ErrorMessage message={errorMessage} /> : null}
        <BaseButton
          mt={'30px'}
          w={'100%'}
          h={'40px'}
          loading={loader}
          style_variant={!changepassword.isValid() || passwordMatch() ? 'disabled' : 'filled'}
          color_variant={!changepassword.isValid() || passwordMatch() ? 'gray' : 'blue'}
          onClick={handlePasswordChange}
        >
          <BaseText txtkey="global.button.save" />
        </BaseButton>
      </BaseModal>
      <SuccessfulModal opened={opened} onClose={close} para="profile.modal.passwordSuccessful" />
    </>
  );
};
