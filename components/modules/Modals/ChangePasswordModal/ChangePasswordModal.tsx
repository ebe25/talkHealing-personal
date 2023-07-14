// react and nextb import
import React from 'react';
// mantine component
import { useForm } from "@mantine/form";
import { Flex, Image, Stack, useMantineTheme } from '@mantine/core';
// internals components
import { BasePasswordInput } from '@/components/elements/PasswordInput/PasswordInput';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseModal } from '@/components/elements/BaseModal/BaseModal';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '../../../../themes/Mantine/typography';
// stores import
import { useStores } from '@/models';
// others import
import { Images } from '@/public';
import { translate } from '@/i18n';

export const ChangePassword = (props: { opened?: boolean; onClose?: any }) => {
  const { i18nStore } = useStores();
  const theme = useMantineTheme();
  const changepassword = useForm({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validate: {
      currentPassword: (value) => {
        if (value.trim().length < 8)
          return translate("profile.modal.passwordLength");
      },
      newPassword: (value) => {
        if (value.trim().length < 8)
          return translate("profile.modal.passwordLength");
      },
      confirmNewPassword: (value) => {
        if (value.trim().length < 8)
          return translate("profile.modal.passwordLength");
      },
    },
  });
  return (
    <BaseModal 
      size={"sm"}
      padding={"30px"} 
      radius={"xl"} 
      opened={props.opened} 
      onClose={props.onClose} 
      withCloseButton={false}
    >
      <form onSubmit={changepassword.onSubmit((values) => console.log(values))}>

      <Flex justify={'space-between'} align={'center'}>
        <BaseText
          txtkey="profile.modal.changePasswordHeading"
          style={typography.headings[i18nStore.getCurrentLanguage()].h6}
          color={theme.colors.dark[8]}
        />
        <Image
          onClick={()=>{
            props.onClose()
          }}
          src={Images.close_modal_icon}
          alt="close_modal_icon"
          width={'14px'}
          height={'14px'}
        />
      </Flex>
      <Stack mt={"34px"} >
        <BaseText
          txtkey='profile.modal.currentPassword'
          color={theme.colors.gray[6]}
          style={typography.label[i18nStore.getCurrentLanguage()].l1}
        />
        <BasePasswordInput
          placeholder={`${translate("profile.modal.currentPassword")}`}
          {...changepassword.getInputProps("currentPassword")}
        />
      </Stack>
      <Stack my={"24px"} >
        <BaseText
          txtkey='profile.modal.newPassword'
          color={theme.colors.gray[6]}
          style={typography.label[i18nStore.getCurrentLanguage()].l1}
        />
        <BasePasswordInput
          placeholder={`${translate("profile.modal.newPassword")}`}
          {...changepassword.getInputProps("newPassword")}
        />
      </Stack>
      <Stack >
        <BaseText
          txtkey='profile.modal.confirmPassword'
          color={theme.colors.gray[6]}
          style={typography.label[i18nStore.getCurrentLanguage()].l1}
        />
        <BasePasswordInput
          placeholder={`${translate("profile.modal.confirmPassword")}`}
          {...changepassword.getInputProps("confirmNewPassword")}
        />
      </Stack>
      <BaseButton
      mt={"30px"}
        w={"100%"}
        h={"40px"}
        style_variant={ !changepassword.isValid()? 'disabled':"filled"} 
        color_variant={ !changepassword.isValid()? 'gray':"blue"}        
      >
          <BaseText
            txtkey='global.button.save'
          />
      </BaseButton>
      </form>
    </BaseModal>
  );
};
